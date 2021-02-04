import React from 'react';
import "./style.css";

function Login() {
  return(
    <form className="form">
          <div className="formInput">
            <input type="email" value="Email"/>
            </div>
          <div className="formInput">
            <input type="password" value="Password"/>
            </div>
        <button>Submit</button>
      </form>
  )
}

export default Login;
