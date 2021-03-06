//gets data from app and renders in react
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./Components/Styles/index.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
