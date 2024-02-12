//! `usb_bus_ehci` is a driver compatible with EHCI USB host controllers.
//!
//! ### Development
//!    - On QEMU, enabling tracing of `usb_ehci_*` events is helpful for debugging.

#![feature(never_type)]

mod caps;
mod queue;
mod reg;

use crate::{
    caps::Capabilities,
    queue::{Queue, QueueHead},
    reg::{Command, InterruptEnable, LineStatus, OpRegister, PortStatusControl, Status},
};
use bit_field::BitField;
use log::{info, trace};
use platform_bus::{BusDriverMessage, DeviceDriverMessage, DeviceDriverRequest, Filter, Property};
use queue::HorizontalLinkPtr;
use std::{
    collections::BTreeMap,
    mem,
    ops::Deref,
    poplar::{
        caps::{CapabilitiesRepr, CAP_EARLY_LOGGING, CAP_PADDING, CAP_SERVICE_USER},
        channel::Channel,
        ddk::dma::{DmaObject, DmaPool},
        early_logger::EarlyLogger,
        memory_object::MemoryObject,
        syscall::{self, MemoryObjectFlags},
    },
};
use usb::{
    descriptor::{DeviceDescriptor, DeviceDescriptorHeader},
    setup::{Direction, Recipient, Request, RequestType, RequestTypeType, SetupPacket},
};

pub struct Controller {
    register_base: usize,
    caps: Capabilities,
    free_addresses: Vec<u8>,
    schedule_pool: DmaPool,
    active_devices: BTreeMap<u8, ActiveDevice>,
}

pub struct ActiveDevice {
    control_queue: Queue,
}

impl Controller {
    pub fn new(register_base: usize) -> Controller {
        let caps = Capabilities::read_from_registers(register_base);
        info!("Capabilites: {:#?}", caps);

        // TODO: once we have kernel virtual address space management, just let it find an address
        // for us
        const SCHEDULE_POOL_ADDRESS: usize = 0x00000005_10000000;
        let schedule_pool = DmaPool::new(unsafe {
            MemoryObject::create_physical(0x1000, MemoryObjectFlags::WRITABLE)
                .unwrap()
                .map_at(SCHEDULE_POOL_ADDRESS)
                .unwrap()
        });

        Controller {
            register_base,
            caps,
            free_addresses: (1..128).collect(),
            schedule_pool,
            active_devices: BTreeMap::new(),
        }
    }

    pub fn initialize(&mut self) {
        /*
         * We only support controllers that don't support 64-bit addressing at the moment. This
         * means we don't need to set `CTRLDSSEGMENT`.
         */
        assert!(!self.caps.can_address_64bit);

        // If the controller has already been used by the firmware, halt it before trying to reset
        if !self.read_status().get(Status::CONTROLLER_HALTED) {
            info!("EHCI controller has already been started. Halting it.");
            let command = self.read_command();
            unsafe {
                self.write_command(
                    Command::new()
                        .with(Command::RUN, false)
                        .with(Command::INTERRUPT_THRESHOLD, command.get(Command::INTERRUPT_THRESHOLD)),
                );
            }
            while !self.read_status().get(Status::CONTROLLER_HALTED) {}
        }

        // Reset the controller
        unsafe {
            self.write_command(Command::new().with(Command::RESET, true).with(Command::INTERRUPT_THRESHOLD, 0x08));
            while self.read_command().get(Command::RESET) {}
        }
        info!("EHCI controller reset");

        unsafe {
            // Enable interrupts we're interested in
            self.write_operational_register(
                OpRegister::InterruptEnable,
                (InterruptEnable::INTERRUPT
                    | InterruptEnable::ERROR
                    // | InterruptEnable::PORT_CHANGE       // TODO: we actually need to handle +
                                // acknowledge this otherwise the controller seems to get confused and won't
                                // signal transaction interrupts correctly
                    | InterruptEnable::HOST_ERROR)
                    .bits(),
            );

            // Turn the controller on
            self.write_command(Command::new().with(Command::RUN, true).with(Command::INTERRUPT_THRESHOLD, 0x08));

            // Route all ports to the EHCI controller
            self.write_operational_register(OpRegister::ConfigFlag, 1);
        }
    }

