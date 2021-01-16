import React from "react";
import ReactDOM from "react-dom";
/* import axios from "axios"; */
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* axios.defaults.baseURL = "http://31.220.51.195"; */
ReactDOM.render(
    <App />,
    document.getElementById("root")
);

// eslint-disable-next-line
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
