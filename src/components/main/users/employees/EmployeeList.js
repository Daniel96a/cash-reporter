import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { EmployeeDetails } from "./EmployeeDetails";
import { EditEmployee } from "./edit/EditEmployee";
import { Pressable } from "../../../../pressable/Pressable";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    "& .MuiList-padding": {
      padding: 0
    },
    backgroundColor: theme.palette.background.paper,
    "& .MuiTouchRipple-root": {
      borderBottom: "1px solid lightgrey"
    }
  }
}));

const EmployeeList = props => {
  const classes = useStyles();
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [employeeSelected, setEmployeeSelected] = useState(null);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  const openEdit = e => {
    setEmployeeSelected(e.currentTarget.id);
    setShowEditEmployee(true);
  };

  const openDetails = e => {
    setEmployeeSelected(e.currentTarget.id);
    setShowEmployeeDetails(true);
  };
  return (
    <div style={{ padding: 0 }}>
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
        <List dense className={classes.root} disablePadding>
          {props.employees.employees.map((employee, index) => (
            <Pressable
              id={index}
              key={index}
              onClick={openDetails.bind(this)}
              onPress={openEdit.bind(this)}
            >
              {
                <ListItem
                  id={index}
                  key={index}
                  className={`employeeid-${employee.id}`}
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
              }
            </Pressable>
          ))}
        </List>
      )}
      {props.employees.employees.length === 0 && <p>No employees found</p>}
    </div>
  );
};
export default EmployeeList;
