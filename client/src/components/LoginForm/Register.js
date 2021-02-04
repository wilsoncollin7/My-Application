import React, { useState } from 'react';
// styling
import "./style.css";

function Register() {

  const [formObject, setFormObject] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.firstName && formObject.lastName && formObject.email && formObject.password) {
      console.log(formObject);
    }
  }

  return(
      <form className="form">
          <div className="formInput">
            <input onChange={handleInputChange} type="text" placeholder="First Name" name="firstName"/>
            </div>
          <div className="formInput">
            <input onChange={handleInputChange} type="text" placeholder="Last Name" name="lastName"/>
            </div>
          <div className="formInput">
            <input onChange={handleInputChange} type="email" placeholder="Email" name="email"/>
            </div>
          <div className="formInput">
            <input onChange={handleInputChange} type="password" placeholder="Password" name="password"/>
            </div>
        <button onClick={handleFormSubmit} type="submit">Register</button>
      </form>
  )
}

export default Register;
