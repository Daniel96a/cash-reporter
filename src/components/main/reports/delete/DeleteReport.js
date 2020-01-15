import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { deleteReport } from "../../../../actions/reports";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteReport = props => {
  const [open, setOpen] = useState(props.showDeleteReport);

  const handleClose = () => {
    setOpen(false);
    props.setShowDeleteReport(false);
  };
  const handleDelete = () => {
    props.deleteReport(props.reportSelected);
    setOpen(false);
    props.setShowDeleteReport(false);
    props.setReportSelected(null);
  };

  return (
    <div>
      <Dialog
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
  reports: state.reports
});
export default connect(mapStateToProps, {
  deleteReport
})(DeleteReport);
