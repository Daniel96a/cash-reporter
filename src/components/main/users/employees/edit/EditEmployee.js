import React from "react";
import {
  TextField,
  Dialog,
  Button,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import { detailsDialog } from "../../../../../styles/Styles";
import { connect } from "react-redux";
import { updateEmployee } from "../../../../../redux/actions/employees";

export const EditEmployee = props => {
  const styles = detailsDialog();
  const employee = props.employees.employees[props.employeeSelected];

  const employeeData = {
    firstname: employee.firstname,
    lastname: employee.lastname,
    id: employee.id,
    role: employee.role,
    phonenr: employee.phonenr,
    email: employee.email.toLowerCase()
  };
  const updateEmployee = e => {
    document.getElementsByName("firstname")[0].value = employeeData.firstname;
    document.getElementsByName("lastname")[0].value = employeeData.lastname;
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
      <DialogContent className={styles.label}>
        <TextField
          label="First name"
          name="firstname"
          defaultValue={employee.firstname}
          onChange={e => (employeeData.firstname = e.target.value)}
        />
        <TextField
          label="Last name"
          name="lastname"
          defaultValue={employee.lastname}
          onChange={e => (employeeData.lastname = e.target.value)}
        />
        <TextField
          label="Employee ID"
          name="employeeid"
          defaultValue={employee.id}
          disabled
        />
        <TextField
          label="Role"
          name="role"
          defaultValue={employee.role}
          onChange={e => (employeeData.role = e.target.value)}
        />
        <TextField
          label="Phone"
          name="phonenr"
          defaultValue={employee.phonenr}
          onChange={e => (employeeData.phonenr = e.target.value)}
        />
        <TextField
          label="Email"
          name="email"
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

const mapStateToProps = state => ({
  employees: state.employees
});
export default connect(mapStateToProps, {
  updateEmployee
})(EditEmployee);
