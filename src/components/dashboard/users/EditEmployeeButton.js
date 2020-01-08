import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core";


export const EditEmployeeButton = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={useStyles.root}>
      <Fab
        color="secondary"
        aria-label="editAndDelete"
        onClick={handleClick}
        style={{
          float: "right",
          position: "absolute",
          top: -30,
          right: -45
        }}
      >
        <DeleteIcon />
        <EditIcon />
      </Fab>
      <StyledMenu
         id="customized-menu"
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}
         onClick={handleClose}
      >
        <StyledMenuItem>
          <DeleteIcon />
        </StyledMenuItem>
        <StyledMenuItem>
          <EditIcon />
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
