import React from "react";
import { Route, Redirect } from "react-router-dom";

export const LoginRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && localStorage.token === undefined ? (
          <Component {...props} />
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
};
