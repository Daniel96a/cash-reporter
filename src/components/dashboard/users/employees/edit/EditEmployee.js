import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BLUE, WHITE } from "../../../../../colorTheme/colors";

export const EditEmployee = props => {
  const classes = useStyles();
  const [role, setRole] = useState(props.employeeSelected.role);
  const [phonenr, setphonenr] = useState(props.employeeSelected.phonenr);
  const [email, setemail] = useState(props.employeeSelected.email);

  const employee = {
    firstname: props.employeeSelected.firstname,
    lastname: props.employeeSelected.lastname,
    id: props.employeeSelected.id,
    orgnr: props.employeeSelected.orgnr,
    role: role,
    phonenr: phonenr,
    email: email.toLowerCase()
  };
  const updateEmployee = e => {
    props.updateEmployee(employee);
    setRole("");
    setphonenr("");
    setemail("");
    document.getElementsByName("phonenr")[0].value = employee.phonenr;
    document.getElementsByName("email")[0].value = employee.email;
    props.setShowEditEmployee(false);
    e.preventDefault();
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
          defaultValue={props.employeeSelected.firstname}
          disabled
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          defaultValue={props.employeeSelected.lastname}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Employee ID"
          name="employeeid"
          fullWidth
          defaultValue={props.employeeSelected.id}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Role"
          name="role"
          fullWidth
          defaultValue={props.employeeSelected.role}
          onChange={e => setRole(e.target.value)}
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          defaultValue={props.employeeSelected.phonenr}
          onChange={e => setphonenr(e.target.value)}
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          defaultValue={props.employeeSelected.email}
          onChange={e => setemail(e.target.value)}
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
