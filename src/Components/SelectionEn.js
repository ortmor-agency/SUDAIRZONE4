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
  const APIKEY = process.env.REACT_APP_IPKEY;
  const [selectedButton, setSelectedButton] = useState(null);
  const isTransitioning = useRef(false);
  const pendingTransition = useRef(null);

  const makeApiCall = async (endpoint) => {
    const Api = `${APIKEY}${endpoint}`;
    try {
      const response = await axios.post(Api);
      console.log(response);
      // Add a small delay for video transition
      await new Promise((resolve) => setTimeout(resolve, 3300));
      return response;
    } catch (err) {
      console.log(err);
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

  const processVideoTransition = async (newButtonId) => {
    if (isTransitioning.current) {
      pendingTransition.current = newButtonId;
      return;
    }

    isTransitioning.current = true;

    try {
      // Play out animation for current selection if exists
      if (selectedButton && outFunctions[selectedButton]) {
        await outFunctions[selectedButton]();
      }

      // Play in animation for new selection
      if (selectionFunctions[newButtonId]) {
        await selectionFunctions[newButtonId]();
      }
    } catch (error) {
      console.error("Error during video transition:", error);
    } finally {
      isTransitioning.current = false;

      // Handle any pending transitions
      if (pendingTransition.current !== null) {
        const nextTransition = pendingTransition.current;
        pendingTransition.current = null;
        processVideoTransition(nextTransition);
      }
    }
  };

  const handleButtonClick = (newButtonId) => {
    // Update UI immediately
    setSelectedButton(newButtonId);

    // Handle video transition in the background
    processVideoTransition(newButtonId);
  };

  // Initial setup effect
  useEffect(() => {
    const initializeVideos = async () => {
      try {
        await makeApiCall("/api/v1/composition/layers/1/clips/2/connect");

        setTimeout(async () => {
          await makeApiCall("/api/v1/composition/layers/1/clips/3/connect");
        }, 5000);
      } catch (error) {
        console.error("Error during initialization:", error);
      }
    };

    initializeVideos();
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
            <button onClick={() => handleButtonClick(1)}>
              <img src={selectedButton === 1 ? IMG1A : IMG1} alt="Button 1" />
            </button>
            <button onClick={() => handleButtonClick(2)}>
              <img src={selectedButton === 2 ? IMG2A : IMG2} alt="Button 2" />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button onClick={() => handleButtonClick(3)}>
              <img src={selectedButton === 3 ? IMG3A : IMG3} alt="Button 3" />
            </button>
            <button onClick={() => handleButtonClick(4)}>
              <img src={selectedButton === 4 ? IMG4A : IMG4} alt="Button 4" />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button onClick={() => handleButtonClick(5)}>
              <img src={selectedButton === 5 ? IMG5A : IMG5} alt="Button 5" />
            </button>
            <button onClick={() => handleButtonClick(6)}>
              <img src={selectedButton === 6 ? IMG6A : IMG6} alt="Button 6" />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button onClick={() => handleButtonClick(7)}>
              <img src={selectedButton === 7 ? IMG7A : IMG7} alt="Button 7" />
            </button>
            <button onClick={() => handleButtonClick(8)}>
              <img src={selectedButton === 8 ? IMG8A : IMG8} alt="Button 8" />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button onClick={() => handleButtonClick(9)}>
              <img src={selectedButton === 9 ? IMG9A : IMG9} alt="Button 9" />
            </button>
            <button onClick={() => handleButtonClick(10)}>
              <img
                src={selectedButton === 10 ? IMG10A : IMG10}
                alt="Button 10"
              />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionmainchildbtn">
            <button onClick={() => handleButtonClick(11)}>
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
