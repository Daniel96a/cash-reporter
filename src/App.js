import React from "react";
import { connect } from "react-redux";
import LoginPage from "./pages/LoginPage";
import MainHeader from "./components/main/MainHeader";
import AnimatedRouter from "./AnimatedRouter";
import UsersView from "./components/main/users/UsersView";
import BottomNavBar from "./components/main/BottomNavBar";
import Profile from "./components/main/dashboard/Profile";
import ReportsView from "./components/main/reports/ReportsView";
import { changeView } from "./redux/actions/states";
import ProtectedRoute from "./protected.route";

const App = ({
  isAuthenticated,
  user,
  changeView,
  states: { selectedView },
}) => {
  return (
    <>
      <MainHeader isAuthenticated={isAuthenticated} />
      <AnimatedRouter basePath={""} user={user} changeView={changeView}>
        <ProtectedRoute
          component={Profile}
          isAuthenticated={isAuthenticated}
          user={user}
          path={"/dashboard"}
          redirectTo={"/login"}
        />
        <ProtectedRoute
          component={UsersView}
          isAuthenticated={isAuthenticated}
          user={user}
          path={"/users"}
          redirectTo={"/login"}
        />
        <ProtectedRoute
          component={ReportsView}
          isAuthenticated={isAuthenticated}
          user={user}
          path={"/reports"}
          redirectTo={"/login"}
        />
        <LoginPage path={"/login"} default isAuthenticated={isAuthenticated} />
      </AnimatedRouter>
      {isAuthenticated && <BottomNavBar selectedView={selectedView} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  states: state.states,
});

export default connect(mapStateToProps, { changeView })(App);
// export const fetchReportList = () => {
//   return async (dispatch) => {
//     axios
//       .get(`${useUrl + API_ENDPOINTS.report.all}`,{
//         headers: {
//           Authorization: axios.defaults.headers.common.Authorization,
//         },
//       })
//       .then((res) => {
//         dispatch(setReports(res.data));
//       });
//   };
// };
