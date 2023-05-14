// https://github.com/facebook/react/issues/15156
// https://codesandbox.io/s/00yn9yqzjw?file=/src/index.js
// https://www.bilibili.com/video/BV1rd4y1P76S/?spm_id_from=333.337.search-card.all.click&vd_source=ad977f2996622120f46d207ea056d745

// TODO 我用得少，先不研究
import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ContextDemo = () => {
  const theme = useContext(ThemeContext);
  console.log("theme", theme, "ThemeContext", ThemeContext);
  return <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>;
};

export default ContextDemo;
