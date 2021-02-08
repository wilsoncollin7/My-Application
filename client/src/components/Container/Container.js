import React from 'react';
// styling
import "./style.css";

function Container({ children }) {
  return(
    <div className="container">
      {children}
    </div>
  )
}

export default Container;
