import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { validateToken } from "./redux/actions/auth";
if (sessionStorage.access_token !== undefined) {
  store.dispatch(validateToken());
}
render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
