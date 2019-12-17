import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, verifyToken } from './actions/auth';


if(localStorage.getItem("token")){
  store.dispatch(setCurrentUser(localStorage.token));
  store.dispatch(verifyToken(localStorage.token))
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
