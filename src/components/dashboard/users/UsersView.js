import React, { useState } from "react";

import { AddCustomer } from "./AddCustomer";
import { AddEmployee } from "./AddEmployee";

import { AddCustomerButton } from "./AddCustomerButton";
import { AddEmployeeButton } from "./AddEmployeeButton";


import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { SwitchLists } from "./SwitchLists";

const CustomersView = props => {
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
          fetchCustomerList={props.fetchCustomerList}
          employees={props.employees}
          addEmployee={props.addEmployee}
          fetchEmployeeList={props.fetchEmployeeList}
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
export default CustomersView;
