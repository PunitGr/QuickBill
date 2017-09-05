// @flow
import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import Select from "react-select";
import { connect } from "react-redux";

import SideNav from "./SideNav";
import Item from "./Item";
import {
    setInvoiceDetails,
    setStatus,
    setIssueDate,
    setDueDate
} from "../../actions";

type Props = {
    currency: Object,
    addInfo: {
        discount: ?number,
        tax: ?number
    },
    invoiceDetails: {
        to: string,
        from: string,
        addressTo: string,
        addressFrom: string,
        phoneTo: string,
        phoneFrom: string,
        emailTo: string,
        emailFrom: string,
        invoiceNumber: string,
        job: string,
    },
    status: {value: ?string, label: ?string},
    issueDate: ?Date,
    dueDate: ?Date,
};

type State = {
    issueFocused: boolean,
    dueFocused: boolean,
};

const options = [
    { value: "paid", label: "Paid"},
    { value: "due", label: "Due"},
    { value: "overdue", label: "Overdue"},
    { value: "onhold", label: "On Hold"},
]

class Invoice extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            invoiceNumber: "001",
            job: "",
            issueFocused: false,
            dueFocused: false,
        }
    }

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
            const { name, value } = e.target;
            this.props.setInvoiceDetails(name, value);
        }
    }

    selectChange = (val: {value: ?string, label: ?string}) => {
        if (val) {
            this.props.setStatus(val);
        }else {
            this.prop.setStatus({ value: "paid", label: "Paid"});
        }
    }

    render() {
        const {items} = this.props;
        const {addInfo} = this.props;
        const { invoiceDetails } = this.props;
        let discountElement;
        let price = 0;
        let subTotal = 0;
        let discount = 0;
        let tax = 0;

        if (addInfo["discount"] && addInfo["discount"] > 0) {
            console.log(price * discount);
            discountElement = (
                        <div>
                            <span>Discount</span>
                            <h2>{addInfo["discount"]} %</h2>
                        </div>
                    );
        }

        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                if (items[key] && parseInt(items[key]["quantity"]) > 0 && parseInt(items[key]["amount"]) > 0) {
                    price += items[key]["quantity"] * items[key]["amount"];
                    subTotal += items[key]["quantity"] * items[key]["amount"];
                    discount = (addInfo["discount"] / 100);
                    tax = (addInfo["tax"] / 100);
                    price = (price - (price * discount) + (price * tax)).toFixed(2);
                }
            }
        }

        return (
            <div className="wrapper">
                <div className="invoice">
                    <div className="invoice__header">
                        <Select
                            name="status"
                            value={this.props.status}
                            options={options}
                            onChange={this.selectChange}
                        />
                        <h2>Invoice</h2>
                    </div>

                    <div className="invoice__info">
                        <div className="info">
                            <label htmlFor="date">Date</label>
                            <SingleDatePicker
                                date={this.props.issueDate}
                                focused={this.state.issueFocused}
                                numberOfMonths={1}
                                onDateChange={date => this.props.setIssueDate(date)}
                                onFocusChange={({focused}) => this.setState({ issueFocused: !this.state.issueFocused})}
                                isOutsideRange={() => false}
                                />
                        </div>

                        <div className="info">
                            <label htmlFor="date">Due Date</label>
                            <SingleDatePicker
                                date={this.props.dueDate}
                                focused={this.state.dueFocused}
                                numberOfMonths={1}
                                onDateChange={date => this.props.setDueDate(date)}
                                onFocusChange={({focused}) => this.setState({ dueFocused: !this.state.dueFocused})}
                                />
                        </div>

                        <div className="info">
                            <label htmlFor="invoice">Invoice #</label>
                            <input
                                className="input-element input-element--number"
                                name="invoiceNumber"
                                value={invoiceDetails.invoiceNumber}
                                onChange={this.handleChange}
                                placeholder="Invoice Number"
                                />
                        </div>

                        <div className="info">
                            <label htmlFor="job">Job</label>
                            <input
                                className="input-element"
                                name="job"
                                value={invoiceDetails.job}
                                onChange={this.handleChange}
                                placeholder="Description"
                                />
                        </div>
                    </div>

                    <div className="invoice__info">
                        <div className="address-element">
                            <label htmlFor="from">Bill from:</label>
                            <input 
                                type="text"
                                className="input-element" 
                                name="from"
                                value={invoiceDetails.from}
                                onChange={this.handleChange}
                                placeholder="From"
                                />
                            <textarea 
                                name="addressFrom"
                                value={invoiceDetails.addressFrom}
                                onChange={this.handleChange}
                                placeholder="Address"
                            />
                            <input 
                                type="text"
                                className="input-element" 
                                name="phoneFrom"
                                value={invoiceDetails.phoneFrom}
                                onChange={this.handleChange}
                                placeholder="Phone"
                                />
                            <input 
                                type="email"
                                className="input-element" 
                                name="emailFrom"
                                value={invoiceDetails.emailFrom}
                                onChange={this.handleChange}
                                placeholder="Email"
                                />
                        </div>
                        <div className="address-element">
                            <label htmlFor="to">Bill to:</label>
                            <input 
                                type="text"
                                className="input-element" 
                                name="to"
                                value={invoiceDetails.to}
                                onChange={this.handleChange}
                                placeholder="To"
                                />
                            <textarea 
                                name="addressTo"
                                value={invoiceDetails.addressTo}
                                onChange={this.handleChange}
                                placeholder="Address"
                            />
                            <input 
                                type="text"
                                className="input-element" 
                                name="phoneTo"
                                value={invoiceDetails.phoneTo}
                                onChange={this.handleChange}
                                placeholder="Phone"
                                />
                            <input 
                                type="email"
                                className="input-element" 
                                name="emailTo"
                                value={invoiceDetails.emailTo}
                                onChange={this.handleChange}
                                placeholder="Email"
                                />
                        </div>
                    </div>
                    <hr />
                    <Item />
                    <hr />
                    <div className="invoice__bill">
                        <div className="bill-detail">                        
                            <div>
                                <span>Subtotal</span>
                                <h2>{this.props.currency["value"]} {subTotal}</h2>
                            </div>
                            {discountElement}
                            <div>
                                <span>Taxes</span>
                                <h2>{this.props.addInfo["tax"] || 0} %</h2>
                            </div>
                            <div>
                                <span>Total ({this.props.currency["label"]})</span>
                                <h2 className="bill-total">{this.props.currency["value"]} {price}</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        currency: state.currency,
        addInfo: state.addInfo,
        items: state.items,
        invoiceDetails: state.invoiceDetails,
        status: state.status,
        issueDate: state.issueDate,
        dueDate: state.dueDate
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setInvoiceDetails: (name, value) => dispatch(setInvoiceDetails(name, value)),
        setStatus: (statusObj) => dispatch(setStatus(statusObj)),
        setIssueDate: (issueDate) => dispatch(setIssueDate(issueDate)),
        setDueDate: (dueDate) => dispatch(setDueDate(dueDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);