import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { EditEmployeeButton } from "./edit/EditEmployeeButton";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog } from "../../../../styles/Styles";

export const EmployeeDetails = props => {
  const styles = detailsDialog();
  const employee = props.employees[props.employeeSelected];

  const handleClose = () => {
    props.setShowEmployeeDetails(false);
  };

  return (
    <Dialog
      open={props.showEmployeeDetails}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
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
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={employee.firstname}
          readOnly
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={employee.lastname}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Employee ID"
          name="employeeid"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={employee.id}
          variant="filled"
          readOnly
        />
        <TextField
          floatingLabelText="Role"
          name="role"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={employee.role}
          readOnly
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
          defaultValue={employee.phonenr}
          readOnly
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "lightgrey" }}
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
