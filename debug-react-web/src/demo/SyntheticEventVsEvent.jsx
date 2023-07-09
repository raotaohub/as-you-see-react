/*
 * @Author: raotaohub
 * @Date: 2022-10-10 14:23:23
 * @LastEditTime: 2022-10-10 16:15:00
 * @LastEditors: raotaohub
 * @FilePath: \debug2\debug-react-web\src\demo\SyntheticEventVsEvent.jsx
 * @Description: 合成事件对比原生事件
 */
import React, { useEffect, useRef, useState } from "react";

const SyntheticEventVsEvent = (props = { 我是props: "hello" }) => {
  const [add, setAdd] = useState(0);
  const btnRef = useRef(null);

  const onClick = () => {
    setAdd("Ok");
  };

  useEffect(() => {
    setAdd("syntactic");
    console.log(add);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   btnRef.current.click();
  //   console.log(add);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <h1>SyntheticEventVsEvent</h1>

      <button ref={btnRef} onClick={onClick}>
        SyntheticEventVsEvent{props.我是props}
      </button>
      <div
        onClick={() => {
          setAdd((v) => (v += 5));
          setAdd((v) => (v += 5));
        }}
      >
        {add}
      </div>
    </div>
  );
};

export default SyntheticEventVsEvent;
