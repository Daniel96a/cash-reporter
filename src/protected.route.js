import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  auth,
  customers,
  doLogout,
  addCustomer,
  fetchCustomerList,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component auth={auth} doLogout={doLogout} addCustomer={addCustomer} fetchCustomerList={fetchCustomerList} customers={customers}{...props} />
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
