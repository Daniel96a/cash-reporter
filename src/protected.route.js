import React from "react";
import { Route, Redirect } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

const ProtectedRoute = ({ component: Component, isAuthenticated, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated || !isEmpty(user) ? (
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
