import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from "./common/NavBar";
import HomePage from "./home/HomePage";
import Invoice from "./dashboard/Invoice";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/invoice" component={Invoice} />
                </div>
            </Router>
        );
    }
}