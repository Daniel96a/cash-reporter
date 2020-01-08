import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export const AddEmployee = props => {
  const classes = useStyles();
  const [role, setRole] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [address, setaddress] = useState("");
  const [phonenr, setphonenr] = useState("");
  const [email, setemail] = useState("");

  const employee = {
    role: role,
    firstname: firstname,
    lastname: lastname,
    address: address,
    phonenr: phonenr,
    email: email.toLowerCase()
  };
  const createEmployee = e => {
    props.addEmployee(employee);
    setfirstname("");
    setlastname("");
    setRole("");
    setaddress("");
    setphonenr("");
    setemail("");
    document.getElementsByName("firstname")[0].value = "";
    document.getElementsByName("lastname")[0].value = "";
    document.getElementsByName("role")[0].value = "";
    document.getElementsByName("address")[0].value = "";
    document.getElementsByName("phonenr")[0].value = "";
    document.getElementsByName("email")[0].value = "";
    props.setShowAddEmployeeForm(false);
    e.preventDefault();
  };

  const handleClose = () => {
    props.setShowAddEmployeeForm(false);
  };

  return (
      <Dialog
        open={props.showAddEmployeeForm}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        className={classes.root}

      >
        <DialogTitle id="max-width-dialog-title" className="align-text-center">
          Add Employee
        </DialogTitle>
        <DialogContent>
          <TextField
            style={halfWidth}
            hintText="Enter first name here"
            floatingLabelText="Enter first name"
            name="firstname"
            onChange={e => setfirstname(e.target.value)}
            defaultValue={firstname}
          />
          <TextField
            style={halfWidth}
            hintText="Enter last name here"
            floatingLabelText="Enter last name"
            name="lastname"
            required={true}
            onChange={e => setlastname(e.target.value)}
            defaultValue={lastname}
          />
          <TextField
            hintText="Enter role here"
            floatingLabelText="Enter role"
            name="role"
            fullWidth
            onChange={e => setRole(e.target.value)}
            defaultValue={role}
          />
          <TextField
            hintText="Enter address here"
            floatingLabelText="Enter address"
            name="address"
            fullWidth
            onChange={e => setaddress(e.target.value)}
            defaultValue={address}
          />
          <TextField
            hintText="Enter phone number here"
            floatingLabelText="Enter phone number"
            name="phonenr"
            fullWidth
            onChange={e => setphonenr(e.target.value)}
            defaultValue={phonenr}
          />
          <br />
          <TextField
            hintText="Enter email here"
            floatingLabelText="Enter email"
            name="email"
            fullWidth
            onChange={e => setemail(e.target.value)}
            defaultValue={email}
          />
        </DialogContent>
        <Button color="primary" onClick={createEmployee.bind(this)}>
          Add Employee
        </Button>
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
