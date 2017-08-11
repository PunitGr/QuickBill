// @flow
import React, { Component } from "react";
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from "react-sortable-hoc";
import ItemRow from "./ItemRow";
import { addItem, sortItems, addItemValues } from "../../actions";
import { connect } from "react-redux";

type Props = {
    items: Array<mixed>,
    sortItems: Function,
    addItem: Function
};

type State = {
    hoverIn: boolean
};


class Item extends Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            hoverIn: false
        }
    }

    onSortEnd = ({oldIndex, newIndex}: Object) => {
        let { items } = this.props;
        this.props.sortItems(arrayMove(items, oldIndex, newIndex));
    }

    addInput = () => {
        this.props.addItem();
    }

    hoverStatus = () => {
        this.setState({
            hoverIn: !this.state.hoverIn
        });
    }

    render() {
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

        const DragHandle = SortableHandle(() => <span><i className="fa fa-bars" aria-hidden="true" style={barStyle}></i></span>);

        const SortableItem = SortableElement(({value}: Object) => {
            return (
                <li style={listStyle}>
                    <ItemRow />
                    <a 
                        style={this.state.hoverIn ? saveButtonHoverStyle : saveButtonStyle}
                        onMouseEnter={this.hoverStatus}
                        onMouseLeave={this.hoverStatus}
                    >
                        Save
                    </a>
                    <a><i style={deleteButtonStyle} className="fa fa-trash" aria-hidden="true"></i></a>
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
                    </div>
                </div>
                <SortableList items={items} onSortEnd={this.onSortEnd} useDragHandle={true} />
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: item => dispatch(addItem()),
        sortItems: item => dispatch(sortItems(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);