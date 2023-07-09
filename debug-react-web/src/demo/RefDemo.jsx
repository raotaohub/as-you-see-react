import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

const clone = (target) => target;

const RefDemo = () => {
  const ref = useRef(null);
  const [, update] = useState({});

  const forceUpdate = () => update({});

  console.log("render", clone(ref.current));

  useEffect(() => {
    console.log("useEffect", clone(ref.current));
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", clone(ref.current));
  }, []);

  return (
    <div ref={ref}>
      <h1>Ref-reconcileChildFibers时挂载</h1>
      <button onClick={forceUpdate}>重新render</button>
    </div>
  );
};

export default RefDemo;
