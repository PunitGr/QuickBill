// @flow
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import itemValuesReducer from "./itemValuesReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    items: itemsReducer
});

export default rootReducer;