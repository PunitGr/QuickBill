// @flow
import React, { Component } from "react";
import { setItem } from "../../actions";
import { connect } from "react-redux";

type Props = {
    obj: {
        name: string,
        description: string,
        quantity: ?number,
        amount: ?number,
    },
    itemId: number,
    setItem: Function
};

type State = {
    obj: {
        name: string,
        quantity: ?number,
        description: string,
        amount: ?number,
    }
};


class ItemRow extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            obj: {
                name: "",
                description: "",
                amount: undefined,
                quantity: undefined
            }
        }
    }

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
            const { obj } = this.state;
            const { name, value } = e.target;
            obj[name] = value;
            this.setState({
                obj
            });
            const itemId = this.props.itemId;

            this.props.setItem(itemId, obj);
        }
    }

    render() {
        const { obj: data } = this.state;
        let price;

        if (parseInt(data.quantity) * parseInt(data.amount) > 0) {
            price = (<div style={style.inputStyle}>
                        {data.quantity * data.amount}
                    </div>);
        }
                        

        return(
            <div style={style.itemRow} className="item-row">
                <input
                    style={style.inputStyle} 
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={this.handleChange}
                    placeholder="Item Name"
                />
                <input
                    style={style.inputStyle} 
                    name="description"
                    type="text"
                    value={data.description}
                    onChange={this.handleChange}
                    placeholder="Description"
                />
                <input
                    style={style.inputStyle}
                    name="quantity"
                    type="text"
                    value={data.quantity}
                    onChange={this.handleChange}
                    placeholder="Quantity"
                />
                <input
                    style={style.inputStyle}
                    name="amount"
                    type="text"
                    value={data.amount}
                    onChange={this.handleChange}
                    placeholder="Amount"
                />
                {price}
            </div>
        );
    }
}

const style = {
    itemRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    inputStyle: {
        border: "0px",
        width: "160px",
        padding: "2px",
        backgroundColor: "#FBFCFC",
    },
    saveButtonStyle: {
        borderRadius: "3px",
        color: "#fff",
        margin: "4px 15px",
        backgroundColor: "#01D58A",
        padding: "3px 12px",
    },
    saveButtonHoverStyle: {
        borderRadius: "3px",
        color: "#fff",
        margin: "4px 15px",
        backgroundColor: "rgba(3, 199, 130, 1)",
        padding: "3px 12px",
    },
    deleteButtonStyle: {
        fontSize: "18px",
        color: "#999",
        margin: "4px 15px 4px 0"
    }
}

function mapStateToProps(state, ownProps) {
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setItem: (id, value) => dispatch(setItem(id, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemRow);