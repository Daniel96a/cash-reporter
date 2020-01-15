import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";
import { deleteCustomer } from "../../../../../actions/customers";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteCustomer = (props) => {
  const [open, setOpen] = useState(props.showDeleteCustomer);

  const handleClose = () => {
    setOpen(false);
    props.setShowDeleteCustomer(false);
  };

  const handleDelete = () => {
    props.deleteCustomer(props.customers.customers[props.customerSelected]);
    setOpen(false);
    props.setShowDeleteCustomer(false);
    props.setCustomerSelected(null);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Are you sure you want to delete this this customer?"}
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
    </div>
  );
};

const mapStateToProps = state => ({
  customers: state.customers
});
export default connect(mapStateToProps, {
  deleteCustomer
})(DeleteCustomer);
