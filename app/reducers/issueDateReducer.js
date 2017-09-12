// @flow
import { SET_ISSUE_DATE } from "../constants";
import type { Action } from "../actions";
import moment from "moment";

type State = Date;
const today: Date = moment();

export default function issueDateReducer(state: State = today, action: Action) {
    if (action.type === SET_ISSUE_DATE) {
        return action.issueDate;
    }
    return state;
}
