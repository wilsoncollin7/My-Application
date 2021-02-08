import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
// styling
import "./style.css";

function Login() {

  const [formObject, setFormObject] = useState({});

  const [noUser, setNoUser] = useState(false);

  const history = useHistory();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.email && formObject.password) {
      API.loginUser({
        email: formObject.email,
        password: formObject.password
      })
      .then(() => {
        console.log("Logging in User...");
      })
      .catch(err => console.log(err));

      API.getUser({
        email: formObject.email
      })
      .then(res => {
        if (res.data === "User Does Not Exist") {
          console.log("no user exists")
          setNoUser(true);
        } else {
          setNoUser(false);
          const user = {
            firstName: res.data[0].firstName,
            lastName: res.data[0].lastName,
            email: res.data[0].email,
            id: res.data[0]._id,
          }
          localStorage.setItem("user", JSON.stringify(user));
          console.log(user)
          history.goBack();
        }
      })
      .catch(err => console.log(err));
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
        {noUser && <p className="userExistsWarning">*No User Found</p>}
      </form>
  )
}

export default Login;
