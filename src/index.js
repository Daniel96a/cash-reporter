import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, verifyToken } from './actions/auth';
import setAuthorizationToken from "./utils/setAuthorizationToken";

if(verifyToken(localStorage.jwtToken).status === 200){
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(localStorage.jwtToken));
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
