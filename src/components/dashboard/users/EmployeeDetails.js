import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export const EmployeeDetails = props => {
  const classes = useStyles();

  const handleClose = () => {
    props.setShowEmployeeDetails(false);
  };

  return (
    <Dialog
      open={props.showEmployeeDetails}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={classes.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
      Employee details
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="First name"
          name="firstname"
          variant="filled"
          defaultValue={props.employeeSelected.firstname}
          readOnly
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          defaultValue={props.employeeSelected.lastname}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Employee ID"
          name="employeeid"
          fullWidth
          defaultValue={props.employeeSelected.id}
          variant="filled"
          readOnly
        />
         <TextField
          floatingLabelText="Role"
          name="role"
          fullWidth
          defaultValue={props.employeeSelected.role}
          readOnly
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          defaultValue={props.employeeSelected.phonenr}
          readOnly
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          defaultValue={props.employeeSelected.email}
          readOnly
        />
        <TextField
          floatingLabelText="Address"
          name="address"
          fullWidth
          defaultValue={props.employeeSelected.address}
          readOnly
        />
      </DialogContent>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </Dialog>
  );
};
const halfWidth = {
  width: "49.5%",
  marginLeft: "0.5%"
};

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiDialog-paperWidthSm": {
      overflowY: "visible"
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      overflowY: "visible"
    },
    "& .MuiDialog-paperScrollPaper": {
      maxHeight: "100%"
    },
    "& .MuiDialogContent-root": {
      overflowY: "visible"
    },
    "& .MuiButtonBase-root": {
      border: "solid #80808085",
      borderWidth: "0.5px",
      margin: "0 20px 20px 20px"
    }
  }
}));
