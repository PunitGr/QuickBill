// @flow
import { SET_DUE_DATE } from "../constants";
import type { Action } from "../actions";
import moment from "moment";

type State = Date;
const tomorrow: Date  = moment(new Date()).add(1,"days");

export default function dueDateReducer(state: State = tomorrow, action: Action) {
    if (action.type === SET_DUE_DATE) {
        return action.dueDate;
    }
    return state;
}
