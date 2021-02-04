import React, { useState } from 'react';
// styling
import "./style.css";
// components
import Login from "./Login";
import Register from "./Register";

function LoginForm() {
  const [pageLayout, setPageLayout] =useState({
    login: true
  });


  return(
    <div className="loginContainer">
      <div className="loginNav">
        <button className="loginNavBtn" onClick={() => setPageLayout({
          login: true
        })}>Login</button>
        <button className="loginNavBtn" onClick={() => setPageLayout({
          login: false
        })}>Register</button>
      </div>
      <div>
        {pageLayout.login ? <Login /> : <Register />}
      </div>

    </div>
  )
}

export default LoginForm;