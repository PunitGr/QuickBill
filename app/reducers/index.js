// @flow
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import currencyReducer from "./currencyReducer";
import payDateReducer from "./payDateReducer";
import addInfoReducer from "./addInfoReducer";
import itemOrderReducer from "./itemOrderReducer";
import invoiceDetailsReducer from "./invoiceDetailsReducer";
import statusReducer from "./statusReducer";
import issueDateReducer from "./issueDateReducer";
import dueDateReducer from "./dueDateReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    items: itemsReducer,
    order: itemOrderReducer,
    currency: currencyReducer,
    payDate: payDateReducer,
    addInfo: addInfoReducer,
    invoiceDetails: invoiceDetailsReducer,
    status: statusReducer,
    issueDate: issueDateReducer,
    dueDate: dueDateReducer
});

export default rootReducer;