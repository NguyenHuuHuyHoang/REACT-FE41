import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(); //createStore nhận vào 1 tham số là reducer của mình

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
