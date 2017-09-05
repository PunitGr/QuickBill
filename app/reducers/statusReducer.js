// @flow
import { SET_STATUS } from "../constants";
import type { Action } from "../actions";

type State = Object;

export default function statusReducer(state: State = { value: "paid", label: "Paid"}, action: Action) {
    if (action.type === SET_STATUS) {
        return action.status;
    }
    return state;
} 