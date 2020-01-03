import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pokemon from "./components/pokemon";

 import "./styles/app.css";

function App() {
    return (
        <React.Fragment>
            <Pokemon/>
        </React.Fragment>
    );
}

ReactDOM.render(<App/>, document.getElementById("app-container"));

