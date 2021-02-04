import React from 'react';
import Face from "./face.png";
import "./style.css";

function HeadImage() {
  return(
    <img className="faceImage" src={Face} alt="face"></img>
  )
}

export default HeadImage;