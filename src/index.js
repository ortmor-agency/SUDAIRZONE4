// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom";
import { FullScreenProvider } from "./FullScreenContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FullScreenProvider>
        <App />
      </FullScreenProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
