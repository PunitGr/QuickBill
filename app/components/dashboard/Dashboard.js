// @flow
import React, { Component } from "react";
import SideNav from "./SideNav";
import Invoice from "./Invoice";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
    setDownloadStatus
} from "../../actions";

type Props = {
    setDownloadStatus: Function,
    downloadStatus: ?boolean
};

class Dashboard extends Component {

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
                        <Link
                            to="preview" 
                            className="ghost-btn"
                            onClick={() => {this.props.setDownloadStatus(!this.props.downloadStatus)}}
                            >
                            <i className="fa fa-arrow-circle-down" aria-hidden="true"> </i> Download
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        downloadStatus: state.downloadStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setDownloadStatus: (downloadStatus) => dispatch(setDownloadStatus(downloadStatus))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);