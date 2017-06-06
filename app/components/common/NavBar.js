import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li className="navbar__logo"><Link to="/">QuickBill</Link></li>
                    <li><a className="solid-btn">Get Started</a></li>
                </ul>
            </nav>
        );
    }
}