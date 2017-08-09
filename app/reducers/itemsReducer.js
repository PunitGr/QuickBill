import { ADD_ITEM, SORT_ITEMS } from "../constants";

export default function itemsReducer(state = [], action) {
    if (action.type === ADD_ITEM) {
        return [...state, state.length]
    } else if (action.type === SORT_ITEMS) {
        return action.items
    }
    return state;
}
