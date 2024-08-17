import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counter from "./Counter";
import MyComponent from "./Components/MyComponent.jsx";
import ColorPicker from "./Components/ColorPicker.jsx";
import UpdateObject from "./Components/UpdateObject.jsx";
import UpdateArray from "./Components/UpdateArray.jsx";
import ArrayObject from "./Components/ArrayObject.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter />
    <MyComponent />
    <ColorPicker />
    <UpdateObject /> */}
    {/* <UpdateArray /> */}
    <ArrayObject />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
