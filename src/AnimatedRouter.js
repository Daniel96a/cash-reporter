import React, { useState, useEffect } from "react";
import { Router, Location, globalHistory } from "@reach/router";
import { animated, config as reactSpringConfig } from "react-spring/web.cjs";
import { Transition } from "react-spring/renderprops.cjs";

const routerDivStyles = {
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  marginTop: 50,
  marginBottom: 56,
};
const baseStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
};

/* animated router experiment */
const AnimatedRouter = ({ children, basePath, changeView }) => {
  const POP = "POP";
  const PUSH = "PUSH";

  const getLevel = (pathname) => {
    if (pathname === "/login") {
      return 0;
    }
    if (pathname === "/dashboard") {
      return 1;
    }
    if (pathname === "/users") {
      return 2;
    }
    if (pathname === "/reports") {
      return 3;
    }
  };

  const [lastPathLevel, setLastPathLevel] = useState(
    getLevel(globalHistory.location.pathname)
  );
  const [path, setpath] = useState(
    globalHistory.location.pathname.replace("/", "")
  );
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    changeView(path);
  }, [path, changeView]);

  useEffect(() => {
    document.body.style.overflow = isAnimating ? "hidden" : "";
    // document.body.style.overflow = isMobile ? "hidden" : "";
  }, [isAnimating]);
  return (
    <Location>
      {({ location }) => {
        const isSamePath =
          location.state && location.state.PrevPath === location.pathname;
        const currentLevel = getLevel(location.pathname);
        const routeChangeType = currentLevel < lastPathLevel ? POP : PUSH;
        setLastPathLevel(currentLevel);
        setpath(location.pathname.replace("/", ""));
        return (
          <Transition
            immediate={isSamePath}
            items={location}
            keys={(location) => location.key}
            initial={baseStyles}
            config={{ ...reactSpringConfig.gentle, clamp: true }}
            onStart={() => setIsAnimating(true)}
            onRest={() => setIsAnimating(false)}
            from={{
              ...baseStyles,
              transform:
                routeChangeType === POP
                  ? "translate3d(-100%, 0, 0)"
                  : "translate3d(100%, 0, 0)",
              opacity: 0,
            }}
            enter={{ transform: "translate3d(0%, 0, 0)", opacity: 1 }}
            leave={{
              transform:
                routeChangeType === POP
                  ? "translate3d(100%, 0, 0)"
                  : "translate3d(-100%, 0, 0)",
              opacity: 0,
            }}
          >
            {(location) => (props) => (
              <animated.div style={props}>
                <Router
                  basepath={basePath}
                  primary={false}
                  location={location}
                  style={routerDivStyles}
                >
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
