import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { EmployeeDetails } from "./EmployeeDetails";
import { EditEmployee } from "./edit/EditEmployee";
import { listStyle } from "../../../../styles/Styles";

const EmployeeList = props => {
  const styles = listStyle()
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [employeeSelected, setEmployeeSelected] = useState(null);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  // const openEdit = e => {
  //   setEmployeeSelected(e.currentTarget.id);
  //   setShowEditEmployee(true);
  // };

  const openDetails = e => {
    setEmployeeSelected(e.currentTarget.id);
    setShowEmployeeDetails(true);
  };
  return (
    <React.Fragment>
      {employeeSelected !== null && (
        <EmployeeDetails
          employees={props.employees.employees}
          employeeSelected={employeeSelected}
          setEmployeeSelected={setEmployeeSelected}
          showEmployeeDetails={showEmployeeDetails}
          setShowEmployeeDetails={setShowEmployeeDetails}
          updateEmployee={props.updateEmployee}
          deleteEmployee={props.deleteEmployee}
        />
      )}
      {showEditEmployee && (
        <EditEmployee
          employees={props.employees.employees}
          employeeSelected={employeeSelected}
          setEmployeeSelected={setEmployeeSelected}
          updateEmployee={props.updateEmployee}
          deleteEmployee={props.deleteEmployee}
          setShowEditEmployee={setShowEditEmployee}
        />
      )}
      {props.employees !== undefined && (
        <List dense className={styles.root} disablePadding>
          {props.employees.employees.map((employee, index) => (
            <ListItem
              id={index}
              key={index}
              className={`employeeid-${employee.id} employeeListItem`}
              onClick={openDetails.bind(this)}
              button
            >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${employee}`}
                  src={`/static/images/avatar/${employee.id}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`
                ${employee.firstname} ${employee.lastname}`}
                secondary={`Phone number: ${employee.phonenr}`}
              />
            </ListItem>
          ))}
        </List>
      )}
      {props.employees.employees.length === 0 && <p>No employees found</p>}
    </React.Fragment>
  );
};
export default EmployeeList;
