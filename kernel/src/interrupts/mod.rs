/*
 * Copyright (C) 2017, Isaac Woods.
 * See LICENCE.md
 */

mod gdt;
mod idt;
mod pic;

use spin::{Once,Mutex};
use x86_64::VirtualAddress;
use x86_64::structures::gdt::SegmentSelector;
use x86_64::structures::tss::TaskStateSegment;
use x86_64::instructions::segmentation::set_cs;
use x86_64::instructions::tables::load_tss;
use memory::{FrameAllocator,MemoryController};
use rustos_common::port::Port;
use self::gdt::DescriptorFlags;
use self::idt::{Idt};
use self::pic::{PicPair};

const DOUBLE_FAULT_IST_INDEX : usize = 0;

/*lazy_static!
{
    static ref IDT : Idt =
        {
            let mut idt = Idt::new();
            idt.breakpoint().set_handler(breakpoint_handler);
//            idt.page_fault().set_handler(page_fault_handler);
//            idt.double_fault().set_handler(double_fault_handler);

/*            unsafe
            {
                idt.double_fault.set_handler_fn(double_fault_handler)
                                .set_stack_index(DOUBLE_FAULT_IST_INDEX as u16);
            }*/

//            idt[32].set_handler(timer_handler);  // IRQ0
//            idt[33].set_handler(key_handler);    // IRQ1

            idt
        };
}*/

//static TSS : Once<TaskStateSegment> = Once::new();
//static GDT : Once<gdt::Gdt>         = Once::new();

//static PIC_PAIR : Mutex<PicPair> = Mutex::new(unsafe { PicPair::new(0x20, 0x28) });

//static IDT : Once<Idt> = Once::new();
static mut GDT : Option<gdt::Gdt> = None;
static mut IDT : Option<Idt> = None;

fn unwrap_option<'a, T>(option : &'a mut Option<T>) -> &'a mut T
{
    match option
    {
        &mut Some(ref mut value) => value,
        &mut None => panic!("Shit"),
    }
}

pub fn init<A>(memory_controller : &mut MemoryController<A>) where A : FrameAllocator
{
    /*
     * Allocate a 4KiB stack for the double-fault handler. Using a separate stack
     * avoids a triple fault happening when the guard page of the normal stack is hit (after a stack
     * overflow) which would otherwise
     *      Page Fault -> Page Fault -> Double Fault -> Page Fault -> Triple Fault
     */
//    let double_fault_stack = memory_controller.alloc_stack(1).expect("Failed to allocate double-fault stack");

/*    let tss = TSS.call_once(
        || {
            let mut tss = TaskStateSegment::new();
            tss.interrupt_stack_table[DOUBLE_FAULT_IST_INDEX] = VirtualAddress(double_fault_stack.top());
            tss
        });

    let mut code_selector = SegmentSelector(0);
    let mut tss_selector  = SegmentSelector(0);
    let gdt = GDT.call_once(
        || {
            let mut gdt = gdt::Gdt::new();
            code_selector = gdt.add_entry(gdt::Descriptor::create_kernel_code_segment());
            tss_selector  = gdt.add_entry(gdt::Descriptor::create_tss_segment(&tss));
            gdt
        });

    gdt.load();

    unsafe
    {
        /*
         * Reload the GDT
         */
        set_cs(code_selector);
        load_tss(tss_selector);
    }*/

    /*let idt = *//*IDT.call_once(
        || {
            println!("IDT closure called");
            let mut idt = Idt::new();
            idt.breakpoint().set_handler(breakpoint_handler);
            idt
        });*/

    unsafe
    {
        /*
         * Create the new GDT
         * XXX: We can't use the old one since it resided in the bootstrap and so is no longer
         *      mapped into the address space
         */
        GDT = Some(gdt::Gdt::new());
        //let mut code_selector = unwrap_option(&mut GDT).add_entry(gdt::Descriptor::create_kernel_code_segment());
        let mut code_selector = unwrap_option(&mut GDT).add_entry(gdt::Descriptor::UserSegment((DescriptorFlags::USER_SEGMENT  |
                                                                                                DescriptorFlags::PRESENT       |
                                                                                                DescriptorFlags::EXECUTABLE    |
                                                                                                DescriptorFlags::LONG_MODE).bits()));
        unwrap_option(&mut GDT).load();

        // Create the IDT
        IDT = Some(Idt::new());
        unwrap_option(&mut IDT).breakpoint().set_handler(breakpoint_handler);
        unwrap_option(&mut IDT).load();
    }

//    IDT.load();
//    idt.load();
/*    unsafe
    {
        PIC_PAIR.lock().remap();
    }*/
}

//extern "x86-interrupt" fn breakpoint_handler(stack_frame : &mut ExceptionStackFrame)
extern "C" fn breakpoint_handler() -> !
{
    //println!("EXCEPTION: BREAKPOINT\n{:#?}", stack_frame);
    println!("BREAKPOINT!");
    loop {}
}
/*
extern "x86-interrupt" fn page_fault_handler(stack_frame : &mut ExceptionStackFrame,
                                             error_code  : PageFaultErrorCode)
{
    println!("PAGE_FAULT: {}", match (/*  P  (Present        ) */(error_code.bits() >> 0) & 0b1,
                                      /* R/W (Read/Write     ) */(error_code.bits() >> 1) & 0b1,
                                      /* U/S (User/Supervisor) */(error_code.bits() >> 2) & 0b1)
    {
        (0, 0, 0) => "Kernel tried to read a non-present page"                                      ,
        (0, 0, 1) => "Kernel tried to read a non-present page, causing a protection fault"          ,
        (0, 1, 0) => "Kernel tried to write to a non-present page"                                  ,
        (0, 1, 1) => "Kernel tried to write to a non-present page, causing a protection fault"      ,
        (1, 0, 0) => "User process tried to read a non-present page"                                ,
        (1, 0, 1) => "User process tried to read a non-present page, causing a protection fault"    ,
        (1, 1, 0) => "User process tried to write to a non-present page"                            ,
        (1, 1, 1) => "User process tried to write to a non-present page, causing a protection fault",

        (_, _, _) => { panic!("UNRECOGNISED PAGE-FAULT ERROR CODE"); },
    });


    println!("\n{:#?}", stack_frame);

    /*
     * Page-faults can be recovered from and so are faults, but we never will so just give up.
     */
    loop { }
}

extern "x86-interrupt" fn double_fault_handler(stack_frame : &mut ExceptionStackFrame,
                                               error_code : u64)
{
    println!("EXCEPTION: DOUBLE FAULT   (Error code: {})\n{:#?}", error_code, stack_frame);
    loop { }
}

extern "x86-interrupt" fn timer_handler(_ : &mut ExceptionStackFrame)
{
    unsafe { PIC_PAIR.lock().send_eoi(32); }
}

static KEYBOARD_PORT : Port<u8> = unsafe { Port::new(0x60) };

extern "x86-interrupt" fn key_handler(_ : &mut ExceptionStackFrame)
{
    println!("Key interrupt: Scancode={:#x}", unsafe { KEYBOARD_PORT.read() });

    unsafe { PIC_PAIR.lock().send_eoi(33); }
}*/
