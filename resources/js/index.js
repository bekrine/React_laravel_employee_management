import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

if (document.getElementById("emplye_app")) {
    ReactDOM.render(<App />, document.getElementById("emplye_app"));
}
