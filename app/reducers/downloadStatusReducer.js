// @flow
import { SET_DOWNLOAD_STATUS } from "../constants";
import type { Action } from "../actions";

type State = boolean;

export default function paidStatusReducer(state: State = false, action: Action) {
    if (action.type === SET_DOWNLOAD_STATUS) {
        return action.downloadStatus;
    }
    return state;
}
