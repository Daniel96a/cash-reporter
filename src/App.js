import React from "react";
import { connect } from "react-redux";
import MainView from "./components/main/MainView";
import LoginPage from "./components/login/LoginPage";
import { RestrictedView } from "./components/restrictedView/RestrictedView";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./protected.route";
import { LoginRoute } from "./login.route";
const App = props => {
  return (
    <Switch>
      <LoginRoute
        exact
        path="/login"
        isAuthenticated={props.isAuthenticated}
        component={LoginPage}
      />
      <ProtectedRoute
        path="/"
        isAuthenticated={props.isAuthenticated}
        component={MainView}
      />
      <Route exact path="*" component={RestrictedView} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
