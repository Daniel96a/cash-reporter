import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { EditEmployeeButton } from "./edit/EditEmployeeButton";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BLUE, WHITE } from "../../../../colorTheme/colors";

export const EmployeeDetails = props => {
  const classes = useStyles();
  const employee = props.employees[props.employeeSelected];

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
      <EditEmployeeButton
        employees={props.employees}
        employeeSelected={props.employeeSelected}
        updateEmployee={props.updateEmployee}
        setEmployeeSelected={props.setEmployeeSelected}
        deleteEmployee={props.deleteEmployee}
        setShowEmployeeDetails={props.setShowEmployeeDetails}
      />
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Employee details
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="First name"
          name="firstname"
          variant="filled"
          defaultValue={employee.firstname}
          readOnly
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          defaultValue={employee.lastname}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Employee ID"
          name="employeeid"
          fullWidth
          defaultValue={employee.id}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Role"
          name="role"
          fullWidth
          defaultValue={employee.role}
          readOnly
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          defaultValue={employee.phonenr}
          readOnly
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          defaultValue={employee.email}
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
    },
    "& .MuiDialogTitle-root": {
      backgroundColor: BLUE,
      color: WHITE
    }
  }
}));
