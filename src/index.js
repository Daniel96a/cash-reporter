import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { verifyToken } from "./redux/actions/auth";
import "./index.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Cookies } from "react-cookie";
const cookie = new Cookies();

if (cookie.get("user")) {
  store.dispatch(verifyToken(cookie.get("user")));
}

render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
