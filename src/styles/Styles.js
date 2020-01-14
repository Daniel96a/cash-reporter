import { BLUE, GREY } from "../colorTheme/colors";
import { makeStyles } from "@material-ui/core";

export const detailsDialog = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {
      margin: "auto",
      position: "fixed",
      top: 58,
      bottom: 10,
      left: 10,
      right: 10,
      maxHeight: "800px",
      maxWidth: "600px",
      overflowX: "scrollbar",
      backgroundColor: "rgba(32, 42, 53, 1)"
    },
    "& input": {
      color: "white",
    },
    "& .MuiDialog-paperWidthSm": {
      overflowY: "visible"
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      overflowY: "visible"
    },
    "& .MuiDialog-paperScrollPaper": {
      // maxHeight: "100%",
      // maxWidth: "100%"
    },
    "& .MuiDialogContent-root": {
      overflowY: "scrollbar"
    },
    "& .MuiButtonBase-root": {
      border: "solid #80808085",
      borderWidth: "1px",
      
      margin: "0px 20px 20px 20px"
    },

    "& .MuiDialogTitle-root": {
      backgroundColor: BLUE,
      color: "white"
    },
    "& .MuiDialog-container": {
      backdropFilter: "blur(8px)"
    }
  }
}));
export const listStyle = makeStyles(theme => ({
  root: {
    color: "white",
    margin: "auto",
    paddingTop: 1,
    backgroundColor: "rgba(25, 35, 46, 1)",
    "& .MuiTab-textColorPrimary": {
      color: "white"
    },
    "& .MuiTypography-body2": {
      color: "white"
    },
    "& .MuiTouchRipple-root": {
      userSelect: "none"
    },
    "& .MuiListItem-gutters": {
      backgroundColor: "rgb(32, 42, 53)",
      marginBottom: 1
    }
  }
}));

export const headerStyle = {
  height: 48,
  backgroundColor: BLUE,
  zIndex: 100000,
  position: "fixed"
};
export const loginFormStyle = makeStyles(theme => ({
  root: {
    position: "fixed",
    top: 60,
    left: 10,
    right: 10,
    maxWidth: 400,
    margin: "auto",
    textAlign: "center",
    padding: "0 30px 30px 30px",
    borderRadius: 10,
    backgroundColor: GREY
  }
}));
