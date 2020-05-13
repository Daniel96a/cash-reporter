import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";

export const AddReportButton = ({ setShowAddReportsForm }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={(e) => setShowAddReportsForm(true)}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      position: "absolute",
      zIndex: 100,
      bottom: 10,
      right: 10
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
