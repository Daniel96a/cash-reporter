import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { connect } from "react-redux";
import Dashboard from "./components/dashboard/Dashboard";
import { ProtectedRoute } from "./protected.route";
import { doLogin, doLogout } from "./actions/auth";
import "./App.css";
import { LoginRoute } from "./login.route";
import LoginPage from "./components/loginPage/LoginPage";

const App = ({ doLogin, doLogout, auth }) => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <LoginRoute
            exact
            path="/login"
            component={LoginPage}
            doLogin={doLogin}
          />
          <ProtectedRoute
            exact
            path="/"
            component={Dashboard}
            doLogout={doLogout}
            auth={auth}
          />
          <Route exact path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
};
console.log();

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { doLogin, doLogout })(App);
