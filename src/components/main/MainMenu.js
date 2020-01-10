import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { IconButton } from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";
import { WHITE } from "../../colorTheme/colors";

export const MainMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const setMenuCase = e => {
    setAnchorEl(null);

    props.setshowCase(e);
  };

  return (
    <div style={menuPosition}>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon style={menuIconColor} />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={setMenuCase.bind(this, "Dashboard")}>
          <div className="align-text-center">Dashboard</div>
        </StyledMenuItem>
        <StyledMenuItem onClick={setMenuCase.bind(this, "Users")}>
          <div className="align-text-center">Users</div>
        </StyledMenuItem>
        <StyledMenuItem onClick={setMenuCase.bind(this, "Reports")}>
          <div className="align-text-center">Reports</div>
        </StyledMenuItem>
        <StyledMenuItem onClick={props.doLogout.bind(this)}>
          <div className="align-text-center">Logout</div>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    position: "absolute",
    width: "100%",
    marginTop: 8,
    borderRadius: "0",
    "& .MuiList-padding": {
      padding: 0
    }
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      marginLeft: 0,
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      marginLeft: 0,
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    float: "right",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgb(0, 188, 212)",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        backgroundColor: theme.palette.primary.white,
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const menuIconColor = withStyles({
  " & .MuiSvgIcon-root": {
    fill: WHITE
  }
});
const menuPosition = {
  margin: "auto",
  position: "relative",
  right: "-15px"
};
