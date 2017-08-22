import { SORT_ITEMS } from "../constants";
import type { Action } from '../types/Action';

type State = Array<mixed>;

export default function itemOrderReducer(state = [], action) {
    if (action.type === SORT_ITEMS) {
        return action.order;
    }
    return state;
}