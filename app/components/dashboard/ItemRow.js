// @flow
import React, { Component } from "react";
import { addItem } from "../../actions";
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

const saveButtonStyle = {
    borderRadius: "3px",
    color: "#fff",
    margin: "4px 15px",
    backgroundColor: "#01D58A",
    padding: "3px 12px",
}

const saveButtonHoverStyle = {
    borderRadius: "3px",
    color: "#fff",
    margin: "4px 15px",
    backgroundColor: "rgba(3, 199, 130, 1)",
    padding: "3px 12px",
}

const deleteButtonStyle = {
    fontSize: "18px",
    color: "#999",
    margin: "4px 15px 4px 0"
}

class ItemRow extends Component {
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
            hoverIn: false
        }
    }

    handleSave = () => {
        const itemId = this.props.itemId;
        const { obj } = this.state;
        this.props.addItem(itemId, obj);
    }

    hoverStatus = () => {
        this.setState({
            hoverIn: !this.state.hoverIn
        });
    }

    handleChange = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
            const { obj } = this.state;
            const { name, value } = e.target;
            obj[name] = value;
            this.setState({
                obj
            });
        }
    }

    render() {
        const { obj: data } = this.state;

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
                    <a  onClick={this.handleSave}
                    style={this.state.hoverIn ? saveButtonHoverStyle : saveButtonStyle}
                    onMouseEnter={this.hoverStatus}
                    onMouseLeave={this.hoverStatus}>
                        Save
                    </a>
                    <a><i style={deleteButtonStyle} className="fa fa-trash" aria-hidden="true"></i></a>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (id, value) => dispatch(addItem(id, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemRow);