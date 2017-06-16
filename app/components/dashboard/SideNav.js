// @flow
import React, { Component } from "react";
import Toggle from "react-toggle";
import Select from "react-select";

const currencyData = require("./data.json");

type Props = {};

type State = {
    discount: ?number,
    tax: ?number,
    payDate: boolean,
    currency: ?string,
};

export default class SideNav extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            discount: undefined,
            tax: undefined,
            payDate: false,
            currency: undefined,
        }
    }

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
            const { name, value } = e.target;
            this.setState({
                [name]: value 
            });
        }
    }

    selectChange = (val: {value: ?string, label: ?string}) => {
        if (val) {
            this.setState({
                currency: val.value
            });
        }
        else {
            this.setState({
                currency: ""
            });
        }
    }

    render() {
        return (
            <div className="invoice-nav">
                <h4>Invoice Settings</h4>
                <hr />
                <div className="invoice-nav__element">
                    <div className="setting">
                        <span>Discount</span>
                        <input 
                            type="text"
                            name="discount"
                            value={this.state.discount}
                            onChange={this.handleChange} />
                    </div>
                    <div className="setting">
                        <span>Tax</span>
                        <input 
                            type="text"
                            name="discount"
                            value={this.state.tax}
                            onChange={this.handleChange} />
                    </div>
                    <div className="setting setting--inline">
                        <span>Pay to date</span>
                        <label>
                            <Toggle
                                defaultChecked={this.state.payDate}
                                icons={false}
                                onChange={() => {this.setState({payDate: !(this.state.payDate)})}} />
                        </label>
                    </div>
                </div>
                <hr />
                <div className="invoice-nav__element">
                    <div className="setting">
                        <span>Currency</span>
                        <Select 
                            name="currency"
                            value={this.state.currency}
                            options={currencyData}
                            onChange={this.selectChange}
                        />
                    </div>
                </div>
                <hr className="full-line" />
                <div className="invoice-nav__element">
                    <div className="setting">
                        <div className="solid-btn solid-btn--ghost">
                            <a className="ghost-btn"><i className="fa fa-eye" aria-hidden="true"></i> Preview</a>
                            <a className="ghost-btn"><i className="fa fa-arrow-circle-down" aria-hidden="true"></i> Download</a>
                        </div>
                        <a className="solid-btn solid-btn--rect">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i> Send Invoice
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}