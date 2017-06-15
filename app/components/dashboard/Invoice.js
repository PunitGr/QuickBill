// @flow
import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import SideNav from "./SideNav";

type Props = {};

type State = {
    invoiceNumber: string,
    issueDate: ?Date,
    dueDate: ?Date,
    details: string,
    issueFocused: boolean,
    dueFocused: boolean,
    addDueDate: boolean,
    removeDueDate: boolean,
    show: boolean,   
};

export default class Invoice extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            invoiceNumber: "",
            issueDate: null,
            dueDate: null,
            details: "",
            issueFocused: false,
            dueFocused: false,
            addDueDate: false,
            removeDueDate: false,
            show: true,
        }
        this.handleChange = this.handleChange.bind(this);
    }

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

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    toggle = (type: string) => {
        if (type === "IssueDate" && !this.state.due) {
            this.setState({
                addDueDate: !this.state.addDueDate
            });
        }
        if (type === "DueDate") {
            this.setState({
                removeDueDate: !this.state.removeDueDate
            });
        }
    }

    toggleDue = (type: string) => {
        if (type === "show") {
            this.setState({
                show: !this.state.show
            });
        }else {
            this.setState({
                show: !this.state.show
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <SideNav />
                <div className="invoice-container">  
                    <div className="invoice">
                        <div className="invoice__info" >
                            <label htmlFor="invoice">
                                <span className="invoice-label">Invoice #</span>
                            </label>
                            <input type="text"
                                name="invoiceNumber"
                                className="input-element"
                                value={this.state.invoiceNumber}
                                onChange={this.handleChange} />
                        </div>

                        <div className="invoice__info" onMouseEnter={() => this.toggle("IssueDate")} onMouseLeave={() => this.toggle("IssueDate")}>
                            <label htmlFor="invoice">
                                <span>Issue Date</span>
                                <a className={this.state.addDueDate ? "show" : ""} onClick={() => this.toggleDue("show")}>
                                    Add due
                                </a>
                            </label>
                            <SingleDatePicker
                                date={this.state.issueDate}
                                focused={this.state.issueFocused}
                                numberOfMonths={1}
                                onDateChange={date => this.setState({ issueDate: date })}
                                onFocusChange={({focused}) => this.setState({ issueFocused: !this.state.issueFocused})}
                                />
                        </div>

                        <div className={this.state.show ? "invoice__info" : ""} onMouseEnter={() => this.toggle("DueDate")} onMouseLeave={() => this.toggle("DueDate")}>
                            <label htmlFor="invoice">
                                <span>Due Date</span>
                                <a className={this.state.removeDueDate ? "show" : ""} onClick={() => this.toggleDue("hide")}>
                                    Remove
                                </a>
                            </label>
                            <SingleDatePicker
                                date={this.state.dueDate}
                                focused={this.state.dueFocused}
                                numberOfMonths={1}
                                onDateChange={date => this.setState({ dueDate: date })}
                                onFocusChange={({focused}) => this.setState({ dueFocused: !this.state.dueFocused})}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}