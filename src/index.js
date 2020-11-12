//gets data from app and renders in react
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
// import Demo from "./Components/Essential_pages/demo"
import "./index.css";
import "./Components/Styles/style.css";
import * as serviceWorker from "./serviceWorker";
import "./Components/Styles/style.css";

ReactDOM.render(<App/>, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
