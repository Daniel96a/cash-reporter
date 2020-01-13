import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog } from "../../../../../styles/Styles";

export const EditEmployee = props => {
  const styles = detailsDialog();
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
      className={styles.root}
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
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={employee.firstname}
          disabled
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={employee.lastname}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Employee ID"
          name="employeeid"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={employee.id}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Role"
          name="role"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={employee.role}
          onChange={e => (employeeData.role = e.target.value)}
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          defaultValue={employee.phonenr}
          onChange={e => (employeeData.phonenr = e.target.value)}
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
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
