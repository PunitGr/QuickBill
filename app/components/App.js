// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from "./common/NavBar";
import HomePage from "./home/HomePage";
import Dashboard from "./dashboard/Dashboard";
import preview from "./dashboard/preview";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/preview" component={preview}></Route>
                </div>
            </Router>
        );
    }
}