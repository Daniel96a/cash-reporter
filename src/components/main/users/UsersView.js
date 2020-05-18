import React, { useState } from "react";

import AddCustomer from "./customers/add/AddCustomer";
import AddEmployee from "./employees/add/AddEmployee";



import { SwitchLists } from "./SwitchLists";
import { AddEmployeeButton } from "./employees/add/AddEmployeeButton";
import { AddCustomerButton } from "./customers/add/AddCustomerButton";

const UsersView = () => {
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  const [selectUserList, setSelectUserList] = useState(0);
  return (
    <>
      {showAddCustomerForm && (
        <AddCustomer
          showAddCustomerForm={showAddCustomerForm}
          setShowAddCustomerForm={setShowAddCustomerForm}
        />
      )}
      {showAddEmployeeForm && (
        <AddEmployee
          showAddEmployeeForm={showAddEmployeeForm}
          setShowAddEmployeeForm={setShowAddEmployeeForm}
        />
      )}
      <SwitchLists
        setSelectUserList={setSelectUserList}
        showAddCustomerForm={showAddCustomerForm}
        setShowAddCustomerForm={setShowAddCustomerForm}
        showAddEmployeeForm={showAddEmployeeForm}
        setShowAddEmployeeForm={setShowAddEmployeeForm}
      />
       {selectUserList === 0 && (
        <AddCustomerButton setShowAddCustomerForm={setShowAddCustomerForm} />
      )}
      {selectUserList === 1 && (
        <AddEmployeeButton setShowAddEmployeeForm={setShowAddEmployeeForm} />
      )}
    </>
  );
};
export default UsersView;
