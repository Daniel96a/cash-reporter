import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookie = new Cookies();
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated || cookie.get("access_token") ? (
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
