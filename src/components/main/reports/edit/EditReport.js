import React,{useEffect} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "material-ui";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BLUE, WHITE } from "../../../../colorTheme/colors";

export const EditReport = props => {
  const classes = useStyles();

  const report = {
    firstname: props.reportSelected.firstname,
    lastname: props.reportSelected.lastname,
    id: props.reportSelected.id,
    orgnr: props.reportSelected.orgnr,
    address: props.reportSelected.address,
    phonenr: props.reportSelected.phonenr,
    email: props.reportSelected.email.toLowerCase()
  };
  useEffect(() => {
    console.log(props.reportSelected)
    return () => {
      console.log(props.reportSelected)

    };
  }, [props])

  const updateReport = e => {
    document.getElementsByName("address")[0].value = report.address;
    document.getElementsByName("phonenr")[0].value = report.phonenr;
    document.getElementsByName("email")[0].value = report.email;
    props.setShowEditReport(false);
    props.updateReport(report);
  };

  const handleClose = () => {
    props.setShowEditReport(false);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
      className={classes.root}
    >
      <DialogTitle id="max-width-dialog-title" className="align-text-center">
        Edit Report
      </DialogTitle>
      <DialogContent>
        <TextField
          style={halfWidth}
          floatingLabelText="First name"
          name="firstname"
          variant="filled"
          defaultValue={props.reportSelected.firstname}
          disabled
        />
        <TextField
          style={halfWidth}
          floatingLabelText="Last name"
          name="lastname"
          defaultValue={props.reportSelected.lastname}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Report ID"
          name="reportid"
          fullWidth
          defaultValue={props.reportSelected.id}
          variant="filled"
          disabled
        />
        <TextField
          floatingLabelText="Phone"
          name="phonenr"
          fullWidth
          defaultValue={props.reportSelected.phonenr}
          onChange={e => (report.phonenr = e.target.value)}
        />
        <TextField
          floatingLabelText="Email"
          name="email"
          fullWidth
          defaultValue={props.reportSelected.email}
          onChange={e => (report.email = e.target.value)}
        />
        <TextField
          floatingLabelText="Address"
          name="address"
          fullWidth
          defaultValue={props.reportSelected.address}
          onChange={e => (report.address = e.target.value)}
        />
      </DialogContent>
      <Button onClick={updateReport.bind(this)} color="primary">
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
