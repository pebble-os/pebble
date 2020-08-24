(function() {var implementors = {};
implementors["hal"] = [{"text":"impl Send for BootInfo","synthetic":true,"types":[]},{"text":"impl Send for MemoryMap","synthetic":true,"types":[]},{"text":"impl Send for MemoryMapEntry","synthetic":true,"types":[]},{"text":"impl Send for LoadedImages","synthetic":true,"types":[]},{"text":"impl Send for LoadedImage","synthetic":true,"types":[]},{"text":"impl Send for Segment","synthetic":true,"types":[]},{"text":"impl Send for VideoModeInfo","synthetic":true,"types":[]},{"text":"impl Send for MemoryType","synthetic":true,"types":[]},{"text":"impl Send for PixelFormat","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for Frame&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for Page&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Flags","synthetic":true,"types":[]},{"text":"impl Send for PhysicalAddress","synthetic":true,"types":[]},{"text":"impl Send for VirtualAddress","synthetic":true,"types":[]},{"text":"impl Send for PagingError","synthetic":true,"types":[]},{"text":"impl Send for Size4KiB","synthetic":true,"types":[]},{"text":"impl Send for Size2MiB","synthetic":true,"types":[]},{"text":"impl Send for Size1GiB","synthetic":true,"types":[]},{"text":"impl Send for PciAddress","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for PciHeader&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["kernel"] = [{"text":"impl Send for HoleAllocator","synthetic":true,"types":[]},{"text":"impl Send for LockedHoleAllocator","synthetic":true,"types":[]},{"text":"impl Send for HoleInfo","synthetic":true,"types":[]},{"text":"impl Send for Hole","synthetic":true,"types":[]},{"text":"impl Send for HoleList","synthetic":true,"types":[]},{"text":"impl Send for Allocation","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Send for KernelStackAllocator&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for SlabAllocator","synthetic":true,"types":[]},{"text":"impl Send for PhysicalMemoryManager","synthetic":true,"types":[]},{"text":"impl Send for Stack","synthetic":true,"types":[]},{"text":"impl Send for BuddyAllocator","synthetic":true,"types":[]},{"text":"impl Send for KernelObjectId","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Send for AddressSpace&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as Platform&gt;::PageTable: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for State","synthetic":true,"types":[]},{"text":"impl Send for ChannelEnd","synthetic":true,"types":[]},{"text":"impl Send for Message","synthetic":true,"types":[]},{"text":"impl Send for MemoryObject","synthetic":true,"types":[]},{"text":"impl Send for TaskBlock","synthetic":true,"types":[]},{"text":"impl Send for TaskState","synthetic":true,"types":[]},{"text":"impl Send for TaskCreationError","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Send for Scheduler&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for UserPointer&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Send for UserSlice&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for UserString&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Send for Task&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Platform,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["libpebble"] = [{"text":"impl Send for Handle","synthetic":true,"types":[]},{"text":"impl&lt;const N:&nbsp;usize&gt; Send for CapabilitiesRepr&lt;N&gt;","synthetic":true,"types":[]},{"text":"impl Send for Capability","synthetic":true,"types":[]},{"text":"impl Send for EarlyLogError","synthetic":true,"types":[]},{"text":"impl Send for CreateMemoryObjectError","synthetic":true,"types":[]},{"text":"impl Send for MapMemoryObjectError","synthetic":true,"types":[]},{"text":"impl Send for SendMessageError","synthetic":true,"types":[]},{"text":"impl Send for RegisterServiceError","synthetic":true,"types":[]},{"text":"impl Send for SubscribeToServiceError","synthetic":true,"types":[]},{"text":"impl Send for FramebufferInfo","synthetic":true,"types":[]},{"text":"impl Send for GetFramebufferError","synthetic":true,"types":[]},{"text":"impl Send for PixelFormat","synthetic":true,"types":[]}];
implementors["log"] = [{"text":"impl&lt;'a&gt; !Send for Record&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for RecordBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Metadata&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for MetadataBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for SetLoggerError","synthetic":true,"types":[]},{"text":"impl Send for ParseLevelError","synthetic":true,"types":[]},{"text":"impl Send for Level","synthetic":true,"types":[]},{"text":"impl Send for LevelFilter","synthetic":true,"types":[]}];
implementors["num_traits"] = [{"text":"impl Send for ParseFloatError","synthetic":true,"types":[]},{"text":"impl Send for FloatErrorKind","synthetic":true,"types":[]}];
implementors["pebble_util"] = [{"text":"impl&lt;T&gt; Send for BinaryPrettyPrint&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;Send&gt; Send for InitGuard&lt;T&gt;","synthetic":false,"types":[]}];
implementors["spin"] = [{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for MutexGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for RwLockReadGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for RwLockWriteGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Send&gt; Send for Mutex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Send&gt; Send for RwLock&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Send&gt; Send for Once&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()