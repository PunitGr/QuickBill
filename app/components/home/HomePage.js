import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return(
            <div className="home">
                <div className="home__banner home__banner--bg">
                    <div className="overlay"></div>
                    <h2>Free and Simple <span>invoicing</span> for humans and bussineses.</h2>
                    <Link to="/QuickBill/dashboard" className="solid-btn">Create Invoice</Link>
                    <h4>No signup required</h4>
                </div>
                <div className="home__banner home__banner--footer">
                    <h4>Star this project on Github</h4>
                    <div>
                        <iframe src="https://ghbtns.com/github-btn.html?user=PunitGr&repo=QuickBill&type=star&count=true&size=large"
                            frameBorder="0"
                            scrolling="0"
                            width="120px"
                            height="30px">
                        </iframe>
                        <iframe src="https://ghbtns.com/github-btn.html?user=PunitGr&repo=QuickBill&type=fork&count=true&size=large"
                            frameBorder="0"
                            scrolling="0"
                            width="120px"
                            height="30px">
                        </iframe>
                    </div>

                    <a href="mailto:groove67@gmail.com" className="solid-btn"><i className="fa fa-envelope" aria-hidden="true"></i>Hire me!</a>
                </div>
            </div>
        );
    }
}