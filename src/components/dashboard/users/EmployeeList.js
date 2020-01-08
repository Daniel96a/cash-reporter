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
    "& .MuiTouchRipple-root":{
      borderBottom: "1px solid lightgrey"
    }
  }
}));

const EmployeeList = props => {
  const classes = useStyles();
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [employeeSelected, setEmployeeSelected] = useState(null);

  const openDetails = e => {
    setEmployeeSelected(props.employees.employees[e.currentTarget.id]);
    setShowEmployeeDetails(true);
  };
  return (
    <React.Fragment>
      {employeeSelected !== null && (
        <EmployeeDetails
          employees={props.employees.employees}
          employeeSelected={employeeSelected}
          showEmployeeDetails={showEmployeeDetails}
          setShowEmployeeDetails={setShowEmployeeDetails}
          updateEmployee={props.updateEmployee}
          
          />
          )}
      {props.employees !== undefined && (
        <List dense className={classes.root}>
          {props.employees.employees.map((employees, index) => (
            <ListItem
            id={index}
            key={index}
            button
            onClick={openDetails.bind(this)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${employees}`}
                  src={`/static/images/avatar/${employees.id}.jpg`}
                  />
              </ListItemAvatar>
              <ListItemText
                primary={`employees ID = ${employees.id}
                ${employees.firstname}`}
                secondary={`Phone number: ${employees.phonenr}`}
                />
            </ListItem>
          ))}
        </List>
      )}
    </React.Fragment>
  );
};
export default EmployeeList;
