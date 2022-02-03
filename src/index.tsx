import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "/projects/blog/src/index.css";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
