import { BLUE, GREY, DARK } from "../colorTheme/colors";
import { makeStyles } from "@material-ui/core";

export const switchListsStyle = makeStyles(theme => ({
  color: {
    color: "lightgrey"
  },
  root: {
    backgroundColor: "transparent",
    position: "fixed",
    zIndex: 0,
    margin: "auto",
    bottom: 46,
    top: 46,
    right: "0px",
    left: "0px",
    maxWidth: 600,
    "& .MuiButtonBase-root": {
      backgroundColor: GREY,
      borderLeft: `1px solid ${DARK}`,
      borderRight: `1px solid ${DARK}`

    }
  }
}));

export const swipeableViewsStyle = {
  position: "fixed",
  overflowY: "scroll",
  margin: "auto",
  top: 95,
  bottom: 56,
  left: 0,
  right: 0,
  maxWidth: 600
};


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
      backgroundColor: "transparent"
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
export const confirmDialog = makeStyles(theme => ({
  root: {
    "& .MuiDialog-paper": {
      backgroundColor: GREY,
      color: "white"
    }
  }
}));
export const listStyle = makeStyles(theme => ({
  root: {
    position: "inherit",
    color: "white",
    margin: "auto",
    paddingTop: 1,
    maxWidth: 600,
    backgroundColor: GREY,
    "& .MuiButtonBase-root": {
      backgroundColor: GREY
    },
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
      borderBottom: `1px solid ${DARK}`,
      minHeight: "65px",
      userSelect: "none",
      marginBottom: 1
    }
  }
}));
export const reportListStyle = makeStyles(theme => ({
  root: {
    position: "fixed",
    color: "white",
    top: 48,
    left: 0,
    right: 0,
    bottom: 40,
    margin: "auto",
    paddingTop: 1,
    maxWidth: 600,
    overflow: "scroll",
    "& .MuiButtonBase-root": {
      backgroundColor: GREY
    },
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
