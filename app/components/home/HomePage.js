import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return(
            <div className="home">
                <div className="home__banner home__banner--bg">
                    <div className="overlay"></div>
                    <h2>Free and Simple <span>invoicing</span> for freelancers and businesses.</h2>
                    <Link to="/QuickBill/dashboard" className="solid-btn">Create Invoice</Link>
                    <h4>No signup required</h4>
                </div>
                <div className="home__banner home__banner--footer">
                    <h4>Star this project on Github</h4>
                    <div className="github-buttons">
                        <a className="github-button"
                            href="https://github.com/PunitGr/QuickBill"
                            data-icon="octicon-star"
                            data-size="large"
                            data-show-count="true"
                            aria-label="Star PunitGr/QuickBill on GitHub"
                            alt="github-star">
                                Star
                        </a>
                        <a className="github-button"
                            href="https://github.com/PunitGr/QuickBill/fork"
                            data-icon="octicon-repo-forked" data-size="large"
                            data-show-count="true"
                            aria-label="Fork PunitGr/QuickBill on GitHub"
                            alt="github-fork">
                                Fork
                        </a>
                    </div>

                    <a href="mailto:groove67@gmail.com" className="solid-btn"><i className="fa fa-envelope" aria-hidden="true"></i>Hire me!</a>
                </div>
            </div>
        );
    }
}