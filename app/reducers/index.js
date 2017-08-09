import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    items: itemsReducer
});

export default rootReducer;