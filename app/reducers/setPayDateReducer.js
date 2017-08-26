// @flow
import { SET_PAYDATE } from "../constants";
import type { Action } from "../actions";

type State = boolean;

export default function setPayDateReducer(state: State = false, action: Action): State {
    if (action.type === SET_PAYDATE) {
        if (action.payDate) {
            return action.payDate;
        }
        return state;
    }
    return state;
}
