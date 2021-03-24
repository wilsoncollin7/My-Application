import React from 'react';
import API from "../../utils/API";
// styling
import "./style.css";

function Post(props) {

  function handleOnClick() {
    console.log(props.id)
    API.deletePosts(props.id)
      .catch(err => console.log(err));
  }

  return(
    <div className="postContainer">
      <h1>{props.post}</h1>
      <span>{props.user} </span>
      <span>{props.date}</span>
      {props.home ? <></> : <button onClick={handleOnClick} className="postBtn">DELETE</button>}
    </div>
  )
}

export default Post;
