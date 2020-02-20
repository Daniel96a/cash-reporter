import React from "react";
import { connect } from "react-redux";
import MainView from "./components/main/MainView";
import LoginPage from "./components/login/LoginPage";
import { RestrictedView } from "./components/restrictedView/RestrictedView";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./protected.route";
import { withCookies } from "react-cookie";

import { LoginRoute } from "./login.route";
const App = props => {
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        isAuthenticated={props.isAuthenticated}
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
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default withCookies(connect(mapStateToProps)(App));
