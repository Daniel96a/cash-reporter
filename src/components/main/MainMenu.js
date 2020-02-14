import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { IconButton } from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";
import { EditorFormatAlignCenter } from "material-ui/svg-icons";
import { BLUE } from "../../colorTheme/colors";
import { connect } from "react-redux";
import { doLogout } from "../../redux/actions/auth";
import { changeView } from "../../redux/actions/states";

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
        <MenuIcon style={menuIconColor} />
      </IconButton>
      <StyledMenu

        id="customized-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
      >
        <StyledMenuItem id="Dashboard" onClick={setSelectedView.bind(this)}>
          <div style={{ margin: "auto" }} id="Dashboard">
            Dashboard
          </div>
        </StyledMenuItem>
        <StyledMenuItem id="Users" onClick={setSelectedView.bind(this)}>
          <div style={{ margin: "auto" }} id="Users">
            Users
          </div>
        </StyledMenuItem>
        <StyledMenuItem id="Reports" onClick={setSelectedView.bind(this)}>
          <div style={{ margin: "auto" }} id="Reports">
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

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "transparent",
    backdropFilter: "blur(8px)",
    border: `1px solid ${"rgba(25, 35, 46, .5 )"}`,
    position: "absolute",
    maxWidth: "100%",
    left: "0 !important",
    width: "100%",
    marginTop: 8,
    borderRadius: 10,
    "& .MuiList-padding": {
      padding: 0
    },
    "& div.MuiPaper-root": {
      left: 0
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
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
      backdropFilter: "blur(15px)"
    },
    backgroundColor: "transparent",
    color: "white",
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

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {
  doLogout,
  changeView
})(MainMenu);