    pub fn check_ports(&mut self) {
        assert!(!self.caps.port_power_control, "We don't support port power control");

        for port in 0..self.caps.num_ports {
            let port_reg = unsafe { self.read_port_register(port) };

            if port_reg.get(PortStatusControl::PORT_ENABLED_CHANGE) {
                // TODO: handle this better
                info!("Port error on port {}", port);
            }

            if port_reg.get(PortStatusControl::CONNECT_STATUS_CHANGE) {
                // Clear the changed status by writing a `1` to it
                unsafe {
                    self.write_port_register(
                        port,
                        PortStatusControl::new().with(PortStatusControl::CONNECT_STATUS_CHANGE, true),
                    );
                }

                if port_reg.get(PortStatusControl::CURRENT_CONNECT_STATUS) {
                    // Read the initial state of the D+/D- pins. This allows us to detect Low-Speed
                    // devices before resetting the port.
                    if port_reg.get(PortStatusControl::LINE_STATUS) == LineStatus::KState {
                        /*
                         * The line being in K-state means the connected device is Low-Speed. It
                         * must be handed off to a companion controller.
                         */
                        trace!("Device on port {} is low-speed. Handing off to companion controller.", port);
                        unsafe {
                            self.write_port_register(
                                port,
                                PortStatusControl::new().with(PortStatusControl::PORT_OWNER, true),
                            );
                        }
                    } else {
                        /*
                         * All line states except K-state mean the connected device is not
                         * Low-Speed. We can start the port reset and enable sequence.
                         */
                        trace!("Connected device on port {}", port);
                        self.handle_device_connect(port);
                    }
                } else {
                    trace!("Device on port {} disconnected", port);
                }
            }
        }
    }

    pub fn handle_device_connect(&mut self, port: u8) {
        self.reset_port(port);

        unsafe {
            if self.read_port_register(port).get(PortStatusControl::PORT_ENABLED) {
                // The device is High-Speed. Let's manage it ourselves.
                let address = self.free_addresses.pop().unwrap();
                trace!("Device on port {} is high-speed. Allocated address {} for it to use.", port, address);

                // Create a new queue for the new device's control endpoint
                let mut queue = Queue::new(self.schedule_pool.create(QueueHead::new()).unwrap());
                self.add_to_async_schedule(&mut queue);

                let set_address = self
                    .schedule_pool
                    .create(SetupPacket {
                        typ: RequestType::new()
                            .with(RequestType::RECIPIENT, Recipient::Device)
                            .with(RequestType::TYP, RequestTypeType::Standard)
                            .with(RequestType::DIRECTION, Direction::HostToDevice),
                        request: Request::SetAddress,
                        value: address as u16,
                        index: 0,
                        length: 0,
                    })
                    .unwrap();
                queue.control_transfer::<()>(&set_address, None, true, &mut self.schedule_pool);

                // TODO: this should be done by waiting for an interrupt instead of polling
                while !self.read_status().get(Status::INTERRUPT) {}
                info!("SetAddress operation complete!");
                self.write_status(Status::new().with(Status::INTERRUPT, true));

                queue.set_address(address);

                let get_descriptor_header = self
                    .schedule_pool
                    .create(SetupPacket {
                        typ: RequestType::new()
                            .with(RequestType::RECIPIENT, Recipient::Device)
                            .with(RequestType::TYP, RequestTypeType::Standard)
                            .with(RequestType::DIRECTION, Direction::DeviceToHost),
                        request: Request::GetDescriptor,
                        value: 1 << 8, // TODO: should probs be a type DescriptorType
                        index: 0,
                        length: 8,
                    })
                    .unwrap();
                let mut descriptor: DmaObject<DeviceDescriptorHeader> =
                    self.schedule_pool.create(DeviceDescriptorHeader::default()).unwrap();
                queue.control_transfer(
                    &get_descriptor_header,
                    Some(&mut descriptor),
                    false,
                    &mut self.schedule_pool,
                );

                while !self.read_status().get(Status::INTERRUPT) {}
                info!("GetDescriptor operation complete!");
                self.write_status(Status::new().with(Status::INTERRUPT, true));

                info!("Device Descriptor header: {:#?}", descriptor.deref());

                // TODO: set the max packet size somewhere now we know it from the descriptor? Or
                // do we care since it should always be 64 for high-speed devices no?

                // Get the rest of the descriptor
                let get_descriptor = self
                    .schedule_pool
                    .create(SetupPacket {
                        typ: RequestType::new()
                            .with(RequestType::RECIPIENT, Recipient::Device)
                            .with(RequestType::TYP, RequestTypeType::Standard)
                            .with(RequestType::DIRECTION, Direction::DeviceToHost),
                        request: Request::GetDescriptor,
                        value: 1 << 8, // TODO: should probs be a type DescriptorType
                        index: 0,
                        length: mem::size_of::<DeviceDescriptor>() as u16,
                    })
                    .unwrap();
                let mut descriptor: DmaObject<DeviceDescriptor> =
                    self.schedule_pool.create(DeviceDescriptor::default()).unwrap();
                queue.control_transfer(&get_descriptor, Some(&mut descriptor), false, &mut self.schedule_pool);

                while !self.read_status().get(Status::INTERRUPT) {}
                info!("GetDescriptor operation complete!");
                self.write_status(Status::new().with(Status::INTERRUPT, true));

                info!("Device Descriptor: {:#?}", descriptor.deref());

                /*
                 * Add the newly discovered device to our list of active devices. This is important
                 * as it prevents the queue from being dropped while it is in the async schedule.
                 * TODO: might be safer to hold `Arc`s to the queue and keep track of stuff in the
                 * async schedule to stop queues being dropped out from under the controller?
                 */
                self.active_devices.insert(address, ActiveDevice { control_queue: queue });

                // TODO: read configuration and interfaces?
                // TODO: tell `platform_bus` all about our new device :)
            } else {
                /*
                 * The device is not High-Speed. Hand it off to a companion controller to deal
                 * with.
                 */
                trace!("Device on port {} is full-speed. Handing off to companion controller.", port);
                self.write_port_register(port, PortStatusControl::new().with(PortStatusControl::PORT_OWNER, true));
            }
        }
    }

