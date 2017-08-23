// @flow
import React, { Component } from "react";
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from "react-sortable-hoc";
import ItemRow from "./ItemRow";
import { addItem, setItemsOrder, removeItem } from "../../actions";
import { connect } from "react-redux";

type Props = {
    items: Object,
    order: Array<number>,
    setItemsOrder: Function,
    addItem: Function
};

const DragHandle = SortableHandle(() => <span><i className="fa fa-bars" aria-hidden="true" style={style.barStyle}></i></span>);

const SortableItem = SortableElement(({value, onRemove}: Object) => {
    return (
        <div style={style.listWrapper}>
            <li style={style.listStyle}>
                <ItemRow itemId={value} />
                <DragHandle />
            </li>
            <a onClick={() => onRemove(value)}>
                <i style={style.deleteButtonStyle} className="fa fa-times" aria-hidden="true"></i>
            </a>
        </div>
    );
});

const SortableList = SortableContainer(({order, items, onRemove}: Object) => {
    return (
        <ul>
            {order.map((value, index) => (
                <SortableItem key={value} index={index} value={value} onRemove={onRemove} />
            ))}
        </ul>
    );
});

const style = {
    listWrapper: {
        display: "flex",
        flexDirection: "row"
    },
    listStyle: {
        display: "flex",
        flexDirection: "row",
        width: "calc(100% - 20px)",
        left: "0",
        alignItems: "center",
        backgroundColor: "#FBFCFC",
        borderRadius: "3px",
        height: "36px",
        padding: "2px 8px",
        marginTop: "10px",
    },
    barStyle: {
        fontSize: "18px",
        color: "#999",
        verticalAlign: "middle",
        transition: "all .3s"
    },
    deleteButtonStyle: {
        fontSize: "16px",
        color: "#999",
        margin: "19px 4px"
    }
}

class Item extends Component {

    constructor(props: Props) {
        super(props);
    }

    onSortEnd = ({oldIndex, newIndex}: Object) => {
        const { order } = this.props;
        const newOrder = arrayMove(order, oldIndex, newIndex);
        this.props.setItemsOrder(newOrder);
    }

    addInput = () => {
        const order = this.props.order || 0;
        let getOrder = order.length == 0 ? order : parseInt(Math.max(...order))
        this.props.addItem(parseInt(getOrder + 1), null);
    }

    render() {
        let { order, items } = this.props;

        return (
            <div className="item">
                <div className="item__head">
                    <div className="name">Item</div>
                    <div className="description">Description</div>
                    <div className="amount">Amount</div>
                </div>
                <SortableList order={order} items={items} onSortEnd={this.onSortEnd} useDragHandle={true} onRemove={this.props.removeItem} />
                <a onClick={this.addInput} className="solid-btn solid-btn--new">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    Add Row
                </a>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        items: state.items,
        order: state.order
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setItemsOrder: item => dispatch(setItemsOrder(item)),
        addItem: (id, value) => dispatch(addItem(id, value)),
        removeItem: (id) => dispatch(removeItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);