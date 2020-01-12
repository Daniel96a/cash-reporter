import React, { useState } from "react";

// note: this version doesn't cancel on movement

export const Pressable = ({ id, onClick, onPress, children }) => {
  const [timer, setTimer] = useState(null);

  function onPointerDown(evt) {
    const event = { ...evt }; // convert synthetic event to real object
    const timeoutId = window.setTimeout(timesup.bind(null, event), 700);
    setTimer(timeoutId);
  }

  function onPointerUp(evt) {
    if (timer) {
      window.clearTimeout(timer);
      setTimer(null);
      onClick(evt);
    }
  }

  function timesup(evt) {
    setTimer(null);
    onPress(evt);
  }

  return (
    <React.Fragment>
      <div onPointerDown={onPointerDown} onPointerUp={onPointerUp} id={id}>
        {children}
      </div>
    </React.Fragment>
  );
};
