import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BLUE, WHITE } from "../../../../../colorTheme/colors";

export const EditEmployee = props => {
  const classes = useStyles();
  const employee = props.employees[props.employeeSelected];

  const employeeData = {
    firstname: employee.firstname,
    lastname: employee.lastname,
    id: employee.id,
    orgnr: employee.orgnr,
    role: employee.role,
    phonenr: employee.phonenr,
    email: employee.email.toLowerCase()
  };
  const updateEmployee = e => {
    document.getElementsByName("role")[0].value = employeeData.role;
    document.getElementsByName("phonenr")[0].value = employeeData.phonenr;
    document.getElementsByName("email")[0].value = employeeData.email;
    props.setShowEditEmployee(false);
    props.updateEmployee(employeeData);
  };

  const handleClose = () => {
    props.setShowEditEmployee(false);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={classes.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Edit Employee
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="First name"
          name="firstname"
          variant="filled"
          defaultValue={employee.firstname}
          disabled
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          defaultValue={employee.lastname}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Employee ID"
          name="employeeid"
          fullWidth
          defaultValue={employee.id}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Role"
          name="role"
          fullWidth
          defaultValue={employee.role}
          onChange={e => (employeeData.role = e.target.value)}
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          defaultValue={employee.phonenr}
          onChange={e => (employeeData.phonenr = e.target.value)}
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          defaultValue={employee.email}
          onChange={e => (employeeData.email = e.target.value)}
        />
      </DialogContent>
      <Button onClick={updateEmployee.bind(this)} color="primary">
        Update
      </Button>
      <Button onClick={handleClose} color="secondary">
        Abort
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
