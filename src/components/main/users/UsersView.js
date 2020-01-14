import React, { useState } from "react";

import { AddCustomer } from "./customers/add/AddCustomer";
import { AddEmployee } from "./employees/add/AddEmployee";

import { AddCustomerButton } from "./customers/add/AddCustomerButton";
import { AddEmployeeButton } from "./employees/add/AddEmployeeButton";

import { SwitchLists } from "./SwitchLists";

const UsersView = props => {
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  const [selectUserList, setSelectUserList] = useState(0);
  return (
    <React.Fragment>
      {showAddCustomerForm && (
        <AddCustomer
          showAddCustomerForm={showAddCustomerForm}
          addCustomer={props.addCustomer}
          setShowAddCustomerForm={setShowAddCustomerForm}
        />
      )}
      {showAddEmployeeForm && (
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
      {selectUserList === 0 && (
        <AddCustomerButton setShowAddCustomerForm={setShowAddCustomerForm} />
      )}
      {selectUserList === 1 && (
        <AddEmployeeButton setShowAddEmployeeForm={setShowAddEmployeeForm} />
      )}
    </React.Fragment>
  );
};
export default UsersView;
