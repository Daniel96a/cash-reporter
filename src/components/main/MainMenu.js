import React, { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import { BLUE } from "../../colorTheme/colors";
import { connect } from "react-redux";
import { doLogout } from "../../redux/actions/auth";
import { changeView } from "../../redux/actions/states";
import { IconButton, withStyles, Menu, MenuItem } from "@material-ui/core";

const MainMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const setSelectedView = e => {
    props.changeView(e.currentTarget.id);
    setAnchorEl(null);
    setOpen(false);
    e.preventDefault();
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div style={menuPosition}>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
      >
        <StyledMenuItem id="dashboard" onClick={setSelectedView.bind(this)}>
          <div style={{ margin: "auto" }} id="dashboard">
            Dashboard
          </div>
        </StyledMenuItem>
        <StyledMenuItem id="users" onClick={setSelectedView.bind(this)}>
          <div style={{ margin: "auto" }} id="users">
            Users
          </div>
        </StyledMenuItem>
        <StyledMenuItem id="reports" onClick={setSelectedView.bind(this)}>
          <div style={{ margin: "auto" }} id="reports">
            Reports
          </div>
        </StyledMenuItem>
        <StyledMenuItem onClick={props.doLogout.bind(this)}>
          <div style={{ margin: "auto" }} id="Logout">
            Logout
          </div>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

const StyledMenu = withStyles(theme =>({
  paper: {
    backgroundColor: theme.palette.primary.transparent,
    backdropFilter: "blur(8px)",
    border: `1px solid ${"rgba(25, 35, 46, .5 )"}`,
    position: "absolute",
    maxWidth: "100%",
    left: "0 !important",
    width: "100%",
    marginTop: 0,
    borderRadius: 10,
    "& .MuiList-padding": {
      padding: 0
    },
    "& div.MuiPaper-root": {
      left: 1
    }
  }
}))(props => (
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
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
      backdropFilter: "blur(15px)"
    },
    backgroundColor: "transparent",

    float: "right",
    width: "100%",
    "&:hover": {
      backgroundColor: BLUE,
      color: "white",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        backgroundColor: theme.palette.primary.white,
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const menuPosition = {
  textAlign: "center",
  margin: "auto",
  position: "absolute",
  right: "0"
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {
  doLogout,
  changeView
})(MainMenu);