    pub fn add_to_async_schedule(&mut self, queue: &mut Queue) {
        /*
         * TODO: this currently assumes we only have a single queue head. To manage more than one,
         * we need to:
         *    - Keep track of queues in the schedule (this will probably involve them become
         *      `Arc<RefCell<Queue>>`s is the problem)
         *    - If there are already queue heads in the schedule, point to the current head with
         *      our horizontal link ptr and then replace the `NextAsyncListAddress`.
         *    - Reconfigure the reclaim list heads - this newest queue head becomes the reclaim
         *      head, and the current one has its H-bit cleared.
         */
        queue.set_reclaim_head(true);
        queue.head.horizontal_link = HorizontalLinkPtr::new(queue.head.phys as u32, 0b01, false);
        unsafe {
            self.write_operational_register(OpRegister::NextAsyncListAddress, queue.head.phys as u32);
            self.write_operational_register(
                OpRegister::Command,
                Command::new()
                    .with(Command::RUN, true)
                    .with(Command::ASYNC_SCHEDULE_ENABLE, true)
                    .with(Command::INTERRUPT_THRESHOLD, 0x08)
                    .bits(),
            );
        }
    }

    pub fn reset_port(&mut self, port: u8) {
        unsafe {
            /*
             * Reset the port by toggling the PortReset bit and then waiting for it to clear.
             */
            self.write_port_register(port, PortStatusControl::new().with(PortStatusControl::PORT_RESET, true));
            // TODO: apparently we're meant to time a duration here???? QEMU doesn't complain about
            // no delay but I bet real ones do
            self.write_port_register(port, PortStatusControl::new());
            while self.read_port_register(port).get(PortStatusControl::PORT_RESET) {}
        }
    }

    pub fn read_status(&self) -> Status {
        Status::from_bits(unsafe { self.read_operational_register(OpRegister::Status) })
    }

    pub unsafe fn write_status(&mut self, value: Status) {
        unsafe {
            self.write_operational_register(OpRegister::Status, value.bits());
        }
    }

    pub fn read_command(&self) -> Command {
        Command::from_bits(unsafe { self.read_operational_register(OpRegister::Command) })
    }

    pub unsafe fn write_command(&mut self, value: Command) {
        unsafe {
            self.write_operational_register(OpRegister::Command, value.bits());
        }
    }

