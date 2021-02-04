import React from 'react';
// styling
import "./style.css"
// components

function Navbar() {
  return(
    <div className="navbar">
      <a className="navbarBrand" href="/home">YEET</a>
      <div className="navbarButtonDiv">
        <a className="navBtn" href="/login">Login</a>
        <a className="navBtn" href="/login">Logout</a>
      </div>
    </div>
  )
};

export default Navbar;
