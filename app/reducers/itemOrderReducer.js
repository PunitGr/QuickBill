// @flow
import { ADD_ITEM, SORT_ITEMS, REMOVE_ITEM } from "../constants";
import type { Action } from "../actions";

export type State = Array<number>;

export default function itemOrderReducer(state: State = [], action: Action): State {
    if (action.type === SORT_ITEMS) {
        if (action.order) {
            return action.order;
        }
        return state;
    }
    else if (action.type === ADD_ITEM) {
        if (action.id) {
            return [...state, action.id];
        }
        return state;
    }
    else if (action.type === REMOVE_ITEM) {
        return state.filter(item => item !== action.id);
    }
    return state;
}