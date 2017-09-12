// @flow
import { SET_PAID_STATUS } from "../constants";
import type { Action } from "../actions";

type State = boolean;

export default function paidStatusReducer(state: State = false, action: Action) {
    if (action.type === SET_PAID_STATUS) {
        return action.paidStatus;
    }
    return state;
}
