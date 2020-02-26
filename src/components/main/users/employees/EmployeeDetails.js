import React from "react";
import {
  Button,
  Dialog,
  TextField,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import { EditEmployeeButton } from "./edit/EditEmployeeButton";
import { detailsDialog } from "../../../../styles/Styles";
import { connect } from "react-redux";

const EmployeeDetails = props => {
  const styles = detailsDialog();
  const employee = props.employees.employees[props.employeeSelected];

  const handleClose = () => {
    props.setShowEmployeeDetails(false);
  };

  return (
    <React.Fragment>
      {employee !== undefined && (
        <Dialog
          open={props.showEmployeeDetails}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
          className={styles.root}
        >
          <EditEmployeeButton
            employeeSelected={props.employeeSelected}
            setEmployeeSelected={props.setEmployeeSelected}
            setShowEmployeeDetails={props.setShowEmployeeDetails}
          />
          <DialogTitle
            id="max-width-dialog-title"
            className="align-text-center"
          >
            Employee details
          </DialogTitle>
          <DialogContent className={styles.label}>
            <TextField
              label="First name"
              name="firstname"
              defaultValue={employee.firstname}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              label="Last name"
              name="lastname"
              defaultValue={employee.lastname}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              label="Employee ID"
              name="employeeid"
              defaultValue={employee.id}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              label="Role"
              name="role"
              defaultValue={employee.role}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              label="Phone"
              name="phonenr"
              defaultValue={employee.phonenr}
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              label="Email"
              name="email"
              defaultValue={employee.email}
              InputProps={{
                readOnly: true
              }}
            />
          </DialogContent>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Dialog>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  employees: state.employees
});
export default connect(mapStateToProps)(EmployeeDetails);
