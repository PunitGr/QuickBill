import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userReducer from "./userReducer";

const rootReducer = combineReducer({
    user: userReducer,
    routing: routerReducer
}); 

export default rootReducer;