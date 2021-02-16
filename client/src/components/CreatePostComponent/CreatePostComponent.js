import React, { useState } from 'react';
import API from "../../utils/API";
// styling
import "./style.css";
// components
import Container from "../Container/Container";

function CreatePostComponent() {

  const [postObject, setPostObject] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPostObject({...postObject, [name]: value})
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    if (postObject.post) {
      console.log(postObject);
      API.newPost({
        firstName: postObject.post
      })
      // .then((res) => {
      //   console.log("Post Sent!")
      // })
      // .catch(err => console.log(err))
    }
  }

  return(
    <Container>
      <form className="form">
        <div className="formInput">
          <input onChange={handleInputChange} type="text" placeholder="Create Post" name="post"/>
        </div>
        <button onClick={handleFormSubmit} type="submit">Submit</button>
      </form>
    </Container>
  )
}

export default CreatePostComponent;
