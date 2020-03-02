import { makeStyles } from "@material-ui/core";

export const bottomNavbarStyle = makeStyles(theme => ({
  button: {
    color: theme.palette.text.primary
  },
  root: {
    backgroundColor: theme.palette.primary.transparent,
    color: "white",
    backdropFilter: "blur(8px)",
    position: "fixed",
    zIndex: 1,
    bottom: 0,
    width: "100%",
    "& .MuiBottomNavigationAction-root .Mui-selected": {
      color: theme.palette.primary.light
    }
  }
}));
export const switchListsStyle = makeStyles(theme => ({
  color: {
    color: theme.palette.text.primary
  },
  root: {
    backgroundColor: "transparent",
    position: "fixed",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    bottom: 46,
    top: 46,
    right: 0,
    left: 0,
    maxWidth: 600,
    "& .react-swipeable-view-container": {
      height: "calc(100vh - 158px)",
    },
    minHeight: "calc( 100vh - 158px)",
    "& .MuiButtonBase-root": {
      backgroundColor: theme.palette.background.default
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: theme.palette.primary.light
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

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
      overflow: "hidden",
      backdropFilter: "blur(8px)",
      backgroundColor: theme.palette.primary.transparent
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: theme.palette.primary.transparent
    },
    "& .MuiTypography-h6": {
      color: "white"
    },
    "& input": {
      color: theme.palette.text.primary,
      borderColor: theme.palette.primary.transparent
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      overflowY: "visible"
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
      margin: "0px 23px 20px 23px",
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.light,
      minHeight: "38px"
    },

    "& .MuiDialogTitle-root": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary
    },
    "& .MuiBackdrop-root": {
      backgroundColor: "transparent"
    }
  },
  label: {
    "& .MuiFormLabel-root": {
      color: theme.palette.text.primary
    },
    "& .MuiFormControl-root": {
      margin: "10px 0px 10px 0px",
      width: "-webkit-fill-available"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.primary.light
    },
    "& .MuiInput-underline:before": {
      borderColor: theme.palette.primary.main
    },
    "& .MuiInput-underline:after": {
      borderColor: theme.palette.primary.light
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.primary.light
    },
    "& .MuiInput-underline.Mui-focused": {
      color: theme.palette.primary.light
    },
    "& .MuiInput-underline:hover .MuiInput-underline": {
      borderColor: theme.palette.primary.light
    }
  }
}));
export const confirmDialog = makeStyles(theme => ({
  root: {
    "& .MuiDialog-paper": {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary
    }
  }
}));
export const listStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    "& .MuiButtonBase-root": {
      backgroundColor: theme.palette.background.paper
    },
    "& .MuiTypography-body2": {
      color: theme.palette.text.primary
    },
    "& .MuiTypography-colorTextSecondary": {
      color: theme.palette.text.secondary
    },
    "& .MuiTouchRipple-root": {
      userSelect: "none"
    },
    "& .MuiListItem-gutters": {
      backgroundColor: theme.palette.background.paper,
      // borderBottom: `1px solid ${theme.palette.text.secondary}`,
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
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    paddingTop: 1,
    maxWidth: 600,
    overflow: "scroll",
    "& .MuiButtonBase-root": {
      backgroundColor: theme.palette.background.paper
    },
    "& .MuiTypography-body2": {
      color: theme.palette.text.primary
    },
    "& .MuiTypography-colorTextSecondary": {
      color: theme.palette.text.secondary
    },
    "& .MuiTouchRipple-root": {
      userSelect: "none"
    },
    "& .MuiListItem-gutters": {
      backgroundColor: theme.palette.background.paper,
      // borderBottom: `1px solid ${theme.palette.text.secondary}`,
      minHeight: "65px",
      userSelect: "none",
      marginBottom: 1
    }
  }
}));

export const headerStyle = {
  boxShadow: "none"
};
export const loginFormStyle = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    position: "fixed",
    top: "calc(50% - 105px)",
    textAlign: "center",
    left: 10,
    right: 10,
    maxWidth: 600,
    margin: "auto",
    padding: "20px 20px 20px 20px",
    borderRadius: 10,
    "& input": {
      color: theme.palette.text.primary
    },
    "& button": {
      width: "fit-content",
      margin: "auto",
      color: theme.palette.primary.dark
    }
  },
  label: {
    "& .MuiFormControl-root": {
      padding: "10px 10px 10px 10px",
      width: "-webkit-fill-available"
    },
    "& .MuiInput-underline:before": {
      borderColor: theme.palette.text.primary
    },
    "& .MuiInput-underline:after": {
      borderColor: theme.palette.primary.light
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.primary.light
    },
    "& .MuiInput-underline.Mui-focused": {
      color: theme.palette.primary.light
    },
    "& .MuiInput-underline:hover .MuiInput-underline": {
      borderColor: theme.palette.primary.light
    }
  }
}));
export const tableStyle = makeStyles(theme => ({
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
}));

export const profileStyle = makeStyles(theme => ({
  root: {
    "& *": {
      margin: "auto",
      backgroundColor: theme.palette.primary.paper
    },
    position: "fixed",
    top: 58,
    left: 10,
    right: 10,
    maxWidth: 600,
    margin: "auto"
  },
  hr: {
    margin: "10px 0px 10px 0px"
  },
  button: {
    margin: "auto",
    border: 0,
    position: "absolute",
    float: "right",
    top: 4,
    right: -5,
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.light,
      width: 30,
      height: 30,
      borderRadius: 50,
      zIndex: 10
    }
  }
}));
