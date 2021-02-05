import React, { useState } from 'react';
import API from "../../utils/API";
// styling
import "./style.css";

function Login() {

  const [formObject, setFormObject] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.email && formObject.password) {
      console.log(formObject);
      API.loginUser({
        email: formObject.email,
        password: formObject.password
      })
      // .then((res) => {
      //   console.log("user sent!")
      // })
      // .catch(err => console.log(err))
    }
  }

  return(
    <form className="form">
          <div className="formInput">
            <input onChange={handleInputChange} type="email" placeholder="Email" name="email"/>
            </div>
          <div className="formInput">
            <input onChange={handleInputChange} type="password" placeholder="Password" name="password"/>
            </div>
        <button onClick={handleFormSubmit} type="submit">Submit</button>
      </form>
  )
}

export default Login;
