import React from "react";
import { Route } from "react-router-dom";

export const LoginRoute = ({ component: Component, doLogin, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component doLogin={doLogin} {...props} />}
  />
);
