(function() {var implementors = {
"byteorder":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"byteorder/enum.BigEndian.html\" title=\"enum byteorder::BigEndian\">BigEndian</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"byteorder/enum.LittleEndian.html\" title=\"enum byteorder::LittleEndian\">LittleEndian</a>"]],
"heapless":[["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"heapless/spsc/struct.Queue.html\" title=\"struct heapless::spsc::Queue\">Queue</a>&lt;T, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div>"]],
"kernel":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"kernel/object/struct.KernelObjectId.html\" title=\"struct kernel::object::KernelObjectId\">KernelObjectId</a>"]],
"log":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"log/struct.Metadata.html\" title=\"struct log::Metadata\">Metadata</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"log/enum.LevelFilter.html\" title=\"enum log::LevelFilter\">LevelFilter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"log/enum.Level.html\" title=\"enum log::Level\">Level</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"log/struct.MetadataBuilder.html\" title=\"struct log::MetadataBuilder\">MetadataBuilder</a>&lt;'a&gt;"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"proc_macro2/struct.Ident.html\" title=\"struct proc_macro2::Ident\">Ident</a>"]],
"syn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"syn/struct.Lifetime.html\" title=\"struct syn::Lifetime\">Lifetime</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"syn/enum.Member.html\" title=\"enum syn::Member\">Member</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"syn/struct.Index.html\" title=\"struct syn::Index\">Index</a>"]],
"tracing":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"tracing/struct.Span.html\" title=\"struct tracing::Span\">Span</a>"]],
"tracing_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"tracing_core/struct.LevelFilter.html\" title=\"struct tracing_core::LevelFilter\">LevelFilter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"tracing_core/struct.Level.html\" title=\"struct tracing_core::Level\">Level</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"tracing_core/callsite/struct.Identifier.html\" title=\"struct tracing_core::callsite::Identifier\">Identifier</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"tracing_core/span/struct.Id.html\" title=\"struct tracing_core::span::Id\">Id</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"tracing_core/struct.Field.html\" title=\"struct tracing_core::Field\">Field</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()