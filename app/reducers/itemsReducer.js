// @flow
import { ADD_ITEM, SORT_ITEMS } from "../constants";
import type { Action } from '../types/Action';

type State = Array<mixed>;

export default function itemsReducer(state: State = [], action: Action): State {
    if (action.type === ADD_ITEM) {
        return [...state, state.length];
    } else if (action.type === SORT_ITEMS) {
        return action.items;
    }
    return state;
}
