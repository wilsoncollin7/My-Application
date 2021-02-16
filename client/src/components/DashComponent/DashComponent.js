import React, { useEffect, useState } from 'react';
import API from "../../utils/API";
// styling
import "./style.css";
// components
import Container from "../Container/Container";
import Post from "../Post/Post";

function DashComponent() {

  const [ allPosts, setAllPosts ] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadPosts = function() {
    API.getPosts(user.id)
      // .then(res => {
      //   setAllPosts(res.data)
      //   console.log(allPosts)
      // })
      // .catch(err => console.log(err));
  };

  useEffect(() => {
    loadPosts()
  }, []);

  return(
    <Container>
      <h1>Hello {user.firstName}</h1>
      {/* {allPosts.map(({ _id, post, user, date}) => (
        <Post key={_id} post={post} user={user} date={date}/>
      ))} */}
    </Container>
  )
}

export default DashComponent;
