// @flow
import React, { Component } from "react";
import { addItemValues } from "../../actions";
import { connect } from "react-redux";

type Props = {
    obj: {
        name: string,
        description: string,
        amount: ?number,
    },
};

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
                amount: undefined
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
        const data = this.state.obj;

        const itemRow = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%"
        }

        const inputStyle = {
            border: "0px",
            width: "200px",
            padding: "2px",
            backgroundColor: "#FBFCFC",
        }

        return(
            <div style={itemRow} className="item-row">
                <input
                    style={inputStyle} 
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={this.handleChange}
                    placeholder="Item Name"
                />
                <input
                    style={inputStyle} 
                    name="description"
                    type="text"
                    value={data.description}
                    onChange={this.handleChange}
                    placeholder="Description"
                />
                <input
                    style={inputStyle}
                    name="amount"
                    type="number"
                    value={data.amount}
                    onChange={this.handleChange}
                    placeholder="Amount"
                />
            </div>
        );
    }
}

// function mapStateToProps(state, ownProps) {
//     return {
//         itemValue: state.items
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         addItemValues: item => dispatch(addItemValues(item)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ItemRow);