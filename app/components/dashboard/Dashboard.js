// @flow
import React, { Component } from "react";
import SideNav from "./SideNav";
import Invoice from "./Invoice";

export default class Dashboard extends Component {

    componentDidMount() {
        const app = document.querySelector("#app");
        if (app) {
            app.className = "fix-navbar";
        }
    }

    componentWillUnmount() {
        const app = document.querySelector("#app");
        if (app) {
            app.className = ""; 
        }     
    }

    render() {
        return (
            <div className="dashboard">
                <SideNav />
                <Invoice />
            </div>
        );
    }
}