// @flow
import { ADD_ITEM, SORT_ITEMS } from "../constants";
import type { Action } from '../types/Action';

type State = Array<mixed>;

export default function itemOrderReducer(state: State = [], action: Action) {
    if (action.type === SORT_ITEMS) {
        return action.order;
    } else if (action.type === ADD_ITEM) {
        return [...state, action.id];
    }
    return state;
}