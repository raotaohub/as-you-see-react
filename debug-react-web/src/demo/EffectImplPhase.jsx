import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";

const EffectImplPhase = (props = { unMount: () => {} }) => {
  const [count, setCount] = useState(0);
  // useLayoutEffect(function useLayoutEffectCbOnMount() {
  //   console.log("useLayoutEffectCbOnMount");
  //   alert("useLayoutEffect-useLayoutEffectCbOnMount");
  //   debugger; // 请观察调用栈

  //   return function useLayoutEffectCbOnUnMount() {
  //     console.log("useLayoutEffectCbOnUnMount");
  //     alert("useLayoutEffect-useLayoutEffectCbOnUnMount");
  //     debugger; // 请观察调用栈
  //   };
  // }, []);

  // useEffect(function useEffectCbOnMount() {
  //   console.log("useEffectCbOnMount");
  //   alert("useEffect-commitHookEffectListMount");
  //   debugger; // 请观察调用栈

  //   return function useEffectCbOnUnMount() {
  //     console.log("useEffectCbOnUnMount");
  //     alert("useEffect-commitHookEffectListUnmount");
  //     debugger; // 请观察调用栈
  //   };
  // }, []);

  console.log("effectDemo");
  return (
    <div>
      <h1>EffectImplPhase-副作用执行时机</h1>
      <button
        onClick={() => {
          props.unMount(false);
        }}
      >
        卸载
      </button>
      <button
        onClick={() => {
          setCount((c) => ++c);
        }}
      >
        点击++count
      </button>
      {count !== 4 && <Demo count={count} />}
    </div>
  );
};

function Demo(props) {
  const [state, setState] = useState(true);

  useEffect(() => {
    console.log("componentDidMount & getDerivedStateFromProps"); // 若不传入deps 则在挂载完成之后 或 props|state mutation之后触发
  });

  useEffect(() => {
    console.log("componentDidMount"); // 若传入空数组deps 则在挂载完成之后触发
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate"); // 若传入deps数组 则在依赖项mutation之后之后触发
  }, [props.count, state]);

  useEffect(() => {
    return () => {
      console.log("componentWillUnmount"); // return 的函数 则在组件卸载时触发
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log("componentWillUnmount"); // 若传入deps数组 return 的函数 则在依赖项mutation之后之后触发
    };
  }, [props.count, state]);

  return (
    <div>
      <div onClick={() => setState(!state)}> {state + ""}</div>
      {props.count + ""}
    </div>
  );
}

export default EffectImplPhase;

// eslint-disable-next-line no-unused-expressions
`# React 的生命周期

## clss 组件

1. mount 挂载阶段
   1. constructor：初始化 state,绑定事件处理函数
   2. getDerivedStateFromProps(nextProps, prevState): 初始化或者更新都会被调用
   3. render
   4. componentDidMount
2. update 更新阶段
   1. getDerivedStateFromProps(nextProps, prevState)
   2. shouldComponentUpdate
   3. render
   4. getSnapshotBeforeUpdate(prevProps, prevState): render 后执行，得到上个状态的快照
   5. componentDidUpdate(prevProps, prevState, snapshot): 在组件挂载后（插入 DOM 树中）立即调用
3. unmount 卸载阶段
   1. componentWillUnmount

## function 组件

1. mount 挂载阶段
2. update 更新阶段
3. unmount 卸载阶段

### useEffect

可以把 useEffect Hook 看做 componentDidMount,componentDidUpdate 和 componentWillUnmount 这三个函数的组合。


useEffect(() => {
  console.log("componentDidMount & getDerivedStateFromProps"); // 执行 DOM 更新之后调用它
});

useEffect(() => {
  console.log("componentDidMount");
}, []);

useEffect(() => {
  console.log("componentDidUpdate");
}, [depA, depB]);

useEffect(() => {
  return console.log("componentWillUnmount");
}, []);


### useLayoutEffect

对比
useEffect 会在所有的 DOM 变更之后异步调用 effect
useLayoutEffect 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect
`;
