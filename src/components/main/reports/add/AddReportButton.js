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
      position: "fixed",
      right: 10,
      bottom: 156,
      top: 'calc(100vh - 190px)',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
