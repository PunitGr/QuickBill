import React, { Component } from "react";
import NavBar from "./common/NavBar.js";
import HomePage from "./home/HomePage.js";

export default class App extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <HomePage />
            </div>
        );
    }
}