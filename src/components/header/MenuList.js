import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { IconButton } from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";
import { WHITE } from "../../colorTheme/colors";

const StyledMenu = withStyles({
  paper: {
    margin: "auto",
    border: "1px solid #d3d4d5",
    marginTop: "12px",
    marginLeft: "10px",
    maxWidth: "490px",
    borderRadius: "10px",
    "& .MuiList-padding": {
      padding: "0"
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
    float: "right",
    minWidth: "500px",
    "&:hover": {
      backgroundColor: "rgb(0, 188, 212)",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        backgroundColor: theme.palette.primary.white,
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export const MenuList = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = e => {
    props.doLogout();
    e.preventDefault();
  };
  const setMenuCase = e => {
    setAnchorEl(null);

    props.setshowCase(e);
  };

  return (
    <div className="menuList">
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon style={menuIconColor}/>
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={setMenuCase.bind(this, "dashboard")}>
          <div className="align-text-center">Dashboard</div>
        </StyledMenuItem>
        <StyledMenuItem onClick={setMenuCase.bind(this, "employees")}>
          <div className="align-text-center">Employees</div>
        </StyledMenuItem>
        <StyledMenuItem onClick={setMenuCase.bind(this, "customers")}>
          {" "}
          <div className="align-text-center">Customers</div>
        </StyledMenuItem>
        <StyledMenuItem onClick={logout.bind(this)}>
          {" "}
          <div className="align-text-center">Logout</div>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};
const menuIconColor = withStyles({
    " & .MuiSvgIcon-root": {
      fill: WHITE
    }
  
});
