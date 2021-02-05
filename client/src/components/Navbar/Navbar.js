import React from 'react';
import API from "../../utils/API";
// styling
import "./style.css"
// components

function Navbar() {

  function handleOnClick() {
    API.logoutUser()
  }

  return(
    <div className="navbar">
      <a className="navbarBrand" href="/home">YEET</a>
      <div className="navbarButtonDiv">
        <a className="navBtn" href="/login">Login</a>
        <a className="navBtn" href="/home" onClick={handleOnClick}>Logout</a>
      </div>
    </div>
  )
};

export default Navbar;
