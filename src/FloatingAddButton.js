import React from "react";
import AddCustomerButton from "./components/main/users/customers/add/AddCustomerButton";
import AddEmployeeButton from "./components/main/users/employees/add/AddEmployeeButton";
import AddReportButton from "./components/main/reports/add/AddReportButton";

const FloatingAddButton = ({
  toggleShowAddCustomer,
  toggleShowAddEmployee,
  toggleShowAddReport,
  states: { selectedView, showList },
}) => {
  if (selectedView.includes("users") && showList.includes("customers")) {
    return <AddCustomerButton toggleShowAddCustomer={toggleShowAddCustomer} />;
  }
  if (selectedView.includes("users") && showList.includes("employees")) {
    return <AddEmployeeButton toggleShowAddEmployee={toggleShowAddEmployee} />;
  }
  if (selectedView.includes("reports")) {
    return <AddReportButton toggleShowAddReport={toggleShowAddReport} />;
  } else {
    return null;
  }
};

export default FloatingAddButton;
