/*
 * @Author: raotaohub
 * @Date: 2022-10-10 14:23:10
 * @LastEditTime: 2022-10-10 14:23:10
 * @LastEditors: raotaohub
 * @FilePath: \debug2\debug-react-web\src\demo\SchedulerPriorityDemo.jsx
 * @Description: 调度优先级 DEMO
 */
import React, { useEffect, useRef, useState } from "react";

const SchedulerPriorityDemo = () => {
  const [add, setAdd] = useState(0);
  const btnRef = useRef(null);

  const onClick = () => {
    setAdd(9);
  };

  useEffect(() => {
    setTimeout(() => {
      setAdd(5);
    }, 1000);

    setTimeout(() => {
      btnRef.current.click();
    }, 1002);
  }, []);

  return (
    <div>
      <h1>SchedulerPriorityDemo</h1>

      <button ref={btnRef} onClick={onClick}>
        useBlockPriority
      </button>
      <div
        onClick={() => {
          setAdd((v) => (v += 5));
          setAdd((v) => (v += 5));
        }}
      >
        {add}
      </div>
      <ul>
        {new Array(100).fill(0).map((t, i) => {
          return <li key={i}>{add}</li>;
        })}
      </ul>
    </div>
  );
};

export default SchedulerPriorityDemo;
