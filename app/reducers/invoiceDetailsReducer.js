// @flow
import { SET_INVOICE_DETAILS } from "../constants";
import type { Action } from "../actions";

type State = Object;

export default function invoiceDetailsReducer(state: State = {}, action: Action) {
    if (action.type === SET_INVOICE_DETAILS) {
        return {...state, [action.name]: action.val};
    }
    return state;
} 