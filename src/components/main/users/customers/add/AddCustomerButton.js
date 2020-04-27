import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";

export const AddCustomerButton = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={e => props.setShowAddCustomerForm(true)}

      >
        <AddIcon />
      </Fab>
    </div>
  );
};
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      position: "fixed",
      zIndex: 1000,
      right: 10,
      bottom: 0,
      top: 'calc(100vh - 136px)'
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
