import React from 'react';
// styling
import "./style.css";

function Register() {
  return(
      <form className="form">
          <div className="formInput">
            <input type="text" value="First Name"/>
            </div>
          <div className="formInput">
            <input type="text" value="Last Name"/>
            </div>
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

export default Register;
