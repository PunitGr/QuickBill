// @flow
import React, { Component } from "react";
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from "react-sortable-hoc";
import ItemRow from "./ItemRow";
import { addItem, sortItems } from "../../actions";
import { connect } from "react-redux";

type Props = {};

type State = {
    items: Array<string>,
    show: boolean
};


class Item extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            show: false
        }
    }

    onSortEnd = ({oldIndex, newIndex}: Object) => {
        let {items} = this.props;
        this.props.sortItems(arrayMove(items, oldIndex, newIndex));
    };

    addInput = () => {
        this.props.addItem(this.state.items);
    }

    addColumn = () => {

    }

    render() {
        const listStyle = {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            backgroundColor: "#FBFCFC",
            borderRadius: "3px",
            height: "32px",
            padding: "0 8px",
            marginTop: "10px",
        }

        const barStyle = {
            fontSize: "18px",
            color: "#999",
            verticalAlign: "middle",
            transition: "all .3s"
        }

        const DragHandle = SortableHandle(() => <span><i className="fa fa-bars" aria-hidden="true" style={barStyle}></i></span>);

        const SortableItem = SortableElement(({value}: Object) => {
            return (
                <li style={listStyle}>
                    <ItemRow />
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
        
        let {items} = this.props;
        
        return (
            <div className="item">
                <div className="item__head">
                    <div className="name">Item</div>
                    <div className="description">Description</div>
                    <div className="amount">Amount</div>
                    <div>
                        <a onClick={this.addColumn}>+</a>
                        <input
                            name="col"
                            type="text"
                            value={this.state.amount}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <SortableList items={items} onSortEnd={this.onSortEnd} useDragHandle={true} />
                <a onClick={this.addInput}>+</a>
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
        addItem: item => dispatch(addItem(item)),
        sortItems: item => dispatch(sortItems(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);