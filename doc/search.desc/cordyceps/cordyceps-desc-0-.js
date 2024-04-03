searchState.loadedDescShard("cordyceps", 0, "data structures\nThe handle owning nodes in the linked list.\nTrait implemented by types which can be members of an …\nAn intrusive doubly-linked list.\nA multi-producer, single-consumer (MPSC) queue, …\nAn intrusive singly-linked mutable FIFO stack.\nAn intrusive lock-free singly-linked FIFO stack, where all …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert a raw pointer to <code>Self</code> into an owning <code>Self::Handle</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert a <code>Self::Handle</code> to a raw pointer to <code>Self</code>, taking …\nReturn the links of the node pointed to by <code>ptr</code>.\nAn intrusive doubly-linked list.\nA multi-producer, single-consumer (MPSC) queue, …\nIntrusive, singly-linked first-in, first-out (FIFO) stacks.\nA cursor over a <code>List</code>.\nA cursor over a <code>List</code> with editing operations.\nAn iterator returned by <code>List::drain_filter</code>.\nAn owning iterator over the elements of a <code>List</code>.\nIterates over the items in a <code>List</code> by reference.\nIterates over the items in a <code>List</code> by mutable reference.\nLinks to other nodes in a <code>List</code>.\nAn intrusive doubly-linked list.\nMoves all elements from <code>other</code> to the end of the list.\nReturns a read-only cursor pointing to the current element.\nAsserts as many of the linked list’s invariants as …\nReturns a reference to the last element in the list/\nReturns a mutable reference to the last element in the …\nBorrows the element that the cursor is currently pointing …\nBorrows the element that the cursor is currently pointing …\nMutably borrows the element that the cursor is currently …\nReturns a <code>Cursor</code> starting at the last element.\nReturns a <code>CursorMut</code> starting at the last element.\nReturns a <code>Cursor</code> starting at the first element.\nReturns a <code>CursorMut</code> starting at the first element.\nReturns an iterator which uses a closure to determine if …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns an immutable reference to the first element in the …\nReturns a mutable reference to the first element in the …\nReturns the index of this cursor’s position in the <code>List</code>.\nReturns the index of this cursor’s position in the <code>List</code>.\nInserts a new element into the <code>List</code> after the current one.\nInserts a new element into the <code>List</code> before the current one.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the <code>List</code> this cursor points to is empty\nReturns <code>true</code> if the <code>List</code> this cursor points to is empty\nReturns <code>true</code> if this list is empty.\nReturns <code>true</code> if this node is currently linked to a <code>List</code>.\nReturns an iterator over the items in this list, by …\nReturns an iterator over the items in this list, by …\nReturns the length of the <code>List</code> this cursor points to.\nReturns the length of the <code>List</code> this cursor points to.\nReturns the number of elements in the list.\nMoves the cursor position to the next element in the <code>List</code>.\nMoves the cursor position to the next element in the <code>List</code>.\nMoves the cursor to the previous element in the <code>List</code>.\nMoves the cursor to the previous element in the <code>List</code>.\nReturns a new empty list.\nReturns new links for a doubly-linked intrusive list.\nBorrows the next element after the cursor’s current …\nBorrows the next element after the cursor’s current …\nMutably borrows the next element after the cursor’s …\nBorrows the previous element before the cursor’s current …\nBorrows the previous element before the cursor’s current …\nMutably borrows the previous element before the cursor’s …\nRemoves an item from the tail of the list.\nRemoves an item from the head of the list.\nAppends an item to the tail of the list.\nAppends an item to the head of the list.\nRemove an arbitrary node from the list.\nRemoves the current element from the <code>List</code> and returns the …\nFind and remove the first element matching the provided …\nA <code>CursorMut</code> can never return an accurate <code>size_hint</code> — its …\nA <code>Cursor</code> can never return an accurate <code>size_hint</code> — its …\nInserts all elements from <code>spliced</code> after the cursor’s …\nInserts all elements from <code>spliced</code> before the cursor’s …\nSplits the list into two after the current element. This …\nSplits the list into two before the current element. This …\nSplit the list into two at the given index (inclusive).\nAttempts to split the list into two at the given index …\nAnother thread is currently calling <code>MpscQueue::try_dequeue</code> …\nA handle that holds the right to dequeue elements from a …\nNo element was dequeued because the queue was empty.\nThe queue is currently in an inconsistent state.\nLinks to other nodes in a <code>MpscQueue</code>.\nA multi-producer, single-consumer (MPSC) queue, …\nAn owned handle that holds the right to dequeue elements …\nErrors returned by <code>MpscQueue::try_dequeue</code> and …\nReturns a <code>Consumer</code> handle that reserves the exclusive …\nReturns a <code>OwnedConsumer</code> handle that reserves the exclusive …\nDequeue an element from the queue.\nDequeue an element from the queue.\nDequeue an element from the queue.\nDequeue an element from the queue, without checking …\nEnqueue a new element at the end of the queue.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns <code>true</code> if any producers exist for this queue.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new <code>MpscQueue</code>.\nReturns a new set of <code>Links</code> for a <code>MpscQueue</code>.\nReturns a new set of <code>Links</code> for the stub node in an …\nReturns a new <code>MpscQueue</code> with a static “stub” entity\nReturns a new <code>MpscQueue</code> with the provided stub node.\nAttempts to reserve a <code>Consumer</code> handle that holds the …\nAttempts to reserve an <code>OwnedConsumer</code> handle that holds the …\nTry to dequeue an element from the queue, without waiting …\nTry to dequeue an element from the queue, without waiting …\nTry to dequeue an element from the queue, without waiting …\nTry to dequeue an element from the queue, without waiting …\nLinks to other nodes in a <code>TransferStack</code> or <code>Stack</code>.\nAn intrusive singly-linked mutable FIFO stack.\nAn intrusive lock-free singly-linked FIFO stack, where all …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this <code>Stack</code> is empty.\nReturns a new <code>TransferStack</code> with no elements.\nReturns a new <code>Stack</code> with no elements in it.\nReturns new <code>TransferStack</code> links.\nReturns the element most recently pushed to this <code>Stack</code>, or …\nPushes <code>element</code> onto the end of this <code>TransferStack</code>, taking …\nPushes <code>element</code> onto the end of this <code>Stack</code>, taking ownership\nTakes all elements <em>currently</em> in this <code>TransferStack</code>, …\nTakes all elements <em>currently</em> in this <code>Stack</code>, returning a new")