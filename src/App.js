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
  const timeout = 5000;

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);

  useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  useEffect(() => {
    if (isIdle) {
      navigate("/en");
    }
  }, [isIdle, navigate]);

  // Show SweetAlert2 modal on initial load
  useEffect(() => {
    Swal.fire({
      title: "Do you want to enable full-screen mode?",
      text: "You can exit full-screen mode at any time.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, enable",
      cancelButtonText: "No, thanks",
    }).then((result) => {
      if (result.isConfirmed) {
        enterFullScreen(); // Enable full-screen mode
        Swal.fire("Full-Screen Enabled!", "You can exit it anytime.", "success");
      } else {
        exitFullScreen(); // Ensure full-screen mode is off
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
