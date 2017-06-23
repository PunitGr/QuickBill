// @flow
import React, { Component } from "react";

type Props = {};

type State = {
    obj: {
        name: string,
        description: string,
        amount: ?number,
    },
    add: boolean
};

export default class ItemRow extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            obj: {
                name: "",
                description: "",
                amount: undefined,
            },
            add: false,
        }
    }

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
            const obj = this.state.obj;
            const { name, value } = e.target;
            obj[name] = value;
            this.setState({
                obj
            });
        }
    }

    render() {
        const data = this.state.obj
        return(
            <div className="item-row">
                <input 
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={this.handleChange}
                />
                <input 
                    name="description"
                    type="text"
                    value={data.description}
                    onChange={this.handleChange}
                />
                <input
                    name="amount"
                    type="number"
                    value={data.amount}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}