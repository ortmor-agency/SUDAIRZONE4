/* eslint-disable */
import React, { Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import SelectionEn from "./Components/SelectionEn";
import SelectionAr from "./Components/SelectionAr";
import { useIdleTimer } from "react-idle-timer";
import { useFullScreen } from "./FullScreenContext";

function App() {
  const { isFullScreen, enterFullScreen, exitFullScreen } = useFullScreen();
  const [isIdle, setIsIdle] = useState(false);
  const navigate = useNavigate();
  const timeout = 120000;

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);

  useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  useEffect(() => {
    if (isIdle) {
      navigate("/");
    }
  }, [isIdle, navigate]);

  useEffect(() => {
    Swal.fire({
      title: "fullscreen mode?",
      width: "50%",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        container: "swal-vertical-container",
        popup: "swal-vertical-popup",
        confirmButton: "swal-confirm-button",
        cancelButton: "swal-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        enterFullScreen();
      } else {
        exitFullScreen();
      }
    });
  }, [enterFullScreen, exitFullScreen]);

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
