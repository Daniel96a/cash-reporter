import React from "react";
import { connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import { RestrictedView } from "./components/restrictedView/RestrictedView";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./protected.route";
import { LoginRoute } from "./login.route";
import MainHeader from "./components/main/MainHeader";
import MainView from "./pages/MainPage";

const App = (props) => {
  return (
    <>
      <MainHeader
        isAuthenticated={props.isAuthenticated}
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
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);
