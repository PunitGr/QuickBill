// @flow
import React, { Component } from "react";

type Props = {};

type State = {
    name: string,
    description: string,
    amount: ?number
};

export default class ItemRow extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            amount: null,
        }
    }

    render() {
        return();
    }
}