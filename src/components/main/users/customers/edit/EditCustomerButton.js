import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import SettingsIcon from "@material-ui/icons/Settings";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles, Button } from "@material-ui/core";
import EditCustomer from "./EditCustomer";
import DeleteCustomer from "../delete/DeleteCustomer";
import DeleteIcon from "@material-ui/icons/Delete";

export const EditCustomerButton = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showEditCustomer, setShowEditCustomer] = useState(false);
  const [showDeleteCustomer, setShowDeleteCustomer] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openEditCustomer = e => {
    setShowEditCustomer(true);
    // props.setShowCustomerDetails(false)
  };
  const openDeleteCustomer = e => {
    setShowDeleteCustomer(true);
    // props.setShowCustomerDetails(false)
  };
  return (
    <div className={useStyles.root}>
      {showEditCustomer && (
        <EditCustomer
          customerSelected={props.customerSelected}
          setShowEditCustomer={setShowEditCustomer}
          updateCustomer={props.updateCustomer}
        />
      )}
      {showDeleteCustomer && (
        <DeleteCustomer
          setShowDeleteCustomer={setShowDeleteCustomer}
          showDeleteCustomer={showDeleteCustomer}
          setShowCustomerDetails={props.setShowCustomerDetails}
          customerSelected={props.customerSelected}
          setCustomerSelected={props.setCustomerSelected}
        />
      )}
      <Button
        aria-label="Settings"
        onClick={handleClick}
        style={{
          backgroundColor:"transparent",
          borderRadius: 50,
          height: 64,
          width: 64,
          position: "absolute",
          top: 0,
          right: -24
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
        <StyledMenuItem onClick={openDeleteCustomer.bind(this)}>
          <DeleteIcon color="error" />
        </StyledMenuItem>
        <StyledMenuItem onClick={openEditCustomer.bind(this)}>
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
