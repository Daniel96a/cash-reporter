import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { IconButton } from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";

const StyledMenu = withStyles({
  paper: {
    margin: "auto",
    border: "1px solid #d3d4d5",
    width: "100%",
    marginTop: "12px"
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
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export const MenuList = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  return (
    <div className="align-text-center">
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
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>Employee
        </StyledMenuItem>
        <StyledMenuItem>Customers</StyledMenuItem>
        <StyledMenuItem onClick={logout.bind(this)}>Logout</StyledMenuItem>
      </StyledMenu>
    </div>
  );
};
