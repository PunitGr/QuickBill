// @flow
import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import SideNav from "./SideNav";
import Select from "react-select";
import moment from "moment";

let today = moment();
let tomorrow  = moment(new Date()).add(1,'days');

type Props = {};

type State = {
    invoiceNumber: string,
    issueDate: ?Date,
    dueDate: ?Date,
    job: string,
    status: {value: ?string, label: ?string},
    issueFocused: boolean,
    dueFocused: boolean,
};

const options = [
    { value: "paid", label: "Paid"},
    { value: "due", label: "Due"},
    { value: "overdue", label: "Overdue"},
    { value: "onhold", label: "On Hold"},
]

export default class Invoice extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            invoiceNumber: "001",
            issueDate: today,
            dueDate: tomorrow,
            job: "",
            status: { value: "paid", label: "Paid"},
            issueFocused: false,
            dueFocused: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    selectChange = (val: {value: ?string, label: ?string}) => {
        if (val) {
            this.setState({
                status: val
            });
        }else {
            this.setState({
                status: { value: "paid", label: "Paid"}
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="invoice">
                    <div className="invoice__header">
                        <Select
                            name="status"
                            value={this.state.status}
                            options={options}
                            onChange={this.selectChange}
                        />
                        <h2>Invoice</h2>
                    </div>

                    <div className="invoice__info">
                        <div className="info">
                            <label htmlFor="date">Date</label>
                            <SingleDatePicker
                                date={this.state.issueDate}
                                focused={this.state.issueFocused}
                                numberOfMonths={1}
                                onDateChange={date => this.setState({ issueDate: date })}
                                onFocusChange={({focused}) => this.setState({ issueFocused: !this.state.issueFocused})}
                                isOutsideRange={() => false}
                                />
                        </div>

                        <div className="info">
                            <label htmlFor="date">Due Date</label>
                            <SingleDatePicker
                                date={this.state.dueDate}
                                focused={this.state.dueFocused}
                                numberOfMonths={1}
                                onDateChange={date => this.setState({ dueDate: date })}
                                onFocusChange={({focused}) => this.setState({ dueFocused: !this.state.dueFocused})}
                                isOutsideRange={() => false}
                                />
                        </div>

                        <div className="info">
                            <label htmlFor="invoice">Invoice #</label>
                            <input
                                className="input-element input-element--number"
                                name="invoiceNumber"
                                value={this.state.invoiceNumber}
                                onChange={this.handleChange}
                                placeholder="Invoice Number"
                                />
                        </div>

                        <div className="info">
                            <label htmlFor="job">Job</label>
                            <input
                                className="input-element"
                                name="job"
                                value={this.state.job}
                                onChange={this.handleChange}
                                placeholder="Description"
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}