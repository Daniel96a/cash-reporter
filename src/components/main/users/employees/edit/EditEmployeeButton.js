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
          border: "none",
          height: 64,
          width: 64,
          position: "absolute",
          top: 0,
          right: -23
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
        <StyledMenuItem>
          <DeleteIcon
            onClick={openDeleteEmployee.bind(this)}
            color={"secondary"}
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <EditIcon color={"primary"} onClick={openEditEmployee.bind(this)} />
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
