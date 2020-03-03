import React from "react";
import { connect } from "react-redux";
import MainView from "./components/main/MainView";
import LoginPage from "./components/login/LoginPage";
import { RestrictedView } from "./components/restrictedView/RestrictedView";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./protected.route";
import { LoginRoute } from "./login.route";
import { ThemeProvider } from "@material-ui/core";
import { darkTheme, lightTheme } from "./theme/theme";
import MainHeader from "./components/main/MainHeader";

const App = props => {
  const useTheme = () => {
    if (props.theme === 'dark') {
      return darkTheme;
    } else {
      return lightTheme;
    }
  };
  document.body.style.backgroundColor = useTheme().palette.background.default;
  return (
    <ThemeProvider theme={useTheme()}>
      <MainHeader
        isAuthenticated={props.isAuthenticated}
        doLogout={props.doLogout}
        showCase={props.selectedView}
        setshowCase={props.setSelectedView}
      />
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          isAuthenticated={props.isAuthenticated}
          user={props.user}
          component={MainView}
        />

        <LoginRoute
          exact
          path="/login"
          isAuthenticated={props.isAuthenticated}
          component={LoginPage}
        />
        <Route exact path="/*" component={RestrictedView} />
      </Switch>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.theme,
  user: state.auth.user
});

export default connect(mapStateToProps)(App);
