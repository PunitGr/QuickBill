import { ADD_ITEM_VALUES } from "../constants";

export default function itemValuesReducer(state = {}, action) {
    if (action.type === ADD_ITEM_VALUES) {
        return action.obj;
    }
    return state;
}