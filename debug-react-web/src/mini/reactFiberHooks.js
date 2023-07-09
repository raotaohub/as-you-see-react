/*
 * @Description:  hooks 这个数据结构是存到 fiber.memoizedState 上
 *
 */

let currentlyRenderingFiber = null; // workInProgress

let workInProgressHook = null; // workInProgress.memoizedState

function dispatchSetState(fiber, queue, action) {
  console.log(arguments);
  // if render phase 入队 pengdingQueue
  // else
  // 进入更新队列
  // 用 root update lane 注册1个调度
}
function basicStateReducer(state, action) {
  return typeof action === "function" ? action(state) : action;
}
function mountWorkInProgressHook(fiber, queue, action) {
  const hook = {
    baseState: null,
    baseQueue: null,
    queue: null,
    memoizedState: null,
    next: null,
  };

  if (workInProgressHook === null) {
    currentlyRenderingFiber.memoizedState = workInProgressHook = hook; // 第一次初始化时
  } else {
    workInProgressHook /*再到当前*/ = workInProgressHook.next /*挂到下次*/ = hook;
  }

  return workInProgressHook;
}

function mountState(initialState) {
  const hook = mountWorkInProgressHook();

  initialState = typeof initialState === "function" ? initialState() : initialState;

  hook.memoizedState = hook.baseState = initialState;

  const queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    basicStateReducer: basicStateReducer,
    lastRenderState: initialState,
  };

  hook.queue = queue; // 在 hook上挂 updateQueue

  const dispatch = (queue.dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue));

  return [hook.memoizedState, dispatch];
}
