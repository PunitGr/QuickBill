// @flow
import React, { Component } from "react";
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from "react-sortable-hoc";
import ItemRow from "./ItemRow";
import { addItem, setItemsOrder } from "../../actions";
import { connect } from "react-redux";

type Props = {
    items: Array<mixed>,
    setItemsOrder: Function,
    addItem: Function
};


const DragHandle = SortableHandle(() => <span><i className="fa fa-bars" aria-hidden="true" style={barStyle}></i></span>);

const SortableItem = SortableElement(({value}: Object) => {
    return (
        <li style={listStyle}>
            <ItemRow itemId={value} />
            <DragHandle />
        </li>
    );
});

const SortableList = SortableContainer(({items}: Object) => {
    return (
        <ul>
            {items.map((value: string, index: number) => (
                <SortableItem key={`${index}`} index={index} value={value} />
            ))}
        </ul>
    );
});

const listStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FBFCFC",
    borderRadius: "3px",
    height: "36px",
    padding: "2px 8px",
    marginTop: "10px",
}

const barStyle = {
    fontSize: "18px",
    color: "#999",
    verticalAlign: "middle",
    transition: "all .3s"
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

class Item extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
    }

    onSortEnd = ({oldIndex, newIndex}: Object) => {
        const { order } = this.props;
        const newOrder = arrayMove(order, oldIndex, newIndex);
        this.props.setItemsOrder(newOrder);
    }

    addInput = () => {
        const { order } = this.props;
        this.props.setItemsOrder(order.concat(order.length + 1));
    }

    render() {
        let { order } = this.props;

        return (
            <div className="item">
                <div className="item__head">
                    <div className="name">Item</div>
                    <div className="description">Description</div>
                    <div className="amount">Amount</div>
                    <div>
                        <a onClick={this.addColumn}>+</a>
                    </div>
                </div>
                <SortableList items={order} onSortEnd={this.onSortEnd} useDragHandle={true} />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);