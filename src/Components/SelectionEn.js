import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IMG1 from "../Media/Buttons/English/GSPRE_Eng_i.png";
import IMG1A from "../Media/Buttons/English/GSPRE_Eng_s.png";
import IMG2 from "../Media/Buttons/English/NREP_eng_i.png";
import IMG2A from "../Media/Buttons/English/NREP_eng_s.png";
import IMG3 from "../Media/Buttons/English/NGHC_eng_i.png";
import IMG3A from "../Media/Buttons/English/NGHC_eng_s.png";
import IMG4 from "../Media/Buttons/English/NEOM_eng_i.png";
import IMG4A from "../Media/Buttons/English/NEOM_eng_s.png";
import IMG5 from "../Media/Buttons/English/SGI_eng_i.png";
import IMG5A from "../Media/Buttons/English/SGI_eng_s.png";
import IMG6 from "../Media/Buttons/English/KSP_eng_i.png";
import IMG6A from "../Media/Buttons/English/KSP_eng_s.png";
import IMG7 from "../Media/Buttons/English/Tarshid_eng_i.png";
import IMG7A from "../Media/Buttons/English/Tarshid_eng_s.png";
import IMG8 from "../Media/Buttons/English/SEEC_eng_i.png";
import IMG8A from "../Media/Buttons/English/SEEC_eng_s.png";
import IMG9 from "../Media/Buttons/English/Alat_eng_i.png";
import IMG9A from "../Media/Buttons/English/Alat_eng_s.png";
import IMG10 from "../Media/Buttons/English/Ceer_eng_i.png";
import IMG10A from "../Media/Buttons/English/Ceer_eng_s.png";
import IMG11 from "../Media/Buttons/English/AMI_eng_i.png";
import IMG11A from "../Media/Buttons/English/AMI_eng_s.png";
import Homebtn from "../Media/Buttons/ico_home.png";
import Headbtn from "../Media/Buttons/head.png";
import selectionVideo from "../Media/Videos/selection.mp4";
import "../Styles/selection.scss";

