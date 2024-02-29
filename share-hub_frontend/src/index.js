import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
