// @flow
import { ADD_ITEM, SET_ITEM } from "../constants";
import type { Action } from '../types/Action';

type State = Object;

export default function itemsReducer(state: State = {}, action: Action): State {
    if (action.type === ADD_ITEM || action.type === SET_ITEM) {
        return {...state, [action.id]: action.value};
    }
    return state;
}
