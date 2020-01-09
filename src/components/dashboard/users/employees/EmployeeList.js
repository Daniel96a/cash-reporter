import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { EmployeeDetails } from "./EmployeeDetails";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    "& .MuiTouchRipple-root": {
      borderBottom: "1px solid lightgrey"
    }
  }
}));

const EmployeeList = props => {
  console.log(props.employees.length);

  const classes = useStyles();
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [employeeSelected, setEmployeeSelected] = useState(null);
  const openDetails = e => {
    console.log(props.employees.employees[e.currentTarget.id]);
    setEmployeeSelected(props.employees.employees[e.currentTarget.id]);
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
      {props.employees !== undefined && (
        <List dense className={classes.root}>
          {props.employees.employees.map((employee, index) => (
            <ListItem
              id={index}
              key={index}
              className={`employeeid-${employee.id}`}
              button
              onClick={openDetails.bind(this)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${employee}`}
                  src={`/static/images/avatar/${employee.id}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`Employee ID = ${employee.id}
                ${employee.firstname}`}
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
