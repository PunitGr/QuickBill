// @flow
import { SET_CURRENCY } from "../constants";
import type { Action } from "../actions";

type State = Object;

export default function currencyReducer(state: State = { "value": "$", "label": "USD" }, action: Action) {
    if (action.type === SET_CURRENCY) {
        return action.currency;
    }
    return state;
} 