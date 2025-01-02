import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SelectionEn from "./Components/SelectionEn";
import SelectionAr from "./Components/SelectionAr";
import { useIdleTimer } from "react-idle-timer";

function App() {
  const [isIdle, setIsIdle] = useState(false);
  const timeout = 60000;

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);

  useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (isIdle) {
        window.location.assign("/");
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, [isIdle]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<SelectionEn />} />
        <Route path="/ar" element={<SelectionAr />} />
      </Routes>
    </Fragment>
  );
}

export default App;
