import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { verifyToken } from "./actions/auth";
import "./index.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

if (localStorage.token) {
  store.dispatch(verifyToken(localStorage.token));
}

render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
