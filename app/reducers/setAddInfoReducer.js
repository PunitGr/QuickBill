// @flow
import { SET_ADDINFO } from "../constants";
import type { Action } from "../actions";

type State = {
    discount?: string,
    tax?: string 
};

export default function setAddInfoReducer(state: State = {discount: "0", tax: "0"}, action: Action):State {
    if (action.type === SET_ADDINFO) {
        return {
            discount: action.discount,
            tax: action.tax
        };
    }
    return state;
} 