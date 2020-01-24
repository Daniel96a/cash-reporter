import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token !== undefined ? (
        <Component {...props} />
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
export default ProtectedRoute;
