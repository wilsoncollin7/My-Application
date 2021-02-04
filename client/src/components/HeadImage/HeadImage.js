import React from 'react';
import Face from "./faceIcon.png";
import "./style.css";

function HeadImage() {
  return(
    <img className="faceImage" src={Face} alt="face"></img>
  )
}

export default HeadImage;