import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { IconButton } from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";
import { EditorFormatAlignCenter } from "material-ui/svg-icons";
import { GREY } from "../../colorTheme/colors";

export const MainMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    if (!open) {
      setOpen(true);
    }else{
      setOpen(false)
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const setMenuCase = e => {
    setAnchorEl(null);
    setOpen(false);
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
        onClose={handleClose}
        open={open}
      >
        <StyledMenuItem onClick={setMenuCase.bind(this, "Dashboard")}>
          <div style={{ margin: "auto" }}>Dashboard</div>
        </StyledMenuItem>
        <StyledMenuItem onClick={setMenuCase.bind(this, "Users")}>
          <div style={{ margin: "auto" }}>Users</div>
        </StyledMenuItem>
        <StyledMenuItem onClick={setMenuCase.bind(this, "Reports")}>
          <div style={{ margin: "auto" }}>Reports</div>
        </StyledMenuItem>
        <StyledMenuItem onClick={props.doLogout.bind(this)}>
          <div style={{ margin: "auto" }}>Logout</div>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "transparent",
    backdropFilter: "blur(8px)",
    border: `1px solid ${GREY}`,
    position: "absolute",
    width: "100%",
    marginTop: 8,
    borderRadius: 10,
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
    "& .MuiPaper-root": {
      backgroundColor: "transparent"
    },
    backgroundColor: "rgba(25, 35, 46, .9 )",
    color: "white",
    float: "right",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgb(0, 188, 212)",
      color: "black",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        backgroundColor: theme.palette.primary.white,
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const menuIconColor = withStyles({
  " & .MuiSvgIcon-root": {
    fill: "white"
  }
});
const menuPosition = {
  textAlign: EditorFormatAlignCenter,
  margin: "auto",
  position: "absolute",
  right: "0"
};
