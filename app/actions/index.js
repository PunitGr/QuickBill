// @flow
import { SET_USER, ADD_ITEM, SORT_ITEMS, SET_ITEM } from "../constants";

export type Action = {
    type: string,
    user?: string,
    id?: number,
    value?: Object,
    order?: Array<number>
};

export function setUser(user: string): Action {
    return {
        type: SET_USER,
        user
    }
}

export function addItem(id: number, value: Object): Action {
    return {
        type: ADD_ITEM,
        id,
        value
    }
}

export function setItemsOrder(order: Array<number>): Action {
    return {
        type: SORT_ITEMS,
        order
    }
}

export function setItem(id: number, value: Object): Action {
    return {
        type: SET_ITEM,
        id,
        value
    }
}