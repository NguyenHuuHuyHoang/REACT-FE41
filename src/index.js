import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware ,compose} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import "./index.css";

import rootReducer from "./reducer/rootReducer";

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  rootReducer,
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //createStore nhận vào 1 tham số là reducer của mình

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