    pub unsafe fn read_operational_register(&self, reg: OpRegister) -> u32 {
        let address = self.register_base + self.caps.cap_length as usize + (reg as u32 as usize);
        unsafe { std::ptr::read_volatile(address as *mut u32) }
    }

    pub unsafe fn write_operational_register(&mut self, reg: OpRegister, value: u32) {
        let address = self.register_base + self.caps.cap_length as usize + (reg as u32 as usize);
        unsafe {
            std::ptr::write_volatile(address as *mut u32, value);
        }
    }

    pub unsafe fn read_port_register(&self, port: u8) -> PortStatusControl {
        let address =
            self.register_base + self.caps.cap_length as usize + 0x44 + mem::size_of::<u32>() * port as usize;
        PortStatusControl::from_bits(unsafe { std::ptr::read_volatile(address as *const u32) })
    }

    pub unsafe fn write_port_register(&self, port: u8, value: PortStatusControl) {
        let address =
            self.register_base + self.caps.cap_length as usize + 0x44 + mem::size_of::<u32>() * port as usize;
        unsafe {
            std::ptr::write_volatile(address as *mut u32, value.bits());
        }
    }
}

fn main() {
    log::set_logger(&EarlyLogger).unwrap();
    log::set_max_level(log::LevelFilter::Trace);
    info!("EHCI USB Bus Driver is running!");

    // This allows us to talk to the PlatformBus as a bus driver (to register USB devices).
    let platform_bus_bus_channel: Channel<BusDriverMessage, !> =
        Channel::from_handle(syscall::subscribe_to_service("platform_bus.bus_driver").unwrap());
    // This allows us to talk to the PlatformBus as a device driver (to find controllers we can manage).
    let platform_bus_device_channel: Channel<DeviceDriverMessage, DeviceDriverRequest> =
        Channel::from_handle(syscall::subscribe_to_service("platform_bus.device_driver").unwrap());

    // Tell PlatformBus that we're interested in EHCI controllers.
    platform_bus_device_channel
        .send(&DeviceDriverMessage::RegisterInterest(vec![
            Filter::Matches(String::from("pci.class"), Property::Integer(0x0c)),
            Filter::Matches(String::from("pci.sub_class"), Property::Integer(0x03)),
            Filter::Matches(String::from("pci.interface"), Property::Integer(0x20)),
        ]))
        .unwrap();

    // TODO: we currently only support one controller, and just stop listening after we find the first one
    // TODO: probably don't bother changing this until we have a futures-based message interface
    let (_device_info, handoff_info) = loop {
        match platform_bus_device_channel.try_receive().unwrap() {
            Some(DeviceDriverRequest::QuerySupport(device_name, device_info)) => {
                platform_bus_device_channel.send(&DeviceDriverMessage::CanSupport(device_name, true)).unwrap();
            }
            Some(DeviceDriverRequest::HandoffDevice(device_name, device_info, handoff_info)) => {
                info!("Started driving a EHCI controller: {}", device_name);
                break (device_info, handoff_info);
            }
            None => syscall::yield_to_kernel(),
        }
    };

    let register_space_size = handoff_info.get_as_integer("pci.bar0.size").unwrap() as usize;

    // TODO: let the kernel choose the address when it can - we don't care
    // TODO: this trusts the data from the platform_bus. Maybe we shouldn't do that? One
    // idea would be a syscall for querying info about the object?
    let register_space = MemoryObject {
        handle: handoff_info.get_as_memory_object("pci.bar0.handle").unwrap(),
        size: register_space_size,
        flags: MemoryObjectFlags::WRITABLE,
        phys_address: None,
    };
    const REGISTER_SPACE_ADDRESS: usize = 0x00000005_00000000;
    unsafe {
        register_space.map_at(REGISTER_SPACE_ADDRESS).unwrap();
    }

    let mut controller = Controller::new(REGISTER_SPACE_ADDRESS);
    controller.initialize();
    controller.check_ports();

    loop {
        std::poplar::syscall::yield_to_kernel();
    }
}

#[used]
#[link_section = ".caps"]
pub static mut CAPS: CapabilitiesRepr<4> =
    CapabilitiesRepr::new([CAP_EARLY_LOGGING, CAP_SERVICE_USER, CAP_PADDING, CAP_PADDING]);
