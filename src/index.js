import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./main.scss";

// removed strict mode, that will fix few double renders
ReactDOM.render(<App />, document.getElementById("root"));
