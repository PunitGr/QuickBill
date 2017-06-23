import { SET_USER } from "../constants";

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}