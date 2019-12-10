import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { connect } from "react-redux";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import LoginForm from "./components/login/LoginForm";
import { ProtectedRoute } from "./protected.route";
import { doLogin, doLogout } from "./actions/auth";

const App = ({ doLogin, doLogout, auth }) => {
  return (
    <Router history={history}>
      <Header doLogout={doLogout} auth={auth} />
      <Switch>
        <LoginForm
          path="/login"
          doLogin={doLogin}
          doLogout={doLogout}
          auth={auth}
        />
        <Route
          exact
          path="/login"
          component={LoginForm}
          doLogin={doLogin}
          doLogout={doLogout}
          auth={auth}
        />
        <ProtectedRoute path="/" component={Dashboard} auth={auth} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};
console.log();

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { doLogin, doLogout })(App);
