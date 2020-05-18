import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";

export const AddEmployeeButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={(e) => props.setShowAddEmployeeForm(true)}
        className={classes.root}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& button": {
      position: "fixed",
      zIndex: 1,
      bottom: 10,
      right: 10,
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
