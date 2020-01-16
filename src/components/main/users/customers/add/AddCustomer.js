import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog } from "../../../../../styles/Styles";
import { addCustomer } from "../../../../../actions/customers";
import { connect } from "react-redux";
const AddCustomer = props => {
  const styles=detailsDialog();

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
      <DialogContent>
        <TextField
          style={halfWidth}
          hintText="Enter first name"
          floatingLabelText="Enter first name"
          name="firstname"
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          onChange={e => (customer.firstname = e.target.value)}
          required
          defaultValue={""}
        />
        <TextField
          style={halfWidth}
          hintText="Enter last name"
          floatingLabelText="Enter last name"
          name="lastname"
          required={true}
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          onChange={e => (customer.lastname = e.target.value)}
          defaultValue={""}
        />
        <TextField
          hintText="Enter organisation number here"
          floatingLabelText="Enter organisation number"
          name="orgnr"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          onChange={e => (customer.orgnr = e.target.value)}
          defaultValue={""}
        />
        <TextField
          hintText="Enter address here"
          floatingLabelText="Enter address"
          name="address"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          onChange={e => (customer.address = e.target.value)}
          defaultValue={""}
        />
        <TextField
          hintText="Enter phone number here"
          floatingLabelText="Enter phone number"
          name="phonenr"
          fullWidth
          inputStyle={{ color: "white" }}
          floatingLabelStyle={{ color: "lightgrey" }}
          hintStyle={{ color: "grey" }}
          onChange={e => (customer.phonenr = e.target.value)}
          defaultValue={""}
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
          onChange={e => (customer.email = e.target.value)}
          defaultValue={""}
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
const halfWidth = {
  width: "49.5%",
  marginLeft: "0.5%"
};
const mapStateToProps = state => ({
  customers: state.customers
});
export default connect(mapStateToProps, {
  addCustomer
})(AddCustomer);
