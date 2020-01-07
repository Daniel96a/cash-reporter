import React, { useState } from "react";

import { MuiThemeProvider } from "material-ui/styles";
import { TextField, RaisedButton } from "material-ui";

const CreateCustomerForm = props => {
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

    e.preventDefault();
  };

  return (
    <MuiThemeProvider>
      <div className="align-text-center form-width">
        <TextField
          style={halfWidth}
          hintText="Enter first name here"
          floatingLabelText="Enter first name"
          name="firstname"          
          onChange={e => setfirstname(e.target.value)}
          defaultValue={firstname}
        />
        <TextField
          style={halfWidth}
          hintText="Enter last name here"
          floatingLabelText="Enter last name"
          name="lastname"
          required={true}
          onChange={e => setlastname(e.target.value)}
          defaultValue={lastname}
        />
        <TextField
          hintText="Enter organisation number here"
          floatingLabelText="Enter organisation number"
          name="orgnr"
          fullWidth
          onChange={e => setorgnr(e.target.value)}
          defaultValue={orgnr}
        />
        <TextField
          hintText="Enter address here"
          floatingLabelText="Enter address"
          name="address"
          fullWidth
          onChange={e => setaddress(e.target.value)}
          defaultValue={address}
        />
        <TextField
          hintText="Enter phone number here"
          floatingLabelText="Enter phone number"
          name="phonenr"
          fullWidth
          onChange={e => setphonenr(e.target.value)}
          defaultValue={phonenr}
        />
        <br />
        <TextField
          hintText="Enter email here"
          floatingLabelText="Enter email"
          name="email"
          fullWidth
          onChange={e => setemail(e.target.value)}
          defaultValue={email}
        />
        <br />

        <RaisedButton label="Create user" style={buttonStyle} onClick={createCustomer.bind(this)} />
      </div>
    </MuiThemeProvider>
  );
};

const halfWidth = {
  width: "49%",
  marginLeft: "1%"
};
const buttonStyle={
  margin: 20,
  backgroundColor: "#13a7ba"
}

export default CreateCustomerForm;
