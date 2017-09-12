// @flow
import { SET_WIDTH } from "../constants";
import type { Action } from "../actions";

export type widthState = number;

const initialState: widthState = (
    window.innerWidth
); 

export default function widthReducer(state: widthState = initialState, action: Action) {
    if (action.type === SET_WIDTH) {
        return action.width;
    }
    return state;
}