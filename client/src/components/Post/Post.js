import React from 'react';
// styling
import "./style.css";

function Post(props) {

  return(
    <div className="postContainer">
      <h1>{props.post}</h1>
      <span>{props.user} </span>
      <span>{props.date}</span>
      {props.home ? <></> : <button onClick={() => props.handler(props.id)} className="postBtn">DELETE</button>}
    </div>
  )
}

export default Post;
