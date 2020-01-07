import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  auth,
  doLogout,
  customers,
  addCustomer,
  fetchCustomerList,
  employees,
  addEmployee,
  fetchEmployeeList,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component
          auth={auth}
          doLogout={doLogout}
          customers={customers}
          addCustomer={addCustomer}
          fetchCustomerList={fetchCustomerList}
          employees={employees}
          addEmployee={addEmployee}
          fetchEmployeeList={fetchEmployeeList}
          {...props}
        />
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
