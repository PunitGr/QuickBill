// @flow
import { SET_PAYDATE } from "../constants";
import type { Action } from "../actions";

type State = boolean;

export default function payDateReducer(state: State = false, action: Action): State {
    if (action.type === SET_PAYDATE) {
        return action.payDate;
    }
    return state;
}
