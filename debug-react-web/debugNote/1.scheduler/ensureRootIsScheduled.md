

# scheduler任务调度



根据优先级调度

任务放入堆中 heap



- 查看任务 `peek`
  1. advanceTimers
  2. handleTimeout
  3. workLoop
  4. unstable_scheduleCallback
  5. unstable_getFirstCallbackNode

- 将任务放入堆中 `push`
  1. advanceTimers
  2. unstable_scheduleCallback

- 取出任务 `pop`
  1. advanceTimers
  2. workLoop



## 任务如何调度



源码

```js
const performWorkUntilDeadline = () => {
  if (scheduledHostCallback !== null) {
    const currentTime = getCurrentTime();
    startTime = currentTime;
    const hasTimeRemaining = true;
    let hasMoreWork = true;
    try {
      hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
    } finally {
      if (hasMoreWork) {
        schedulePerformWorkUntilDeadline();
      } else {
        isMessageLoopRunning = false;
        scheduledHostCallback = null;
      }
    }
  } else {
    isMessageLoopRunning = false;
  }
  needsPaint = false;
};

let schedulePerformWorkUntilDeadline;
if (typeof localSetImmediate === 'function') {
  schedulePerformWorkUntilDeadline = () => {
    localSetImmediate(performWorkUntilDeadline);
  };
} else if (typeof MessageChannel !== 'undefined') {
  const channel = new MessageChannel();
  const port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;
  schedulePerformWorkUntilDeadline = () => {
    port.postMessage(null);
  };
} else {
  schedulePerformWorkUntilDeadline = () => {
    localSetTimeout(performWorkUntilDeadline, 0);
  };
}

function requestHostCallback(callback) {
  scheduledHostCallback = callback;
  if (!isMessageLoopRunning) {
    isMessageLoopRunning = true;
    schedulePerformWorkUntilDeadline();
  }
}

```



> **先介绍一下 `MessageChannel` API** 
>
> 通过 `new MessageChannel` 可以得到两个 `port` ，都可以绑定`onmessage`方法，使用`postMessage` 发送消息。
>
> 因此这里将 `schedulePerformWorkUntilDeadline` 设为1个调用 `port2.postMessage`的函数，那么当调用该方法时，另1个端口`port1.onmessage`绑定的回调 `performWorkUntilDeadline`调用。



1. 可以看到调度任务的方式是 调用 `requestHostCallback` 并传入 `callback`，并赋值给 `scheduledHostCallback` ，然后调用 `schedulePerformWorkUntilDeadline`。

另一个 `MessageChannel` 端口 `port1` 回调 `performWorkUntilDeadline` 便会执行，然后在内部调用 `scheduledHostCallback` 方法。

2. 而取消调度的方法方式，就是把 `scheduledHostCallback` 赋值为 null 

