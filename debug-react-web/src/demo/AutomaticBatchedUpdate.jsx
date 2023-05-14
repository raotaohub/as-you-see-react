/*
 * @Author: raotaohub
 * @Date: 2022-10-10 14:22:51
 * @LastEditTime: 2022-10-12 14:49:18
 * @LastEditors: raotaohub
 * @FilePath: \debug2\debug-react-web\src\demo\AutomaticBatchedUpdate.jsx
 * @Description: 自动批量更新 DEMO
 */
import React, { useEffect, useState } from "react";

const AutomaticBatchedUpdate = () => {
  const [count, setCount] = useState(0);
  const [, setRun] = useState({});

  const forceUpdate = () => setRun({});

  function simpleSetState() {
    console.log("simpleSetState", count);
    setCount(count);
  }

  useEffect(() => {
    setTimeout(() => {
      setCount((c) => (c += 5));
      setCount((v) => (v += 10));
    }, 1000);
  }, []);

  console.log("force");
  return (
    <div>
      <h1>AutomaticBatchedUpdate-自动批更新</h1>
      <button onClick={forceUpdate}>forceUpdate-强制render</button>
      <button onClick={simpleSetState}>simpleSetState-相同的值</button>
      <div
        onClick={() => {
          setCount((v) => (v += 5));
          setCount((v) => (v += 5));
        }}
      >
        {count}
      </div>
    </div>
  );
};

export default AutomaticBatchedUpdate;
