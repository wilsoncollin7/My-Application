import React from 'react';
// styling
import "./style.css";

function Post(props) {
  return(
    <div className="postContainer">
      <h1>{props.post}</h1>
      <span>{props.user} </span>
      <span>{props.date}</span>
    </div>
  )
}

export default Post;
