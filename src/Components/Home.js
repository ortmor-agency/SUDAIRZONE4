  /* eslint-disable */
  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  import idleVideo from "../Media/Videos/home.mp4";
  import Engbtn from "../Media/Buttons/lan_eng.png";
  import Arbtn from "../Media/Buttons/lan_ara.png";
  import "../Styles/home.scss";

  function Home() {
    const APIKEY = process.env.REACT_APP_IPKEY;
    const [disable, isDisable] = useState(true);

    const navigate = useNavigate();

    const handleOnEnglishNav = () => {
      navigate("/en");
    };

    const handleOnArabicNav = () => {
      navigate("/ar");
    };

    useEffect(() => {
      setTimeout(() => {
        const changeoutidle = async (e) => {
          const Api = `${APIKEY}/api/v1/composition/layers/1/clips/1/connect`;
          try {
            let response = await axios.post(Api);
            console.log(response);
          } catch (err) {
            console.log(err);
          }
        };
        changeoutidle();
        isDisable(false);
      }, 4000);

      const changeidle = async (e) => {
        const Api = `${APIKEY}/api/v1/composition/layers/1/clips/4/connect`;
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
          <button disabled={disable} onClick={handleOnEnglishNav}></button>
          <button disabled={disable} onClick={handleOnArabicNav}></button>
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
