// @flow
import { SET_DATE_FORMAT } from "../constants";
import type { Action } from "../actions";

type State = Object;

export default function dateFormatReducer(state: State = {value: "MM/DD/YYYY", label: "MM/DD/YYYY"}, action: Action) {
    if (action.type === SET_DATE_FORMAT) {
        return action.dateFormat;
    }
    return state;
} 