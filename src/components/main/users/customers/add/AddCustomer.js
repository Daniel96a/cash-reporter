import React from "react";
import {
  DialogTitle,
  DialogContent,
  TextField,
  Dialog,
  Button
} from "@material-ui/core";
import { detailsDialog } from "../../../../../styles/Styles";
import { addCustomer } from "../../../../../redux/actions/customers";
import { connect } from "react-redux";
const AddCustomer = props => {
  const styles = detailsDialog();
  const customer = {
    orgnr: "",
    firstname: "",
    lastname: "",
    address: "",
    phonenr: "",
    email: "".toLowerCase()
  };

  const createCustomer = e => {
    props.addCustomer(customer);

    props.setShowAddCustomerForm(false);
    e.preventDefault();
  };

  const handleClose = () => {
    props.setShowAddCustomerForm(false);
  };

  return (
    <Dialog
      open={props.showAddCustomerForm}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={styles.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Add Customer
      </DialogTitle>
      <DialogContent className={styles.label}>
        <TextField
          label="Enter first name"
          name="firstname"
          onChange={e => (customer.firstname = e.target.value)}
          required
        />
        <TextField
          label="Enter last name"
          name="lastname"
          required={true}
          onChange={e => (customer.lastname = e.target.value)}
        />
        <TextField
          label="Enter organisation number"
          name="orgnr"
          onChange={e => (customer.orgnr = e.target.value)}
        />
        <TextField
          label="Enter address"
          name="address"
          onChange={e => (customer.address = e.target.value)}
        />
        <TextField
          label="Enter phone number"
          name="phonenr"
          onChange={e => (customer.phonenr = e.target.value)}
        />
        <br />
        <TextField
          label="Enter email"
          name="email"
          onChange={e => (customer.email = e.target.value)}
        />
      </DialogContent>
      <Button color="primary" onClick={createCustomer.bind(this)}>
        Add Customer
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
  addCustomer
})(AddCustomer);
