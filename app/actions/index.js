// @flow
import { SET_USER, ADD_ITEM, SORT_ITEMS, ADD_ITEM_VALUES } from "../constants";

export function setUser(user: string) {
    return {
        type: SET_USER,
        user
    }
}

export function addItem() {
    return {
        type: ADD_ITEM
    }
}

export function sortItems(items: Array<mixed>) {
    return {
        type: SORT_ITEMS,
        items
    }
}

export function addItemValues(obj: Object) {
    return {
        type: ADD_ITEM_VALUES,
        obj
    }
}
