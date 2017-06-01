import React, { Component } from "react";

export default class HomePage extends Component {
    render() {
        return(
            <div className="banner banner--bg">
                <div className="overlay"></div>
                <h2>Free and Simple <span>invoicing</span> for humans and bussineses.</h2>
                <a className="solid-btn">Create Invoice</a>
                <h4>No signup required</h4>
            </div>
        );
    }
}