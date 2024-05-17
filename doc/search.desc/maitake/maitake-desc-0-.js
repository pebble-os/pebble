searchState.loadedDescShard("maitake", 0, "Safely constructs a new <code>StaticScheduler</code> instance in a …\nSchedulers for executing tasks.\nAsynchronous synchronization primitives\nThe <code>maitake</code> task system.\nUtilities for tracking time and constructing system timers.\nA future that yields to the scheduler one or more times …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns a new future that yields <code>yields</code> times before …\nYield to the scheduler a single time before proceeding.\nTasks could not be stolen because the targeted queue …\nHow many tasks are polled per call to <code>StaticScheduler::tick</code>…\nHow many tasks are polled per call to …\nHow many tasks are polled per call to <code>Scheduler::tick</code>.\nHow many tasks are polled per call to <code>LocalScheduler::tick</code>.\nNo tasks were available to steal.\nAn injector queue for spawning tasks on multiple <code>Scheduler</code> …\nA reference-counted scheduler for <code>!</code><code>Send</code> tasks.\nA handle to a <code>LocalScheduler</code> that implements <code>Send</code>.\nA statically-initialized scheduler for <code>!</code><code>Send</code> tasks.\nA handle to a <code>LocalStaticScheduler</code> that implements <code>Send</code>.\nTrait implemented by schedulers.\nAn atomically reference-counted single-core scheduler …\nA statically-initialized scheduler implementation.\nA handle for stealing tasks from a <code>Scheduler</code>’s run …\nA stub <code>Task</code>.\nMetrics recorded during a scheduler tick.\nErrors returned by <code>Injector::try_steal</code>, …\nReturns a new task <code>Builder</code> for configuring tasks prior to …\nReturns a new task <code>Builder</code> for configuring tasks prior to …\nReturns a new task <code>Builder</code> for configuring tasks prior to …\nReturns a new task <code>Builder</code> for configuring tasks prior to …\nReturns a new task <code>Builder</code> for configuring tasks prior to …\nThe number of polled tasks that <em>completed</em> on this …\nReturns a <code>TaskRef</code> referencing the task currently being …\nReturns a <code>TaskRef</code> referencing the task currently being …\nReturns a <code>TaskRef</code> referencing the task currently being …\nReturns a <code>TaskRef</code> referencing the task currently being …\nReturns a <code>TaskRef</code> referencing the task currently being …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\n<code>true</code> if the tick completed with any tasks remaining in the …\nReturns the number of tasks that were in the targeted …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new <code>Injector</code> queue with a dynamically …\nReturns a new <code>StaticScheduler</code> with a heap-allocated stub …\nReturns a new <code>LocalStaticScheduler</code> with a heap-allocated …\nCreate a new unique stub <code>Task</code>.\nReturns a new <code>Scheduler</code>.\nReturns a new <code>LocalScheduler</code>.\nSafely constructs a new <code>StaticScheduler</code> instance in a …\nReturns a new injector queue.\nCreate a StaticScheduler with a static “stub” task …\nCreate a <code>LocalStaticScheduler</code> with a static “stub” …\nThe total number of tasks polled on this scheduler tick.\nSchedule a task on this scheduler.\nSpawns a new task on the injector queue, to execute on any …\nSpawn a task.\nSpawn a task.\nSpawn a task on the <code>LocalStaticScheduler</code> this handle …\nSpawn a task.\nSpawn a <code>!</code><code>Send</code> task.\nSpawn a task on the <code>LocalScheduler</code> this handle references.\nSpawns a pre-allocated task on the injector queue.\nSpawn a pre-allocated task\nSpawn a pre-allocated, <code>Send</code> task.\nSpawn a pre-allocated task on the <code>LocalStaticScheduler</code> …\nSpawn a pre-allocated task\nSpawn a pre-allocated <code>!</code><code>Send</code> task.\nSpawn a pre-allocated task on the <code>LocalScheduler</code> this …\nSteal half of the tasks currently in the targeted queue …\nSteal up to <code>max</code> tasks from the targeted queue and spawn …\nSteal one task from the targeted queue and spawn it on the …\nThe number of tasks that were spawned since the last tick.\nReturns a new <code>LocalStaticSpawner</code> that can be used by other …\nReturns a new <code>LocalSpawner</code> that can be used by other …\nReturns the number of tasks currently in the targeted …\nTick this scheduler, polling up to <code>Self::DEFAULT_TICK_SIZE</code> …\nTick this scheduler, polling up to <code>Self::DEFAULT_TICK_SIZE</code> …\nTick this scheduler, polling up to <code>Self::DEFAULT_TICK_SIZE</code> …\nTick this scheduler, polling up to <code>Self::DEFAULT_TICK_SIZE</code> …\nAttempt to take tasks from the injector queue.\nAttempt to steal tasks from this scheduler’s run queue.\nAttempt to steal tasks from this scheduler’s run queue.\nReturns the total number of tasks woken since the last …\nThe number of tasks that were woken from outside of their …\nThe number of tasks that were woken from within their own …\nAn error indicating that a <code>WaitCell</code>, <code>WaitQueue</code> or <code>Semaphore</code>…\nThe maximum number of permits a <code>Semaphore</code> may contain.\nAn asynchronous mutual exclusion lock for protecting …\nAn RAII implementation of a “scoped lock” of a <code>Mutex</code>. …\nAn RAII implementation of a “scoped lock” of a <code>Mutex</code>. …\nOwned RAII structure used to release the shared read …\nOwned RAII structure used to release the exclusive write …\nAn asynchronous readers-writer lock.\nRAII structure used to release the shared read access of a …\nRAII structure used to release the exclusive write access …\nAn asynchronous counting semaphore.\nAn atomically registered <code>Waker</code>.\nA map of <code>Waker</code>s associated with keys, allowing tasks to be …\nA queue of waiting tasks which can be woken in first-in, …\nThe result of waiting on a <code>WaitQueue</code> or <code>Semaphore</code>.\nAcquire <code>permits</code> permits from the <code>Semaphore</code>, waiting …\nAcquire <code>permits</code> permits from the <code>Semaphore</code>, waiting …\nAdd <code>permits</code> new permits to the semaphore.\nReturns the number of permits currently available in this …\nClose the <code>WaitCell</code>.\nClose the queue, indicating that it may no longer be used.\nCloses the semaphore.\nClose the queue, indicating that it may no longer be used.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLocks this mutex.\nLocks this mutex, returning an owned RAII guard.\nAn asynchronous mutual exclusion lock.\nReturns a new <code>Mutex</code> protecting the provided <code>data</code>.\nReturns a new <code>RwLock</code> protecting the provided <code>data</code>, in an …\nReturns a new <code>WaitCell</code>, with no <code>Waker</code> stored in it.\nReturns a new <code>WaitMap</code>.\nReturns a new <code>Semaphore</code> with <code>permits</code> permits available.\nReturns a new <code>WaitQueue</code>.\nPoll to wait on this <code>WaitCell</code>, consuming a stored wakeup or\nLocks this <code>RwLock</code> with shared read access, causing the …\nLocks this <code>RwLock</code> with shared read access, returning an …\nAn asynchronous readers-writer lock.\nAn asynchronous counting semaphore.\nSynchronous spinning-based synchronization primitives.\nEagerly subscribe to notifications from this <code>WaitCell</code>.\nTry to acquire <code>permits</code> permits from the <code>Semaphore</code>, without …\nTry to acquire <code>permits</code> permits from the <code>Semaphore</code>, without …\nAttempts to lock the mutex without waiting, returning <code>None</code> …\nAttempts this mutex without waiting, returning an owned …\nAttempts to acquire this <code>RwLock</code> for shared read access, …\nAttempts to acquire this <code>RwLock</code> for shared read access, …\nAttempts to acquire this <code>RwLock</code> for exclusive write …\nAttempts to acquire this <code>RwLock</code> for exclusive write …\nReusable utilities for synchronization primitives.\nWait to be woken up by this cell.\nWait to be woken up by this queue.\nWait to be woken up by this queue.\nAn atomically registered <code>Waker</code>, for waking a single task.\nA map of <code>Waker</code>s associated with keys, so that a task can …\nWait to be woken up by this queue, returning a future that…\nWait to be woken up by this queue, returning a future that…\nA queue of waiting tasks that can be woken in first-in, …\nWake the <code>Waker</code> stored in this cell.\nWake a certain task in the queue.\nWake the next task in the queue.\nWake <em>all</em> tasks currently in the queue.\nLocks this <code>RwLock</code> with exclusive write access, causing the …\nLocks this <code>RwLock</code> with exclusive write access,returning an …\nA future returned by the <code>Mutex::lock</code> method.\nAn asynchronous mutual exclusion lock for protecting …\nAn RAII implementation of a “scoped lock” of a <code>Mutex</code>. …\nAn RAII implementation of a “scoped lock” of a <code>Mutex</code>. …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nOwned RAII structure used to release the shared read …\nOwned RAII structure used to release the exclusive write …\nAn asynchronous readers-writer lock.\nRAII structure used to release the shared read access of a …\nRAII structure used to release the exclusive write access …\nThe future returned by the <code>Semaphore::acquire</code> method.\nFuture returned from <code>Semaphore::acquire_owned()</code>.\nThe semaphore has been closed, so additional permits …\nThe semaphore does not currently have enough permits to …\nAn owned RAII guard representing one or more permits …\nA RAII guard representing one or more permits acquired …\nAn asynchronous counting semaphore.\nErrors returned by <code>Semaphore::try_acquire</code>.\nForget this permit, dropping it <em>without</em> returning the …\nForget this permit, dropping it <em>without</em> returning the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the count of semaphore permits owned by this <code>Permit</code>…\nReturns the count of semaphore permits owned by this …\nA cell which may be initialized a single time after it is …\nA cell which will be lazily initialized by the provided …\nA spinlock-based mutual exclusion lock for protecting …\nAn RAII implementation of a “scoped lock” of a mutex. …\nForcibly unlock the mutex.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nBorrow the contents of this <code>InitOnce</code> cell, or panic if it …\nBorrow the value, or initialize it if it has not yet been …\nReturns the value of the lazy cell, if it has already been …\nBorrow the value mutably, or initialize it if it has not …\nBorrow the contents of this <code>InitOnce</code> cell, or initialize …\nBorrow the contents of this <code>InitOnce</code> cell, <strong>without</strong> checking\nInitialize the cell to <code>value</code>, panicking if it has already …\nEnsure that the cell has been initialized.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAcquires a mutex, spinning until it is locked.\nReturns a new <code>Lazy</code> cell, initialized with the provided …\nReturns a new <code>Mutex</code> protecting the provided <code>data</code>.\nCells storing a value which must be initialized prior to …\nBorrow the contents of this <code>InitOnce</code> cell, if it has been …\nInitialize the cell to <code>value</code>, returning an error if it has …\nAttempts to acquire this lock without spinning\nReturns a new <code>InitOnce</code> in the uninitialized state.\nA cell which may be initialized a single time after it is …\nA cell which will be lazily initialized by the provided …\nErrors returned by <code>InitOnce::try_init</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the value that the caller attempted to initialize …\nAn exponential backoff for spin loops.\nAligns the wrapped value to the size of a cache line.\nThe default maximum exponent (2^8).\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwraps the inner value and returns it.\nReturns a new exponential backoff with the maximum …\nPads <code>value</code> to the length of a cache line.\nBacks off in a spin loop.\nReturns a new exponential backoff with the provided max …\nThe <code>Waker</code> was not registered because another task was …\nThe <code>Waker</code> was not registered because the <code>WaitCell</code> has been …\nAn error indicating that a <code>WaitCell</code> was closed or busy …\nFuture returned from <code>WaitCell::subscribe()</code>.\nFuture returned from <code>WaitCell::wait()</code>.\nAn atomically registered <code>Waker</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe received data has already been extracted\nThe <code>WaitMap</code> has already been closed.\nThe queue was already closed when the wake was attempted, …\nThe <code>WaitMap</code> already had an item matching the given key\nA future that ensures a <code>Wait</code> has been added to a <code>WaitMap</code>.\nThe <code>Wait</code> was never added to the <code>WaitMap</code>\nNo task matching the given key was found in the queue.\nFuture returned from <code>WaitMap::wait()</code>.\nErrors returned by <code>WaitMap::wait</code>, indicating a failed wake.\nA map of <code>Waker</code>s associated with keys, allowing tasks to be …\nFuture returned from <code>WaitMap::wait_owned()</code>.\nThe result of a call to <code>WaitMap::wait()</code>.\nThe result of an attempted <code>WaitMap::wake()</code> operation.\nThe task was successfully woken, and the data was provided.\nReturns a future that completes when the <code>Wait</code> item has been\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFuture returned from <code>WaitQueue::wait()</code>.\nFuture returned from <code>WaitQueue::wait_owned()</code>.\nA queue of waiting tasks which can be woken in first-in, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if <code>self</code> and <code>other</code> are waiting on a …\nReturns <code>true</code> if <code>self</code> and <code>other</code> are waiting on a …\nEagerly subscribe this future to wakeups from …\nEagerly subscribe this future to wakeups from …\nReturns <code>true</code> if this <code>Wait</code> future is waiting for a …\nReturns <code>true</code> if this <code>WaitOwned</code> future is waiting for a …\nA type representing <code>Box</code> storage of a task\nBuilds a new <code>Task</code> prior to spawning it.\nThe context of an asynchronous task.\nErrors returned by awaiting a <code>JoinHandle</code>.\nAn owned permission to join a task (await its termination).\nRepresents that a value is not ready yet.\nIndicates whether a value is available or if the current …\nRepresents that a value is immediately ready.\nA trait representing a heap allocation that can own a <code>Task</code>.\nThe type of a stored Task.\nA task.\nA unique identifier for a running task.\nA type-erased, reference-counted pointer to a spawned <code>Task</code>.\nA <code>Waker</code> is a handle for waking up a task by notifying its …\nGet a reference to the underlying <code>RawWaker</code>.\nForcibly cancel the task.\nForcibly cancel the task.\nAssigns a clone of <code>source</code> to <code>self</code>, unless …\nReturns a reference to the extension data for the current …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nUse a <code>Wake</code>-able type as a <code>Waker</code>.\nMoves the value into a <code>Poll::Ready</code> to make a <code>Poll&lt;T&gt;</code>.\nReturns the argument unchanged.\nConvert a raw task pointer into an owned, heap<code>allocated [</code>…\nCreates a new <code>Waker</code> from <code>RawWaker</code>.\nCreate a new <code>Context</code> from a <code>&amp;Waker</code>.\nReturns a <code>TaskId</code> that uniquely identifies this task.\nReturns a <code>TaskId</code> that uniquely identifies this task.\nReturns the <code>TaskId</code> of the task that failed to join.\nReturns a <code>TaskId</code> that uniquely identifies this task.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert an owned, heap-allocated <code>Task</code> type to a raw pointer\nReturns <code>true</code> if a task failed to join because it was …\nReturns <code>true</code> if this task has completed.\nReturns <code>true</code> if this task has completed.\nReturns <code>true</code> if the task completed successfully before it …\nReturns <code>true</code> if the poll is a <code>Pending</code> value.\nReturns <code>true</code> if the poll is a <code>Poll::Ready</code> value.\nAdds a static string which describes the type of the …\nReturns a reference to the <code>LocalWaker</code> for the current task.\nOverrides the task’s source code location.\nMaps a <code>Poll&lt;T&gt;</code> to <code>Poll&lt;U&gt;</code> by applying a function to a …\nMaps a <code>Poll::Ready&lt;Option&lt;Result&lt;T, E&gt;&gt;&gt;</code> to …\nMaps a <code>Poll::Ready&lt;Result&lt;T, E&gt;&gt;</code> to …\nMaps a <code>Poll&lt;Result&lt;T, E&gt;&gt;</code> to <code>Poll&lt;Result&lt;U, E&gt;&gt;</code> by …\nMaps a <code>Poll&lt;Option&lt;Result&lt;T, E&gt;&gt;&gt;</code> to …\nAdds a name to the tasks produced by this builder.\nCreate a new (non-heap-allocated) Task.\nReturns a reference to a <code>Waker</code> that does nothing when used.\nReturns the task’s output, if the task completed …\nSpawns a new task with this builder’s configured …\nSpawns a new task in a custom allocation, with this builder…\nSpawns a new <code>!</code><code>Send</code> task with this builder’s configured …\nSpawns a new <code>!</code><code>Send</code> task with this builder’s configured …\nSpawns a new <code>!</code><code>Send</code> task in a custom allocation, with this …\nSpawns a new <code>!</code><code>Send</code> task in a custom allocation, with this …\nReturns a <code>TaskRef</code> referencing the task this <code>JoinHandle</code> is …\nWake up the task associated with this <code>Waker</code>.\nWake up the task associated with this <code>Waker</code> without …\nReturns a reference to the <code>Waker</code> for the current task.\nReturns <code>true</code> if this <code>Waker</code> and another <code>Waker</code> would awake …\nErrors returned by <code>set_global_timer</code>.\nA <code>Duration</code> type to represent a span of time, typically …\nThe requested <code>Duration</code> exceeds the timer’s maximum …\nThe maximum duration.\nThe duration of one microsecond.\nThe duration of one millisecond.\nThe duration of one nanosecond.\nNo global default timer has been set.\nThe duration of one second.\nA <code>Future</code> that completes after a specified <code>Duration</code>.\nA <code>Future</code> that requires an inner <code>Future</code> to complete within a\nA <code>Timer</code> tracks the current time, and notifies <code>Sleep</code> and …\nErrors returned by <code>Timer::try_sleep</code>, <code>Timer::try_timeout</code>, …\nRepresents a single turn of the timer wheel.\nA duration of zero time.\nComputes the absolute difference between <code>self</code> and <code>other</code>.\nAdvance the timer by <code>duration</code>, potentially waking any <code>Sleep</code>…\nAdvance the timer by <code>ticks</code> timer ticks, potentially waking …\nReturns the total number of whole microseconds contained …\nReturns the total number of whole milliseconds contained …\nReturns the number of milliseconds contained by this …\nReturns the number of milliseconds contained by this …\nReturns the total number of nanoseconds contained by this …\nReturns the number of <em>whole</em> seconds contained by this …\nReturns the number of seconds contained by this <code>Duration</code> …\nReturns the number of seconds contained by this <code>Duration</code> …\nChecked <code>Duration</code> addition. Computes <code>self + other</code>, …\nChecked <code>Duration</code> division. Computes <code>self / other</code>, …\nChecked <code>Duration</code> multiplication. Computes <code>self * other</code>, …\nChecked <code>Duration</code> subtraction. Computes <code>self - other</code>, …\nDivide <code>Duration</code> by <code>Duration</code> and return <code>f32</code>.\nDivide <code>Duration</code> by <code>Duration</code> and return <code>f64</code>.\nDivide <code>Duration</code> by <code>f32</code>.\nDivide <code>Duration</code> by <code>f64</code>.\nReturns the <code>Duration</code> that this <code>Sleep</code> future will sleep for.\nReturns the total elapsed time since this timer wheel …\nThe number of <code>Sleep</code> futures that were woken up by this …\nAdvance the timer by <code>duration</code>, ensuring any <code>Sleep</code> futures …\nAdvance the timer by <code>ticks</code> timer ticks, ensuring any <code>Sleep</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>Duration</code> from the specified number of days.\nCreates a new <code>Duration</code> from the specified number of hours.\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of whole …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of weeks.\nReturns <code>true</code> if there are currently pending <code>Sleep</code> futures …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if this <code>Duration</code> spans no time.\nReturns the maximum duration of <code>Sleep</code> futures driven by …\nMultiplies <code>Duration</code> by <code>f32</code>.\nMultiplies <code>Duration</code> by <code>f64</code>.\nReturns a new <code>Timer</code> with the specified <code>tick_duration</code> for a …\nCreates a new <code>Duration</code> from the specified number of whole …\nThe total number of ticks elapsed since the first time …\nAdd pending time to the timer <em>without</em> turning the wheel.\nAdd pending ticks to the timer <em>without</em> turning the wheel.\nSaturating <code>Duration</code> addition. Computes <code>self + other</code>, …\nSaturating <code>Duration</code> multiplication. Computes <code>self * other</code>, …\nSaturating <code>Duration</code> subtraction. Computes <code>self - other</code>, …\nSets a <code>Timer</code> as the global default timer.\nReturns a <code>Future</code> that completes after the specified …\nReturns a <code>Future</code> that will complete in <code>duration</code>.\nReturns a <code>Future</code> that will complete in <code>ticks</code> timer ticks.\nReturns the fractional part of this <code>Duration</code>, in whole …\nReturns the fractional part of this <code>Duration</code>, in whole …\nReturns the fractional part of this <code>Duration</code>, in …\nReturns the number of ticks until the deadline at which …\nReturns the <code>Duration</code> from the current time to the deadline …\n<code>Timeout</code>s limit the amount of time a <code>Future</code> is allowed to …\nRequires the provided <code>Future</code> to complete before the …\nReturns a new <code>Timeout</code> future that fails if <code>future</code> does not …\nThe checked version of <code>from_secs_f32</code>.\nThe checked version of <code>from_secs_f64</code>.\nReturns a <code>Future</code> that completes after the specified …\nReturns a <code>Future</code> that will complete in <code>duration</code>.\nRequires the provided <code>Future</code> to complete before the …\nReturns a new <code>Timeout</code> future that fails if <code>future</code> does not …\nThe maximum duration supported by this <code>Timer</code> instance.\nThe duration that was requested for a <code>Sleep</code> or <code>Timeout</code> …\nAn error indicating that a <code>Timeout</code> elapsed before the …\nA <code>Future</code> that requires an inner <code>Future</code> to complete within a\nReturns the <code>Duration</code> the inner <code>Future</code> is allowed to run …\nReturns the <code>Duration</code> the inner <code>Future</code> was allowed to run …\nReturns the argument unchanged.\nMutably the inner <code>Future</code>.\nBorrows the inner <code>Future</code> as a <code>Pin</code>ned reference, if this …\nBorrows the inner <code>Future</code> immutably.\nCalls <code>U::from(self)</code>.\nConsumes this <code>Timeout</code>, returning the inner <code>Future</code>.")