import React,{useEffect} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BLUE, WHITE } from "../../../../../colorTheme/colors";

export const EditCustomer = props => {
  const classes = useStyles();

  const customer = {
    firstname: props.customerSelected.firstname,
    lastname: props.customerSelected.lastname,
    id: props.customerSelected.id,
    orgnr: props.customerSelected.orgnr,
    address: props.customerSelected.address,
    phonenr: props.customerSelected.phonenr,
    email: props.customerSelected.email.toLowerCase()
  };
  useEffect(() => {
    console.log(props.customerSelected)
    return () => {
      console.log(props.customerSelected)

    };
  }, [props])

  const updateCustomer = e => {
    document.getElementsByName("address")[0].value = customer.address;
    document.getElementsByName("phonenr")[0].value = customer.phonenr;
    document.getElementsByName("email")[0].value = customer.email;
    props.setShowEditCustomer(false);
    props.updateCustomer(customer);
  };

  const handleClose = () => {
    props.setShowEditCustomer(false);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={classes.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Edit Customer
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="First name"
          name="firstname"
          variant="filled"
          defaultValue={props.customerSelected.firstname}
          disabled
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          defaultValue={props.customerSelected.lastname}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Customer ID"
          name="customerid"
          fullWidth
          defaultValue={props.customerSelected.id}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          defaultValue={props.customerSelected.phonenr}
          onChange={e => (customer.phonenr = e.target.value)}
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          defaultValue={props.customerSelected.email}
          onChange={e => (customer.email = e.target.value)}
        />
        <TextField
          floatingLabelText="Address"
          name="address"
          fullWidth
          defaultValue={props.customerSelected.address}
          onChange={e => (customer.address = e.target.value)}
        />
      </DialogContent>
      <Button onClick={updateCustomer.bind(this)} color="primary">
        Update
      </Button>
      <Button onClick={handleClose} color="secondary">
        Abort
      </Button>
    </Dialog>
  );
};
const halfWidth = {
  width: "49.5%",
  marginLeft: "0.5%"
};

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiDialog-paperWidthSm": {
      overflowY: "visible"
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      overflowY: "visible"
    },
    "& .MuiDialog-paperScrollPaper": {
      maxHeight: "100%"
    },
    "& .MuiDialogContent-root": {
      overflowY: "visible"
    },
    "& .MuiButtonBase-root": {
      border: "solid #80808085",
      borderWidth: "0.5px",
      margin: "0 20px 20px 20px"
    },
    "& .MuiDialogTitle-root": {
      backgroundColor: BLUE,
      color: WHITE
    }
  }
}));
