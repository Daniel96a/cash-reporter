import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { deleteReport } from "../../../../redux/actions/reports";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";
import { confirmDialog } from "../../../../styles/Styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteReport = props => {
  const [open, setOpen] = useState(props.showDeleteReport);
  const dialogStyle = confirmDialog();
  const handleClose = () => {
    setOpen(false);
    props.setShowDeleteReport(false);
  };
  const handleDelete = () => {
    props.deleteReport(props.reports[props.reportSelected].reportid);
    console.log(props.reports[props.reportSelected].reportid)
    setOpen(false);
    props.setShowDeleteReport(false);
    props.setReportSelected(null);
  };


  return (
    <Dialog
      className={dialogStyle.root}
      hideBackdrop
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"Are you sure you want to delete this this Report?"}
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
  reports: state.reports.reports
});
export default connect(mapStateToProps, {
  deleteReport
})(DeleteReport);
