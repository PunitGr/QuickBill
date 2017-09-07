// @flow
import { SET_WIDTH } from "../constants";
import type { Action } from "../actions";

export type widthState = number;

const initialState: widthState = (
    window.innerWidth 
    || document.documentElement.clientWidth
    || document.body.clientWidth
); 

export default function widthReducer(state: State = initialState, action: Action) {
    if (action.type === SET_WIDTH) {
        return action.width;
    }
    return state;
}