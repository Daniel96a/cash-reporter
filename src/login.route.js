import React from "react";
import { Route, Redirect } from "react-router-dom";

export const LoginRoute = ({ component: Component, doLogin,auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === false ? (
        <Component auth={auth} doLogin={doLogin}{...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);
