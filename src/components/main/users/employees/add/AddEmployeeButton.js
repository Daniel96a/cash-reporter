import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";

const AddEmployeeButton = ({ toggleShowAddEmployee }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => toggleShowAddEmployee(true)}
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
      bottom: 66,
      right: 10,
      zIndex: 1,
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
export default AddEmployeeButton;
