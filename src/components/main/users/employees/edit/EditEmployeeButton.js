import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles, Button } from "@material-ui/core";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "../delete/DeleteEmployee";

export const EditEmployeeButton = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  const [showDeleteEmployee, setShowDeleteEmployee] = useState(false);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openEditEmployee = e => {
    setShowEditEmployee(true);
  };
  const openDeleteEmployee = e => {
    setShowDeleteEmployee(true);
  };
  return (
    <div className={useStyles.root}>
      {showEditEmployee && (
        <EditEmployee
          employeeSelected={props.employeeSelected}
          setShowEditEmployee={setShowEditEmployee}
        />
      )}
      {showDeleteEmployee && (
        <DeleteEmployee
          setShowDeleteEmployee={setShowDeleteEmployee}
          showDeleteEmployee={showDeleteEmployee}
          setShowEmployeeDetails={props.setShowEmployeeDetails}
          employeeSelected={props.employeeSelected}
          setEmployeeSelected={props.setEmployeeSelected}
        />
      )}
      <Button
        aria-label="Edit and Delete"
        onClick={handleClick}
        color="primary"
        style={{
          backgroundColor:"transparent",
          borderRadius: 50,
          height: 64,
          width: 64,
          position: "absolute",
          right: 0,
          margin: 'auto'
        }}
      >
        <SettingsIcon
          style={{
            fill: "white"
          }}
        />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClick={handleClose}
      >
        <StyledMenuItem onClick={openDeleteEmployee.bind(this)}>
          <DeleteIcon color="error" />
        </StyledMenuItem>
        <StyledMenuItem onClick={openEditEmployee.bind(this)}>
          <EditIcon color="action" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const StyledMenu = withStyles({
  paper: {
    margin: "auto",
    float: "right",
    border: "1px solid #d3d4d5",
    "& .MuiList-padding": {
      padding: 0
    }
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    width: "100%",
    "&:hover": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        backgroundColor: theme.palette.primary.white,
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);
