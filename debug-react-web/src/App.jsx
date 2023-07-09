import "./index.css";
import React, { useEffect, useLayoutEffect, useState } from "react";
import SchedulerPriorityDemo from "./demo/SchedulerPriorityDemo";
import AutomaticBatchedUpdate from "./demo/AutomaticBatchedUpdate";
import SyntheticEventVsEvent from "./demo/SyntheticEventVsEvent";
import EffectImplPhase from "./demo/EffectImplPhase";
import RefDemo from "./demo/RefDemo";
import ContextDemo from "./demo/ContextDemo";
import Parent from "./demo/ClassComponents";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext(themes.light);

function App() {
  const [isMount, setMount] = useState(true);
  const [count, setCount] = useState(0);

  console.log("[Invoke App Function Component]", "count:", count);

  // useLayoutEffect(() => {
  //   if (count < 5) {
  //     setCount((c) => ++c);
  //   }
  // }, [count]);

  // useEffect(() => {
  //   if (count < 10) {
  //     setCount((c) => ++c);
  //   }
  // }, []);

  const debugHandleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="App" key="App">
      <header className="App-header"></header>
      <p>{count}</p>
      <p onClick={debugHandleClick}>App</p>

      {/* <ThemeContext.Provider value={themes.dark}>
        <ContextDemo />
      </ThemeContext.Provider> */}
      {/* <RefDemo /> */}
      {/* <AutomaticBatchedUpdate /> */}
      {/* {isMount && <EffectImplPhase unMount={setMount} />} */}
      {/* <SchedulerPriorityDemo /> */}
      {/* <SyntheticEventVsEvent /> */}
      {/* <Parent /> */}
    </div>
  );
}

export default App;
