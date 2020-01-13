import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { detailsDialog } from "../../../../../styles/Styles";

export const AddCustomer = props => {
  const styles = detailsDialog();
  const [orgnr, setorgnr] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [address, setaddress] = useState("");
  const [phonenr, setphonenr] = useState("");
  const [email, setemail] = useState("");

  const customer = {
    orgnr: orgnr,
    firstname: firstname,
    lastname: lastname,
    address: address,
    phonenr: phonenr,
    email: email.toLowerCase()
  };
  const createCustomer = e => {
    props.addCustomer(customer);
    setfirstname("");
    setlastname("");
    setorgnr("");
    setaddress("");
    setphonenr("");
    setemail("");
    document.getElementsByName("firstname")[0].value = "";
    document.getElementsByName("lastname")[0].value = "";
    document.getElementsByName("orgnr")[0].value = "";
    document.getElementsByName("address")[0].value = "";
    document.getElementsByName("phonenr")[0].value = "";
    document.getElementsByName("email")[0].value = "";
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
            onChange={e => setfirstname(e.target.value)}
            required
            defaultValue={firstname}
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
            onChange={e => setlastname(e.target.value)}
            defaultValue={lastname}
            />
          <TextField
            hintText="Enter organisation number here"
            floatingLabelText="Enter organisation number"
            name="orgnr"
            fullWidth
            inputStyle={{ color: "white" }}
            floatingLabelStyle={{ color: "lightgrey" }}
            hintStyle={{ color: "grey" }}
            onChange={e => setorgnr(e.target.value)}
            defaultValue={orgnr}
            />
          <TextField
            hintText="Enter address here"
            floatingLabelText="Enter address"
            name="address"
            fullWidth
            inputStyle={{ color: "white" }}
            floatingLabelStyle={{ color: "lightgrey" }}
            hintStyle={{ color: "grey" }}
            onChange={e => setaddress(e.target.value)}
            defaultValue={address}
            />
          <TextField
            hintText="Enter phone number here"
            floatingLabelText="Enter phone number"
            name="phonenr"
            fullWidth
            inputStyle={{ color: "white" }}
            floatingLabelStyle={{ color: "lightgrey" }}
            hintStyle={{ color: "grey" }}
            onChange={e => setphonenr(e.target.value)}
            defaultValue={phonenr}
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
            onChange={e => setemail(e.target.value)}
            defaultValue={email}
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