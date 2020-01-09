import React, { useState } from "react";

import { AddCustomer } from "./customers/add/AddCustomer";
import { AddEmployee } from "./employees/add/AddEmployee";

import { AddCustomerButton } from "./customers/add/AddCustomerButton";
import { AddEmployeeButton } from "./employees/add/AddEmployeeButton";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { SwitchLists } from "./SwitchLists";

const UsersView = props => {
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);

  const [selectUserList, setSelectUserList] = useState("Customers");
  return (
    <MuiThemeProvider>
      <React.Fragment>
        {showAddCustomerForm && showAddCustomerForm !== undefined && (
          <AddCustomer
            showAddCustomerForm={showAddCustomerForm}
            addCustomer={props.addCustomer}
            setShowAddCustomerForm={setShowAddCustomerForm}
          />
        )}
        {showAddEmployeeForm && showAddEmployeeForm !== undefined && (
          <AddEmployee
            showAddEmployeeForm={showAddEmployeeForm}
            addEmployee={props.addEmployee}
            setShowAddEmployeeForm={setShowAddEmployeeForm}
          />
        )}
        <SwitchLists
          setSelectUserList={setSelectUserList}
          showAddCustomerForm={showAddCustomerForm}
          setShowAddCustomerForm={setShowAddCustomerForm}
          customers={props.customers}
          addCustomer={props.addCustomer}
          updateCustomer={props.updateCustomer}
          deleteCustomer={props.deleteCustomer}
          fetchCustomerList={props.fetchCustomerList}
          showAddEmployeeForm={showAddEmployeeForm}
          setShowAddEmployeeForm={setShowAddEmployeeForm}
          employees={props.employees}
          addEmployee={props.addEmployee}
          fetchEmployeeList={props.fetchEmployeeList}
          updateEmployee={props.updateEmployee}
          deleteEmployee={props.deleteEmployee}
        />
        {selectUserList === "Customers" && (
          <AddCustomerButton setShowAddCustomerForm={setShowAddCustomerForm} />
        )}
        {selectUserList === "Employees" && (
          <AddEmployeeButton setShowAddEmployeeForm={setShowAddEmployeeForm} />
        )}
      </React.Fragment>
    </MuiThemeProvider>
  );
};
export default UsersView;
