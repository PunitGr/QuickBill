// @flow
import React, { Component } from "react";
import { setItem } from "../../actions";
import { connect } from "react-redux";

type Props = {
    items: Object,
    itemId: number,
    setItem: Function,
    width: number
};

type State = {
    obj: {
        name: string,
        quantity: ?number,
        description: string,
        price: ?number,
    },
};


class ItemRow extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            obj: {
                name: "",
                description: "",
                price: undefined,
                quantity: undefined
            }
        }
    }

    componentDidMount() {
        const { items } = this.props;
        if (items[this.props.itemId] != null) {
            this.setState({
                obj: items[this.props.itemId]
            });
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

        if (parseFloat(data.quantity) * parseFloat(data.price) > 0 && data.quantity && data.price) {
            price = (<div style={this.props.width >= 700 ? style.inputStyle : responsiveStyle.inputStyle}>
                        {(data.quantity * data.price).toFixed(2)}
                    </div>);
        } else {
            price = (<div style={this.props.width >= 700 ? style.inputStyle : responsiveStyle.inputStyle}>
                        0
                    </div>);
        }

        return(
            <div style={this.props.width >= 700 ? style.itemRow : responsiveStyle.itemRow} className="item-row">
                <input
                    style={this.props.width >= 700 ? style.inputStyle : responsiveStyle.inputStyle} 
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={this.handleChange}
                    placeholder="Item Name"
                />
                <input
                    style={this.props.width >= 700 ? style.inputStyle : responsiveStyle.inputStyle}
                    name="description"
                    type="text"
                    value={data.description}
                    onChange={this.handleChange}
                    placeholder="Description"
                />
                <input
                    style={this.props.width >= 700 ? style.inputStyle : responsiveStyle.inputStyle}
                    name="quantity"
                    type="text"
                    value={data.quantity}
                    onChange={this.handleChange}
                    placeholder="Quantity"
                />
                <input
                    style={this.props.width >= 700 ? style.inputStyle : responsiveStyle.inputStyle}
                    name="price"
                    type="text"
                    value={data.price}
                    onChange={this.handleChange}
                    placeholder="Price"
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
        maxWidth: "160px",
        width: "100%",
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

const responsiveStyle = {
    itemRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        flexWrap: "Wrap"
    },
    inputStyle: {
        border: "0px",
        maxWidth: "260px",
        width: "100%",
        padding: "5px",
        margin: "2px",
        backgroundColor: "#FBFCFC",
    },
}

function mapStateToProps(state, ownProps) {
    return {
        items: state.items,
        width: state.width
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setItem: (id, value) => dispatch(setItem(id, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemRow);