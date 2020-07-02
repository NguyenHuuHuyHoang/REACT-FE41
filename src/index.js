import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";

import rootReducer from "./reducer/rootReducer"

const store = createStore(rootReducer); //createStore nhận vào 1 tham số là reducer của mình

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
