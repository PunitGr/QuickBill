// @flow
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import itemOrderReducer from "./itemOrderReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    items: itemsReducer,
    order: itemOrderReducer
});

export default rootReducer;