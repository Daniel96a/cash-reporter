import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog } from "../../../../../styles/Styles";

export const AddEmployee = props => {
  const styles = detailsDialog();
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
      className={styles.root}
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
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => setfirstname(e.target.value)}
          defaultValue={firstname}
        />
        <TextField
          style={halfWidth}
          hintText="Enter last name here"
          floatingLabelText="Enter last name"
          name="lastname"
          required={true}
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          onChange={e => setlastname(e.target.value)}
          defaultValue={lastname}
        />
        <TextField
          hintText="Enter role"
          floatingLabelText="Enter role"
          name="role"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          onChange={e => setRole(e.target.value)}
          defaultValue={role}
        />
        <TextField
          hintText="Enter address"
          floatingLabelText="Enter address"
          name="address"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          onChange={e => setaddress(e.target.value)}
          defaultValue={address}
        />
        <TextField
          hintText="Enter phone number here"
          floatingLabelText="Enter phone number"
          name="phonenr"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          onChange={e => setphonenr(e.target.value)}
          defaultValue={phonenr}
        />
        <br />
        <TextField
          hintText="Enter email here"
          floatingLabelText="Enter email"
          name="email"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
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
