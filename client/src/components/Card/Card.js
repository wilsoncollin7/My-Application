import React from 'react';
// styling
import "./style.css";
// components

function Card({ children, header }) {
  return(
    <div className="cardContainer">
      <div className="cardHeaderContainer">
        <h2 className="cardHeader">{header}</h2>
      </div>
      <>{children}</>
    </div>
  )
}

export default Card;
