import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";

export const AddReportButton = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={e => props.setShowAddReportsForm(true)}
        style={{
          float: "right",
          position: "fixed",
          zIndex: 2000,
          top: "auto",
          bottom: 68,
          right: 10
        }}
      >
        <AddIcon />
      </Fab>
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
