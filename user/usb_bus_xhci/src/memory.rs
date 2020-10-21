use core::{mem, mem::MaybeUninit, ptr};
use libpebble::{syscall, Handle};
use log::info;

const MEMORY_AREA_VIRTUAL_ADDRESS: usize = 0x50000000;
// TODO: how large should the command ring be?
const COMMAND_RING_SIZE: usize = 32;

/// We create a Memory Object to contain a few structures that we need to refer to by physical address:
/// ```ignore
///    +--------------------------------+ 0x00
///    |                                |
///    |         Device Context         |
///    |       Base Address Array       |
///    |                                |
///    +--------------------------------+ 8 * (num_ports + 1)
/// ```
///
/// ### Device Context Base Address Array
/// The Device Context Base Address Array contains an entry for each enabled port, plus an extra one at index 0 for
/// the Scratchpad Buffer Array. If Max Scratchpad Buffers (a field of `HCSPARAMS2`) is `0`, then the first entry
/// should be cleared to `0`.
///
/// The structure must be aligned on a 64-byte boundary; this is guaranteed as the base address of the area will be
/// page-aligned.
///
/// Device Contexts must be aligned on a 64-byte boundary so the remaining entries are of the form:
/// ```ignore
///   63                                                     6        0
///    +-----------------------------------------------------+--------+
///    |   Physical address of Device Context structure      | RsvdZ  |
///    +-----------------------------------------------------+--------+
/// ```
///
/// The physical address of this structure should be loaded into the `Device Context Base Address Array Pointer
/// Register (DCBAAP)` register in the Operational Registers block.
pub struct MemoryArea {
    memory_object: Handle,
    physical_address: u64,
    num_ports: u8,
}

impl MemoryArea {
    pub fn new(num_ports: u8) -> MemoryArea {
        let bytes_for_device_context_base_address_array = (usize::from(num_ports) + 1) * mem::size_of::<u64>();

        let (memory_object, physical_address) = {
            let size = bytes_for_device_context_base_address_array;
            let mut physical_address: MaybeUninit<usize> = MaybeUninit::uninit();

            let handle = syscall::create_memory_object(
                MEMORY_AREA_VIRTUAL_ADDRESS,
                size,
                true,
                false,
                physical_address.as_mut_ptr(),
            )
            .unwrap();
            unsafe {
                syscall::map_memory_object(&handle, &libpebble::ZERO_HANDLE, None, 0x0 as *mut usize).unwrap();
            }

            (handle, unsafe { physical_address.assume_init() } as u64)
        };
        info!("Memory area is at physical address {:#x}", physical_address);

        let mut area = MemoryArea { memory_object, physical_address, num_ports };
        for i in 0..(num_ports + 1) {
            area.set_device_context_entry(i, 0x0);
        }

        area
    }

    pub fn set_device_context_entry(&mut self, index: u8, address: u64) {
        unsafe {
            ptr::write_volatile(
                (MEMORY_AREA_VIRTUAL_ADDRESS + usize::from(index) * mem::size_of::<u64>()) as *mut u64,
                address,
            );
        }
    }

    pub fn physical_address_of_device_context_base_address_array(&self) -> u64 {
        // Device Context Base Address Array is at the start of the area
        self.physical_address
    }
}
