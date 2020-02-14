import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";
import { deleteEmployee } from "../../../../../redux/actions/employees";
import { confirmDialog } from "../../../../../styles/Styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteEmployee = props => {
  const [open, setOpen] = useState(props.showDeleteEmployee);
  const dialogStyle = confirmDialog();

  const handleClose = () => {
    setOpen(false);
    props.setShowDeleteEmployee(false);
  };

  const handleDelete = () => {
    props.deleteEmployee(props.employees.employees[props.employeeSelected]);
    setOpen(false);
    props.setShowDeleteEmployee(false);
    props.setEmployeeSelected(null);
  };

  return (
    <Dialog
      className={dialogStyle.root}
      open={open}
      hideBackdrop
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"Are you sure you want to delete this this employee?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const mapStateToProps = state => ({
  employees: state.employees
});
export default connect(mapStateToProps, {
  deleteEmployee
})(DeleteEmployee);
