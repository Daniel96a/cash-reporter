import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  auth,
  doLogout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component auth={auth} doLogout={doLogout} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);
