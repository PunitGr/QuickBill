// @flow
import React, { Component } from "react";
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from "react-sortable-hoc";
import ItemRow from "./ItemRow";

const DragHandle = SortableHandle(() => <div><span>::</span></div>);

const SortableItem = SortableElement(({value}: Object) => {
    return (
        <li>
            <DragHandle />
            <ItemRow />
        </li>
    );
});

const SortableList = SortableContainer(({items}: Object) => {
    return (
        <ul>
            {items.map((value: string, index: number) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </ul>
    );
});

type Props = {};

type State = {
    items: Array<string>
};

export default class Item extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            items: ['Item 1', 'Item 2'],
        }
    }

    onSortEnd = ({oldIndex, newIndex}: Object) => {
        let {items} = this.state;
        this.setState({
            items: arrayMove(items, oldIndex, newIndex),
        });
    };

    addInput = () => {
        const len = this.state.items.length;
        this.state.items.push("Item " + len);
        this.setState({
            items: this.state.items
        });
    }

    addColumn = () => {

    }

    render() {
        let {items} = this.state;
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