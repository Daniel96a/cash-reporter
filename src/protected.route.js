import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
  {...rest}
  render={props =>
      sessionStorage.getItem("user") !== null? (
        <Component {...props} />
      ) : 
      (
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
