// @flow
import { SET_USER, ADD_ITEM, SORT_ITEMS, ADD_ITEM_VALUES } from "../constants";

export function setUser(user: string) {
    return {
        type: SET_USER,
        user
    }
}

export function addItem(id, value) {
    return {
        type: ADD_ITEM,
        id,
        value
    }
}

export function setItemsOrder(order: Array<mixed>) {
    return {
        type: SORT_ITEMS,
        order
    }
}
