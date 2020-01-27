import { BLUE, DARK, GREY } from "../colorTheme/colors";
import { makeStyles } from "@material-ui/core";

export const detailsDialog = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {
      margin: "auto",
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      maxHeight: "900px",
      maxWidth: "600px",
      backgroundColor: DARK
    },

    "& input": {
      color: "white"
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
    "& .MuiDialog-root": {
      // position: "fixed";
      // zIndex: 1000000;
      // right: 0px;
      // bottom: 0px;
      // top: 0px;
      // left: 0px;
    },
    "& .MuiDialogContent-root": {
      flex: "1 1 auto",
      padding: "8px 10px",
      overflowY: "auto",
      "-webkit-overflow-scrolling": "auto",
      "& ::-webkit-scrollbar": {
        width: 0,
        height: 0
      }
    },
    "& .MuiButtonBase-root": {
      border: "solid #80808085",
      margin: "0px 23px 20px 23px",
      borderWidth: "1px",
      minHeight: "38px"
    },

    "& .MuiDialogTitle-root": {
      backgroundColor: BLUE,
      color: "white"
    },
    "& .MuiDialog-container": {
      backdropFilter: "blur(20px)"
    },
    "& .MuiBackdrop-root": {
      backgroundColor: "transparent"
    }
  }
}));
export const listStyle = makeStyles(theme => ({
  root: {
    color: "white",
    left: 0,
    right: 0,
    margin: "auto",
    paddingTop: 1,
    maxWidth: 600,
    backgroundColor: "transparent",
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
      backgroundColor: "rgba(32, 42, 53, .1)",
      borderBottom: `1px solid ${GREY}`,
      minHeight: "65px",
      userSelect: "none",
      marginBottom: 1
    }
  }
}));

export const headerStyle = {
  height: 48,
  backgroundColor: BLUE,
  position: "fixed"
};
export const loginFormStyle = makeStyles(theme => ({
  root: {
    position: "fixed",
    top: "calc(50% - 105px)",
    textAlign: "center",
    left: 0,
    right: 0,
    maxWidth: 600,
    margin: "auto",
    padding: "0 30px 30px 30px",
    borderRadius: 10
  }
}));
export const tableStyle = makeStyles({
  cells: {
    "& td.MuiTableCell-body, th.MuiTableCell-body": {
      padding: 10
    }
  },
  table: {
    color: "white",
    margin: 20
  },
  tableContainer: {
    "& .MuiTableContainer-root": {
      marginTop: 20,
      marginBottom: 20
    }
  }
});
