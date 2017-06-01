import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li className="navbar__logo">QuickBill</li>
                    <li><a className="solid-btn">Get Started</a></li>
                </ul>
            </nav>
        );
    }
}