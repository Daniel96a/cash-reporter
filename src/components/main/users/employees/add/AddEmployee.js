import React, { useState } from "react";
import {
  TextField,
  Dialog,
  Button,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import { detailsDialog } from "../../../../../styles/Styles";
import { addEmployee } from "../../../../../redux/actions/employees";

import { connect } from "react-redux";

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
      <DialogContent className={styles.label}>
        <TextField
          label="Enter first name"
          name="firstname"
          onChange={e => setfirstname(e.target.value)}
          defaultValue={firstname}
        />
        <TextField
          label="Enter last name"
          name="lastname"
          required={true}
          onChange={e => setlastname(e.target.value)}
          defaultValue={lastname}
        />
        <TextField
          label="Enter role"
          name="role"
          onChange={e => setRole(e.target.value)}
          defaultValue={role}
        />
        <TextField
          label="Enter address"
          name="address"
          onChange={e => setaddress(e.target.value)}
          defaultValue={address}
        />
        <TextField
          label="Enter phone number"
          name="phonenr"
          onChange={e => setphonenr(e.target.value)}
          defaultValue={phonenr}
        />
        <TextField
          label="Enter email"
          name="email"
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

const mapStateToProps = state => ({
  customers: state.customers
});
export default connect(mapStateToProps, {
  addEmployee
})(AddEmployee);