function SelectionEn() {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [outvideotime, setOutVideoTime] = useState(0);

  const APIKEY = process.env.REACT_APP_IPKEY;
  const [selectedButton, setSelectedButton] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const isTransitioning = useRef(false);
  const pendingTransition = useRef(null);
  const transitionTimeout = useRef(null);
  const abortControllerRef = useRef(null);

  const makeApiCall = async (endpoint) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    const Api = `${APIKEY}${endpoint}`;
    try {
      const response = await axios.post(Api, null, {
        signal: abortControllerRef.current.signal,
        timeout: 5000,
      });
      return response;
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Request cancelled:", endpoint);
      } else {
        console.error(`API call failed for endpoint ${endpoint}:`, err);
      }
      throw err;
    }
  };

  const selectionFunctions = {
    1: () => makeApiCall("/api/v1/composition/layers/3/clips/1/connect"),
    2: () => makeApiCall("/api/v1/composition/layers/3/clips/2/connect"),
    3: () => makeApiCall("/api/v1/composition/layers/3/clips/3/connect"),
    4: () => makeApiCall("/api/v1/composition/layers/3/clips/4/connect"),
    5: () => makeApiCall("/api/v1/composition/layers/3/clips/5/connect"),
    6: () => makeApiCall("/api/v1/composition/layers/3/clips/6/connect"),
    7: () => makeApiCall("/api/v1/composition/layers/3/clips/7/connect"),
    8: () => makeApiCall("/api/v1/composition/layers/3/clips/8/connect"),
    9: () => makeApiCall("/api/v1/composition/layers/3/clips/9/connect"),
    10: () => makeApiCall("/api/v1/composition/layers/3/clips/10/connect"),
    11: () => makeApiCall("/api/v1/composition/layers/3/clips/11/connect"),
  };

  const outFunctions = {
    1: () => makeApiCall("/api/v1/composition/layers/2/clips/1/connect"),
    2: () => makeApiCall("/api/v1/composition/layers/2/clips/2/connect"),
    3: () => makeApiCall("/api/v1/composition/layers/2/clips/3/connect"),
    4: () => makeApiCall("/api/v1/composition/layers/2/clips/4/connect"),
    5: () => makeApiCall("/api/v1/composition/layers/2/clips/5/connect"),
    6: () => makeApiCall("/api/v1/composition/layers/2/clips/6/connect"),
    7: () => makeApiCall("/api/v1/composition/layers/2/clips/7/connect"),
    8: () => makeApiCall("/api/v1/composition/layers/2/clips/8/connect"),
    9: () => makeApiCall("/api/v1/composition/layers/2/clips/9/connect"),
    10: () => makeApiCall("/api/v1/composition/layers/2/clips/10/connect"),
    11: () => makeApiCall("/api/v1/composition/layers/2/clips/11/connect"),
  };

  const cleanupTransition = () => {
    isTransitioning.current = false;
    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
      transitionTimeout.current = null;
    }
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  };

  const processVideoTransition = async (newButtonId) => {
    if (isTransitioning.current) {
      pendingTransition.current = newButtonId;
      return;
    }

    isTransitioning.current = true;
    setIsAnimating(true);

    try {
      transitionTimeout.current = setTimeout(() => {
        cleanupTransition();
        setIsAnimating(false);
      }, 5000);

      if (outFunctions[selectedButton]) {
        await outFunctions[selectedButton]();
        setDisable(true);
        await new Promise((resolve) => setTimeout(resolve, outvideotime)).then(
          setDisable(false)
        );
      }

      if (selectionFunctions[newButtonId]) {
        await selectionFunctions[newButtonId]();
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Error during video transition:", error);
      }
    } finally {
      cleanupTransition();
      setIsAnimating(false);

      if (pendingTransition.current !== null) {
        const nextTransition = pendingTransition.current;
        pendingTransition.current = null;
        setTimeout(() => {
          processVideoTransition(nextTransition);
        }, 300);
      }
    }
  };

  const handleButtonClick = (newButtonId, time) => {
    if (isTransitioning.current) {
      return;
    }

    if (selectedButton === newButtonId) {
      return;
    }
    setOutVideoTime(time);
    setSelectedButton(newButtonId);
    processVideoTransition(newButtonId);
  };

  const getButtonStyle = (buttonId) => {
    if (!isAnimating) return {};

    return {
      opacity: selectedButton === buttonId ? 1 : 0.3,
      transition: "opacity 0.3s ease-in-out",
    };
  };

  useEffect(() => {
    let mounted = true;

    const initializeVideos = async () => {
      try {
        setDisable(true);
        await makeApiCall("/api/v1/composition/layers/1/clips/2/connect");

        if (mounted) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          await makeApiCall("/api/v1/composition/layers/1/clips/3/connect");
          setDisable(false);
        }
      } catch (error) {
        if (mounted && !axios.isCancel(error)) {
          console.error("Error during initialization:", error);
          setDisable(false);
        }
      }
    };

    initializeVideos();

    return () => {
      mounted = false;
      cleanupTransition();
    };
  }, []);

  const handleOnHomeNav = () => {
    navigate("/");
  };

  return (
    <div className="selectioncontainer">
      <div className="selectionhead">
        <img src={Headbtn} alt="Header" />
      </div>

      <div className="selectionbuttonmaincontainermask">
        <div className="selectionbuttonmaincontainer">
          <div className="selectionchildsection">
            <button
              disabled={disable}
              onClick={() => handleButtonClick(1, 8000)}
              style={getButtonStyle(1)}
            >
              <img src={selectedButton === 1 ? IMG1A : IMG1} alt="Button 1" />
            </button>
            <button
              disabled={disable}
              onClick={() => handleButtonClick(2, 8000)}
              style={getButtonStyle(2)}
            >
              <img src={selectedButton === 2 ? IMG2A : IMG2} alt="Button 2" />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button
              disabled={disable}
              onClick={() => handleButtonClick(3, 8000)}
              style={getButtonStyle(3)}
            >
              <img src={selectedButton === 3 ? IMG3A : IMG3} alt="Button 3" />
            </button>
            <button
              disabled={disable}
              onClick={() => handleButtonClick(4, 8000)}
              style={getButtonStyle(4)}
            >
              <img src={selectedButton === 4 ? IMG4A : IMG4} alt="Button 4" />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button
              disabled={disable}
              onClick={() => handleButtonClick(5, 8000)}
              style={getButtonStyle(5)}
            >
              <img src={selectedButton === 5 ? IMG5A : IMG5} alt="Button 5" />
            </button>
            <button
              disabled={disable}
              onClick={() => handleButtonClick(6, 8000)}
              style={getButtonStyle(6)}
            >
              <img src={selectedButton === 6 ? IMG6A : IMG6} alt="Button 6" />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button
              disabled={disable}
              onClick={() => handleButtonClick(7, 8000)}
              style={getButtonStyle(7)}
            >
              <img src={selectedButton === 7 ? IMG7A : IMG7} alt="Button 7" />
            </button>
            <button
              disabled={disable}
              onClick={() => handleButtonClick(8, 8000)}
              style={getButtonStyle(8)}
            >
              <img src={selectedButton === 8 ? IMG8A : IMG8} alt="Button 8" />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button
              disabled={disable}
              onClick={() => handleButtonClick(9, 8000)}
              style={getButtonStyle(9)}
            >
              <img src={selectedButton === 9 ? IMG9A : IMG9} alt="Button 9" />
            </button>
            <button
              disabled={disable}
              onClick={() => handleButtonClick(10, 8000)}
              style={getButtonStyle(10)}
            >
              <img
                src={selectedButton === 10 ? IMG10A : IMG10}
                alt="Button 10"
              />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionmainchildbtn">
            <button
              disabled={disable}
              onClick={() => handleButtonClick(11, 8000)}
              style={getButtonStyle(11)}
            >
              <img
                src={selectedButton === 11 ? IMG11A : IMG11}
                alt="Button 11"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="selectionfooterbtn">
        <button onClick={handleOnHomeNav}>
          <img src={Homebtn} alt="Home" />
        </button>
      </div>

      <video
        id="Video"
        controls={false}
        width="100%"
        src={selectionVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

export default SelectionEn;
