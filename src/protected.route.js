import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  auth,
  doLogout,
  customers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  fetchCustomerList,
  employees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
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
          deleteCustomer={deleteCustomer}
          updateCustomer={updateCustomer}
          fetchCustomerList={fetchCustomerList}
          employees={employees}
          addEmployee={addEmployee}
          updateEmployee={updateEmployee}
          deleteEmployee={deleteEmployee}
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
