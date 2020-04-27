import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import CustomThemeProvider from "./ThemeProvider";

import store from "./redux/store";
import "./index.css";
import { refreshToken } from "./redux/actions/auth";
import { Cookies } from "react-cookie";

const cookie = new Cookies();
if (cookie.get("refresh_token")) {
  store.dispatch(refreshToken());
}

render(
  <Provider store={store}>
    <CustomThemeProvider>
        <App />
    </CustomThemeProvider>
  </Provider>,
  document.getElementById("root")
);
