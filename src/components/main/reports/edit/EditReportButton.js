import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import SettingsIcon from "@material-ui/icons/Settings";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles, Button } from "@material-ui/core";
import EditReport from "./EditReport";
import DeleteReport from "../delete/DeleteReport";
import DeleteIcon from "@material-ui/icons/Delete";

export const EditReportButton = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showEditReport, setShowEditReport] = useState(false);
  const [showDeleteReport, setShowDeleteReport] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openEditReport = e => {
    setShowEditReport(true);
  };
  const openDeleteReport = e => {
    setShowDeleteReport(true);
  };
  return (
    <div className={useStyles.root}>
      {showEditReport && (
        <EditReport
          reportSelected={props.reportSelected}
          setShowEditReport={setShowEditReport}
        />
      )}
      {showDeleteReport && (
        <DeleteReport
          setShowDeleteReport={setShowDeleteReport}
          showDeleteReport={showDeleteReport}
          setShowReportDetails={props.setShowReportDetails}
          reportSelected={props.reportSelected}
          setReportSelected={props.setReportSelected}
        />
      )}
      <Button
        aria-label="Settings"
        onClick={handleClick}
        color="primary"
        style={{
          border: "none",
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
        <StyledMenuItem onClick={openDeleteReport.bind(this)}>
          <DeleteIcon color={"secondary"} />
        </StyledMenuItem>
        <StyledMenuItem onClick={openEditReport.bind(this)}>
          <EditIcon color={"primary"} />
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
