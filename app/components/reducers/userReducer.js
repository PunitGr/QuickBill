import { SET_USER } from "../constants";

export default function userReducer(state, action) {
    if (action.type === SET_USER) {
        return action.user
    }
    return state;
}