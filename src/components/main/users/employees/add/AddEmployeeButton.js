import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";

export const AddEmployeeButton = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={e => props.setShowAddEmployeeForm(true)}
        style={{
          float: "right",
          position: "fixed",
          zIndex: 1201,
          top: "auto",
          bottom: 10,
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
