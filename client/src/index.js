import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
