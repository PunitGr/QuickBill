import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return(
            <div className="banner banner--bg">
                <div className="overlay"></div>
                <h2>Free and Simple <span>invoicing</span> for humans and bussineses.</h2>
                <Link to="/dashboard" className="solid-btn">Create Invoice</Link>
                <h4>No signup required</h4>
            </div>
        );
    }
}