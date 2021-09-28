import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./main.scss";

// removed strict mode, that will fix few double renders
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
