import React, { useEffect } from "react";
import axios from "axios";
import idleVideo from "../Media/Videos/home.mp4";
import Engbtn from "../Media/Buttons/lan_eng.png";
import Arbtn from "../Media/Buttons/lan_ara.png";

import { Link } from "react-router-dom";
import "../Styles/home.scss";

function Home() {
  const APIKEY = process.env.REACT_APP_IPKEY;

  useEffect(() => {
    const changeidle = async (e) => {
      const Api = `${APIKEY}/api/v1/composition/layers/1/clips/1/connect`;
      try {
        let response = await axios.post(Api);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    changeidle();
  }, []);

  return (
    <div className="home-container">
      <div className="langbtnmain">
        <div className="langchildbtn">
          <img src={Engbtn} />
          <img src={Arbtn} />
        </div>
      </div>

      <div className="langbtnroundmain">
        <button></button>
        <button></button>
      </div>

      <video
        id="Video"
        controls={false}
        width="100%"
        src={idleVideo}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
      />
    </div>
  );
}

export default Home;
