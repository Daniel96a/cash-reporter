import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { verifyToken } from "./actions/auth";
import './index.css'
if (localStorage.getItem("token")) {
  store.dispatch(verifyToken(localStorage.token));
}


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
