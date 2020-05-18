import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";

export const AddCustomerButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={(e) => props.setShowAddCustomerForm(true)}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& button": {
      position: "absolute",
      bottom: 10,
      right: 10,
      zIndex: 9999,
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
