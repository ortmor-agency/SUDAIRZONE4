// import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import BgVideo from "";
// import IMG1 from "";
// import IMG1A from "";
// import IMG2 from "";
// import IMG2A from "";
// import IMG3 from "";
// import IMG3A from "";
// import IMG4 from "";
// import IMG4A from "";
// import IMG5 from "";
// import IMG5A from "";
// import IMG6 from "";
// import IMG6A from "";
// import IMG7 from "";
// import IMG7A from "";
// import IMG8 from "";
// import IMG8A from "";
// import IMG9 from "";
// import IMG9A from "";
// import IMG10 from "";
// import IMG10A from "";
// import IMG11 from "";
// import IMG11A from "";

// function SelectionEn() {
//   const APIKEY = process.env.REACT_APP_IPKEY;

//   const Selectionone = async () => {
//     const Api = `${APIKEY}/api/v1/composition/layers/1/clips/2/connect`;
//     try {
//       let response = await axios.post(Api);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const Selectiontwo = async () => {
//     const Api = `${APIKEY}/api/v1/composition/layers/1/clips/3/connect`;
//     try {
//       let response = await axios.post(Api);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const Selectionthree = async () => {
//     const Api = `${APIKEY}/api/v1/composition/layers/1/clips/4/connect`;
//     try {
//       let response = await axios.post(Api);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const Selectionfour = async () => {
//     const Api = `${APIKEY}/api/v1/composition/layers/1/clips/5/connect`;
//     try {
//       let response = await axios.post(Api);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const Selectionfive = async () => {
//     const Api = `${APIKEY}/api/v1/composition/layers/1/clips/6/connect`;
//     try {
//       let response = await axios.post(Api);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const Selectionsix = async () => {
//     const Api = `${APIKEY}/api/v1/composition/layers/1/clips/7/connect`;
//     try {
//       let response = await axios.post(Api);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const Selectionseven = async () => {
//     const Api = `${APIKEY}/api/v1/composition/layers/1/clips/8/connect`;
//     try {
//       let response = await axios.post(Api);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const Selectioneight = async () => {
//     const Api = `${APIKEY}/api/v1/composition/layers/1/clips/9/connect`;
//     try {
//       let response = await axios.post(Api);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="selectioncontainer">
//       <video
//         id="Video"
//         controls={false}
//         width="100%"
//         src={BgVideo}
//         autoPlay={true}
//         loop={true}
//         muted={true}
//         playsInline={true}
//       />
//     </div>
//   );
// }

// export default SelectionEn;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import IMG1 from "../Media/Buttons/English/GSPRE_Eng_i.png";
// import IMG1A from "../Media/Buttons/English/GSPRE_Eng_s.png";
// import IMG2 from "../Media/Buttons/English/NREP_eng_i.png";
// import IMG2A from "../Media/Buttons/English/NREP_eng_s.png";
// import IMG3 from "../Media/Buttons/English/NGHC_eng_i.png";
// import IMG3A from "../Media/Buttons/English/NGHC_eng_s.png";
// import IMG4 from "../Media/Buttons/English/NEOM_eng_i.png";
// import IMG4A from "../Media/Buttons/English/NEOM_eng_s.png";
// import IMG5 from "";
// import IMG5A from "";
// import IMG6 from "";
// import IMG6A from "";
// import IMG7 from "";
// import IMG7A from "";
// import IMG8 from "";
// import IMG8A from "";
// import IMG9 from "";
// import IMG9A from "";
// import IMG10 from "";
// import IMG10A from "";
// import IMG11 from "";
import selectionVideo from "../Media/Videos/selection.mp4";
import "../Styles/selection.scss";

function SelectionEn() {
  return (
    <div className="selectioncontainer">
      <video
        id="Video"
        controls={false}
        width="100%"
        src={selectionVideo}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
      />
    </div>
  );
}

export default SelectionEn;
