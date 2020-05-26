import React from "react";

import AddCustomer from "../components/main/users/customers/add/AddCustomer";
import AddEmployee from "../components/main/users/employees/add/AddEmployee";

import { SwitchLists } from "../components/main/users/SwitchLists";
import { connect } from "react-redux";
import {
  showList,
  toggleShowAddCustomer,
  toggleShowAddEmployee,
} from "../redux/actions/states";

const UsersView = ({
  states: { showAddCustomer, showAddEmployee },
  showList,
  toggleShowAddCustomer,
  toggleShowAddEmployee,
}) => {
  return (
    <>
      <AddCustomer
        toggleShowAddCustomer={toggleShowAddCustomer}
        showAddCustomer={showAddCustomer}
      />
      <AddEmployee
        toggleShowAddEmployee={toggleShowAddEmployee}
        showAddEmployee={showAddEmployee}
      />
      <SwitchLists showList={showList} />
    </>
  );
};
const mapStateToProps = (state) => ({
  states: state.states,
});
export default connect(mapStateToProps, {
  showList,
  toggleShowAddCustomer,
  toggleShowAddEmployee,
})(UsersView);
