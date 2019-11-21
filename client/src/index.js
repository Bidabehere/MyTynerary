import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import promise from "redux-promise-middleware";
import reduxThunk from 'redux-thunk';

import App from "./App";

const store = createStore(reducers, {}, applyMiddleware(promise, reduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
