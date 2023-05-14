import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(<App />);

// // 关于 MessageChannel
// console.group("MessageChannel start");
// const { port1, port2 } = new MessageChannel();
// port2.onmessage = (ev) => console.log(ev);
// port1.postMessage(1);
// port1.postMessage(2);
// console.groupEnd("");

// // 手动调用 render
// const btn = document.createElement("button");
// btn.onclick = function myRenderCb() {
//   root.render(<App />);
//   console.log("click");
// };
// btn.innerText = "root.render(<App />)";
// container.parentElement.appendChild(btn);
