// @flow
import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";

type Props = {} ;

type State = {
    invoiceNumber: string,
    issueDate: ?Date,
    dueDate: ?Date,
    details: string,
    issueFocused: boolean,
    dueFocused: boolean,
}

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

    render() {

        return (
            <div className="wrapper">
                <div className="invoice">
                    <div className="invoice__info">
                        <label htmlFor="invoice">Invoice #</label>
                        <input type="text"
                            name="invoiceNumber"
                            className="input-element"
                            value={this.state.invoiceNumber}
                            onChange={this.handleChange} />
                    </div>
                    <div className="invoice__info">
                        <label htmlFor="invoice">Issue Date</label>
                        <SingleDatePicker
                            date={this.state.issueDate}
                            focused={this.state.issueFocused}
                            numberOfMonths={1}
                            onDateChange={date => this.setState({ issueDate: date })}
                            onFocusChange={({focused}) => this.setState({ issueFocused: !this.state.issueFocused})}
                            />
                    </div>
                    <div className="invoice__info">
                        <label htmlFor="invoice">Due Date</label>
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
        );
    }
}