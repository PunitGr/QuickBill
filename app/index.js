// @flow
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import configureStore from "./store/configureStore";
import rootReducer from "./reducers";

let store = configureStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);