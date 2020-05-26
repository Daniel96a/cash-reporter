import React from "react";
import { connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import MainHeader from "./components/main/MainHeader";
import AnimatedRouter from "./AnimatedRouter";
import BottomNavBar from "./components/main/BottomNavBar";
import ReportsPage from "./pages/ReportsPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import ProtectedRoute from "./protected.route";
import LoginRoute from "./login.route";
import FloatingAddButton from "./FloatingAddButton";

import {
  changeView,
  toggleShowAddCustomer,
  toggleShowAddEmployee,
  toggleShowAddReport,
} from "./redux/actions/states";

const App = ({
  isAuthenticated,
  user,
  changeView,
  toggleShowAddCustomer,
  toggleShowAddEmployee,
  toggleShowAddReport,
  states,
}) => {
  return (
    <>
      <MainHeader isAuthenticated={isAuthenticated} />
      <AnimatedRouter basePath={""} user={user} changeView={changeView}>
        <ProtectedRoute
          component={DashboardPage}
          user={user}
          path={"/dashboard"}
          redirectTo={"/login"}
        />
        <ProtectedRoute
          component={UsersPage}
          user={user}
          path={"/users"}
          redirectTo={"/login"}
        />
        <ProtectedRoute
          component={ReportsPage}
          user={user}
          path={"/reports"}
          redirectTo={"/login"}
        />
        <LoginRoute
          component={LoginPage}
          user={user}
          default
          path={"/login"}
          redirectTo={"/dashboard"}
        />
        <LoginPage path={"/login"} default isAuthenticated={isAuthenticated} />
      </AnimatedRouter>
      {isAuthenticated && (
        <>
          <FloatingAddButton
            states={states}
            toggleShowAddCustomer={toggleShowAddCustomer}
            toggleShowAddEmployee={toggleShowAddEmployee}
            toggleShowAddReport={toggleShowAddReport}
          />
          <BottomNavBar states={states} changeView={changeView} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  states: state.states,
});

export default connect(mapStateToProps, {
  changeView,
  toggleShowAddCustomer,
  toggleShowAddEmployee,
  toggleShowAddReport,
})(App);
