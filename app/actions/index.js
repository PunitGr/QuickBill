import { SET_USER, ADD_ITEM, SORT_ITEMS } from "../constants";

export function setUser(user) {
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

export function sortItems(items) {
    return {
        type: SORT_ITEMS,
        items
    }
}
