import loadDevTools from "./dev-tools/load";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

loadDevTools(() => {
	ReactDOM.render(<App/>, document.getElementById("app"));
});
