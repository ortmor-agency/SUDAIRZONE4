import React, { useState } from "react";
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

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleOnHomeNav = () => {
    navigate("/");
  };

  const Selectionone = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/2/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectiontwo = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/3/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectionthree = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/4/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectionfour = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/5/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectionfive = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/6/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectionsix = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/7/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectionseven = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/8/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectioneight = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/9/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectionnine = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/10/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectionten = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/11/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const Selectioneleven = async () => {
    const Api = `${APIKEY}/api/v1/composition/layers/1/clips/12/connect`;
    try {
      let response = await axios.post(Api);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
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
              <img
                onClick={Selectionone}
                src={selectedButton === 1 ? IMG1A : IMG1}
                alt="Button 1"
              />
            </button>
            <button onClick={() => handleButtonClick(2)}>
              <img
                onClick={Selectiontwo}
                src={selectedButton === 2 ? IMG2A : IMG2}
                alt="Button 2"
              />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button onClick={() => handleButtonClick(3)}>
              <img
                onClick={Selectionthree}
                src={selectedButton === 3 ? IMG3A : IMG3}
                alt="Button 3"
              />
            </button>
            <button onClick={() => handleButtonClick(4)}>
              <img
                onClick={Selectionfour}
                src={selectedButton === 4 ? IMG4A : IMG4}
                alt="Button 4"
              />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button onClick={() => handleButtonClick(5)}>
              <img
                onClick={Selectionfive}
                src={selectedButton === 5 ? IMG5A : IMG5}
                alt="Button 5"
              />
            </button>
            <button onClick={() => handleButtonClick(6)}>
              <img
                onClick={Selectionsix}
                src={selectedButton === 6 ? IMG6A : IMG6}
                alt="Button 6"
              />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button onClick={() => handleButtonClick(7)}>
              <img
                onClick={Selectionseven}
                src={selectedButton === 7 ? IMG7A : IMG7}
                alt="Button 7"
              />
            </button>
            <button onClick={() => handleButtonClick(8)}>
              <img
                onClick={Selectioneight}
                src={selectedButton === 8 ? IMG8A : IMG8}
                alt="Button 8"
              />
            </button>
          </div>
          <br />
          <br />
          <div className="selectionchildsection">
            <button onClick={() => handleButtonClick(9)}>
              <img
                onClick={Selectionnine}
                src={selectedButton === 9 ? IMG9A : IMG9}
                alt="Button 9"
              />
            </button>
            <button onClick={() => handleButtonClick(10)}>
              <img
                onClick={Selectionten}
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
                onClick={Selectioneleven}
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
