import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";
import { deletePerson } from "../../../../../redux/actions/person";
import { confirmDialog } from "../../../../../styles/Styles";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteCustomer = props => {
  const [open, setOpen] = useState(props.showDeleteCustomer);
  const dialogStyle = confirmDialog();
  const personid = props.customers.customers[props.customerSelected].personid;
  const handleClose = () => {
    setOpen(false);
    props.setShowDeleteCustomer(false);
  };

  const handleDelete = () => {
    props.deletePerson(personid);
    setOpen(false);
    props.setShowDeleteCustomer(false);
    props.setCustomerSelected(null);
  };

  return (
    <Dialog
      className={dialogStyle.root}
      hideBackdrop
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
        <Button onClick={handleClose} >
          Cancel
        </Button>
        <Button onClick={handleDelete} style={{ color: "red" }}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  customers: state.customers
});
export default connect(mapStateToProps, {
  deletePerson
})(DeleteCustomer);
