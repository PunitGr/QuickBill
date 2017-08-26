// @flow
import { ADD_ITEM, SET_ITEM, REMOVE_ITEM } from "../constants";
import type { Action } from "../actions";

type State = Object;

export default function itemsReducer(state: State = {}, action: Action): State {
    if (action.type === ADD_ITEM || action.type === SET_ITEM) {
        return {...state, [action.id]: action.value};
    }
    else if (action.type === REMOVE_ITEM) {
        if (action.id) {
            let { [action.id.toString()]: del, ...newState } = state;
            return newState;
        }
        return state;
    }
    return state;
}
