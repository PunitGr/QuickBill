// @flow
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import itemsReducer from "./itemsReducer";
import currencyReducer from "./currencyReducer";
import paidStatusReducer from "./paidStatusReducer";
import dateFormatReducer from "./dateFormatReducer";
import addInfoReducer from "./addInfoReducer";
import itemOrderReducer from "./itemOrderReducer";
import invoiceDetailsReducer from "./invoiceDetailsReducer";
import statusReducer from "./statusReducer";
import issueDateReducer from "./issueDateReducer";
import dueDateReducer from "./dueDateReducer";
import widthReducer from "./widthReducer";
import downloadStatusReducer from "./downloadStatusReducer";


const rootReducer = combineReducers({
    routing: routerReducer,
    items: itemsReducer,
    order: itemOrderReducer,
    currency: currencyReducer,
    paidStatus: paidStatusReducer,
    dateFormat: dateFormatReducer,
    addInfo: addInfoReducer,
    invoiceDetails: invoiceDetailsReducer,
    status: statusReducer,
    issueDate: issueDateReducer,
    dueDate: dueDateReducer,
    width: widthReducer,
    downloadStatus: downloadStatusReducer
});

export default rootReducer;