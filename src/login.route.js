import React from "react";
import { Redirect } from "@reach/router";
import isEmpty from "lodash/isEmpty";

const LoginRoute = ({
  component: Component,
  isAuthenticated,
  user,
  redirectTo,
  ...props
}) => {
  if (isEmpty(user)) {
    return <Component {...props} />;
  } else {
    return <Redirect to={redirectTo} from={"/"} noThrow />;
  }
};

export default LoginRoute;
