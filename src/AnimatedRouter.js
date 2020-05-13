import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import { Router, Location, globalHistory, navigate } from "@reach/router";
import { animated, config as reactSpringConfig } from "react-spring/web.cjs";
import { Transition } from "react-spring/renderprops.cjs";

/* animated router experiment */
const AnimatedRouter = ({ children, basePath, user, changeView }) => {
  const POP = "POP";
  const PUSH = "PUSH";

  const getLevel = (pathname) => {
    switch (pathname) {
      case (pathname = "/login"): {
        return 0;
      }
      case (pathname = "/dashboard"): {
        return 1;
      }
      case (pathname = "/users"): {
        return 2;
      }
      case (pathname = "/reports"): {
        return 3;
      }
      default:
        return 0;
    }
  };
  const [lastPathLevel, setLastPathLevel] = useState(
    getLevel(globalHistory.location.pathname)
  );
  const [path, setpath] = useState(
    globalHistory.location.pathname.replace("/", "")
  );

  const baseStyles = {
    position: "fixed",
    right: 0,
    left: 0,
  };

  useEffect(() => {
    if (!isEmpty(user)) {
      if (
        window.location.pathname === "/" ||
        window.location.pathname === "/login"
      ) {
        navigate("/dashboard");
      }
    } else {
      if (window.location.pathname !== "/login") {
        navigate("/login");
      }
    }
  }, [user]);
  useEffect(() => {
    changeView(path.replace("/", ""));
  }, [path, changeView]);
  return (
    <Location>
      {({ location }) => {
        const currentLevel = getLevel(location.pathname);
        const routeChangeType = lastPathLevel > currentLevel ? POP : PUSH;
        setLastPathLevel(location.pathname);
        setpath(location.pathname.replace("/", ""));
        return (
          <Transition
            items={location}
            keys={(location) => location.key}
            initial={baseStyles}
            config={{ ...reactSpringConfig.gentle, clamp: true }}
            from={{
              ...baseStyles,
              transform:
                routeChangeType === POP
                  ? "translate3d(-100%, 0, 0)"
                  : "translate3d(100%, 0, 0)",
              opacity: 1,
            }}
            enter={{ transform: "translate3d(0%, 0, 0)", opacity: 1 }}
            leave={{
              transform:
                routeChangeType === POP
                  ? "translate3d(100%, 0, 0)"
                  : "translate3d(-100%, 0, 0)",
              opacity: 1,
            }}
          >
            {(location) => (props) => (
              <animated.div style={props}>
                <Router basepath={basePath} primary={false} location={location}>
                  {children}
                </Router>
              </animated.div>
            )}
          </Transition>
        );
      }}
    </Location>
  );
};

export default AnimatedRouter;
