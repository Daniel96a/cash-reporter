import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import MainHeader from "./components/main/MainHeader";
import AnimatedRouter from "./AnimatedRouter";
import UsersView from "./components/main/users/UsersView";
import BottomNavBar from "./components/main/BottomNavBar";
import Profile from "./components/main/dashboard/Profile";
import ReportsView from "./components/main/reports/ReportsView";
import {
  changeView,
  toggleShowAddCustomer,
  toggleShowAddEmployee,
  toggleShowAddReport,
} from "./redux/actions/states";
import ProtectedRoute from "./protected.route";
import LoginRoute from "./login.route";
import FloatingAddButton from "./FloatingAddButton";

const App = ({
  isAuthenticated,
  user,
  changeView,
  toggleShowAddCustomer,
  toggleShowAddEmployee,
  toggleShowAddReport,
  states,
}) => {
  useEffect(() => {
    console.log(states.showAddReport);
  }, [states.showAddReport]);
  return (
    <>
      <MainHeader isAuthenticated={isAuthenticated} />
      <AnimatedRouter basePath={""} user={user} changeView={changeView}>
        <ProtectedRoute
          component={Profile}
          user={user}
          path={"/dashboard"}
          redirectTo={"/login"}
        />
        <ProtectedRoute
          component={UsersView}
          user={user}
          path={"/users"}
          redirectTo={"/login"}
        />
        <ProtectedRoute
          component={ReportsView}
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
