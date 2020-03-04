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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { chooseTheme } from './redux/actions/theme'
const App = props => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const useTheme = () => {
    if (prefersDarkMode && localStorage.theme !== null && localStorage.theme !== 'light') {
      return darkTheme;
    }
    return lightTheme;
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
  theme: state.theme,
  user: state.auth.user
});

export default connect(mapStateToProps, { chooseTheme })(App);
