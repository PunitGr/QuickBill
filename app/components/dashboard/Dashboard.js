// @flow
import React, { Component } from "react";
import SideNav from "./SideNav";
import Invoice from "./Invoice";
import { Link } from "react-router-dom";

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
                <div className="dashboard__element">
                    <div className="solid-btn solid-btn--ghost solid-btn--dashboard">
                        <Link to="/QuickBill/preview" className="ghost-btn"><i className="fa fa-eye" aria-hidden="true"> </i> Preview</Link>
                        <a className="ghost-btn"><i className="fa fa-arrow-circle-down" aria-hidden="true"> </i> Download</a>
                    </div>
                    <a className="solid-btn solid-btn--rect solid-btn--dashboard">
                        <i className="fa fa-paper-plane" aria-hidden="true"> </i> Send Invoice
                    </a>
                </div>
            </div>
        );
    }
}