(function() {var implementors = {
"byteorder":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"byteorder/enum.BigEndian.html\" title=\"enum byteorder::BigEndian\">BigEndian</a>&gt; for <a class=\"enum\" href=\"byteorder/enum.BigEndian.html\" title=\"enum byteorder::BigEndian\">BigEndian</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"byteorder/enum.LittleEndian.html\" title=\"enum byteorder::LittleEndian\">LittleEndian</a>&gt; for <a class=\"enum\" href=\"byteorder/enum.LittleEndian.html\" title=\"enum byteorder::LittleEndian\">LittleEndian</a>"]],
"hal":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"hal/memory/struct.VAddr.html\" title=\"struct hal::memory::VAddr\">VAddr</a>&gt; for <a class=\"struct\" href=\"hal/memory/struct.VAddr.html\" title=\"struct hal::memory::VAddr\">VAddr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"hal/memory/enum.Size4KiB.html\" title=\"enum hal::memory::Size4KiB\">Size4KiB</a>&gt; for <a class=\"enum\" href=\"hal/memory/enum.Size4KiB.html\" title=\"enum hal::memory::Size4KiB\">Size4KiB</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"hal/memory/struct.PAddr.html\" title=\"struct hal::memory::PAddr\">PAddr</a>&gt; for <a class=\"struct\" href=\"hal/memory/struct.PAddr.html\" title=\"struct hal::memory::PAddr\">PAddr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"hal/memory/enum.Size1GiB.html\" title=\"enum hal::memory::Size1GiB\">Size1GiB</a>&gt; for <a class=\"enum\" href=\"hal/memory/enum.Size1GiB.html\" title=\"enum hal::memory::Size1GiB\">Size1GiB</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"hal/memory/enum.Size2MiB.html\" title=\"enum hal::memory::Size2MiB\">Size2MiB</a>&gt; for <a class=\"enum\" href=\"hal/memory/enum.Size2MiB.html\" title=\"enum hal::memory::Size2MiB\">Size2MiB</a>"],["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"hal/memory/trait.FrameSize.html\" title=\"trait hal::memory::FrameSize\">FrameSize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"hal/memory/struct.Page.html\" title=\"struct hal::memory::Page\">Page</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"hal/memory/struct.Page.html\" title=\"struct hal::memory::Page\">Page</a>&lt;S&gt;"],["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"hal/memory/struct.Frame.html\" title=\"struct hal::memory::Frame\">Frame</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"hal/memory/struct.Frame.html\" title=\"struct hal::memory::Frame\">Frame</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"hal/memory/trait.FrameSize.html\" title=\"trait hal::memory::FrameSize\">FrameSize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</span>"]],
"heapless":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"heapless/sorted_linked_list/struct.LinkedIndexUsize.html\" title=\"struct heapless::sorted_linked_list::LinkedIndexUsize\">LinkedIndexUsize</a>&gt; for <a class=\"struct\" href=\"heapless/sorted_linked_list/struct.LinkedIndexUsize.html\" title=\"struct heapless::sorted_linked_list::LinkedIndexUsize\">LinkedIndexUsize</a>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"heapless/pool/singleton/struct.Box.html\" title=\"struct heapless::pool::singleton::Box\">Box</a>&lt;P, <a class=\"enum\" href=\"heapless/pool/enum.Init.html\" title=\"enum heapless::pool::Init\">Init</a>&gt;&gt; for <a class=\"struct\" href=\"heapless/pool/singleton/struct.Box.html\" title=\"struct heapless::pool::singleton::Box\">Box</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"heapless/pool/singleton/trait.Pool.html\" title=\"trait heapless::pool::singleton::Pool\">Pool</a>,\n    P::<a class=\"associatedtype\" href=\"heapless/pool/singleton/trait.Pool.html#associatedtype.Data\" title=\"type heapless::pool::singleton::Pool::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"heapless/pool/singleton/arc/struct.Arc.html\" title=\"struct heapless::pool::singleton::arc::Arc\">Arc</a>&lt;P&gt;&gt; for <a class=\"struct\" href=\"heapless/pool/singleton/arc/struct.Arc.html\" title=\"struct heapless::pool::singleton::arc::Arc\">Arc</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"heapless/pool/singleton/arc/trait.Pool.html\" title=\"trait heapless::pool::singleton::arc::Pool\">Pool</a>,\n    P::<a class=\"associatedtype\" href=\"heapless/pool/singleton/arc/trait.Pool.html#associatedtype.Data\" title=\"type heapless::pool::singleton::arc::Pool::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"heapless/sorted_linked_list/struct.LinkedIndexU8.html\" title=\"struct heapless::sorted_linked_list::LinkedIndexU8\">LinkedIndexU8</a>&gt; for <a class=\"struct\" href=\"heapless/sorted_linked_list/struct.LinkedIndexU8.html\" title=\"struct heapless::sorted_linked_list::LinkedIndexU8\">LinkedIndexU8</a>"],["impl&lt;T, const N1: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, const N2: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N2&gt;&gt; for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N1&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"heapless/pool/struct.Box.html\" title=\"struct heapless::pool::Box\">Box</a>&lt;T, <a class=\"enum\" href=\"heapless/pool/enum.Init.html\" title=\"enum heapless::pool::Init\">Init</a>&gt;&gt; for <a class=\"struct\" href=\"heapless/pool/struct.Box.html\" title=\"struct heapless::pool::Box\">Box</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"heapless/sorted_linked_list/struct.LinkedIndexU16.html\" title=\"struct heapless::sorted_linked_list::LinkedIndexU16\">LinkedIndexU16</a>&gt; for <a class=\"struct\" href=\"heapless/sorted_linked_list/struct.LinkedIndexU16.html\" title=\"struct heapless::sorted_linked_list::LinkedIndexU16\">LinkedIndexU16</a>"],["impl&lt;const N1: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, const N2: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N2&gt;&gt; for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N1&gt;"]],
"kernel":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"kernel/object/struct.KernelObjectId.html\" title=\"struct kernel::object::KernelObjectId\">KernelObjectId</a>&gt; for <a class=\"struct\" href=\"kernel/object/struct.KernelObjectId.html\" title=\"struct kernel::object::KernelObjectId\">KernelObjectId</a>"]],
"log":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"log/enum.LevelFilter.html\" title=\"enum log::LevelFilter\">LevelFilter</a>&gt; for <a class=\"enum\" href=\"log/enum.Level.html\" title=\"enum log::Level\">Level</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"log/enum.LevelFilter.html\" title=\"enum log::LevelFilter\">LevelFilter</a>&gt; for <a class=\"enum\" href=\"log/enum.LevelFilter.html\" title=\"enum log::LevelFilter\">LevelFilter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"log/enum.Level.html\" title=\"enum log::Level\">Level</a>&gt; for <a class=\"enum\" href=\"log/enum.LevelFilter.html\" title=\"enum log::LevelFilter\">LevelFilter</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"log/struct.Metadata.html\" title=\"struct log::Metadata\">Metadata</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"log/struct.Metadata.html\" title=\"struct log::Metadata\">Metadata</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"log/enum.Level.html\" title=\"enum log::Level\">Level</a>&gt; for <a class=\"enum\" href=\"log/enum.Level.html\" title=\"enum log::Level\">Level</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"log/struct.MetadataBuilder.html\" title=\"struct log::MetadataBuilder\">MetadataBuilder</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"log/struct.MetadataBuilder.html\" title=\"struct log::MetadataBuilder\">MetadataBuilder</a>&lt;'a&gt;"]],
"pci_types":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"pci_types/struct.PciAddress.html\" title=\"struct pci_types::PciAddress\">PciAddress</a>&gt; for <a class=\"struct\" href=\"pci_types/struct.PciAddress.html\" title=\"struct pci_types::PciAddress\">PciAddress</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"enum\" href=\"pci_types/capability/enum.MultipleMessageSupport.html\" title=\"enum pci_types::capability::MultipleMessageSupport\">MultipleMessageSupport</a>&gt; for <a class=\"enum\" href=\"pci_types/capability/enum.MultipleMessageSupport.html\" title=\"enum pci_types::capability::MultipleMessageSupport\">MultipleMessageSupport</a>"]],
"poplar":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"poplar/struct.Handle.html\" title=\"struct poplar::Handle\">Handle</a>&gt; for <a class=\"struct\" href=\"poplar/struct.Handle.html\" title=\"struct poplar::Handle\">Handle</a>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.Ident.html\" title=\"struct proc_macro2::Ident\">Ident</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.Ident.html\" title=\"struct proc_macro2::Ident\">Ident</a>"]],
"syn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"syn/struct.Lifetime.html\" title=\"struct syn::Lifetime\">Lifetime</a>&gt; for <a class=\"struct\" href=\"syn/struct.Lifetime.html\" title=\"struct syn::Lifetime\">Lifetime</a>"]],
"tracing_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"tracing_core/struct.Level.html\" title=\"struct tracing_core::Level\">Level</a>&gt; for <a class=\"struct\" href=\"tracing_core/struct.LevelFilter.html\" title=\"struct tracing_core::LevelFilter\">LevelFilter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"tracing_core/struct.LevelFilter.html\" title=\"struct tracing_core::LevelFilter\">LevelFilter</a>&gt; for <a class=\"struct\" href=\"tracing_core/struct.Level.html\" title=\"struct tracing_core::Level\">Level</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"tracing_core/struct.LevelFilter.html\" title=\"struct tracing_core::LevelFilter\">LevelFilter</a>&gt; for <a class=\"struct\" href=\"tracing_core/struct.LevelFilter.html\" title=\"struct tracing_core::LevelFilter\">LevelFilter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>&lt;<a class=\"struct\" href=\"tracing_core/struct.Level.html\" title=\"struct tracing_core::Level\">Level</a>&gt; for <a class=\"struct\" href=\"tracing_core/struct.Level.html\" title=\"struct tracing_core::Level\">Level</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()