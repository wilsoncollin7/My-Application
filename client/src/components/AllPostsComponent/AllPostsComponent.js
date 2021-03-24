import React, { useEffect, useState } from 'react';
import API from "../../utils/API";
// styling
import "./style.css";
// components
import Container from "../Container/Container";
import Post from "../Post/Post";

function AllPostsComponent() {

  const [ allPosts, setAllPosts ] = useState([]);

  const loadPosts = function() {
    API.getAllPosts()
      .then(res => setAllPosts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadPosts()
  }, []);

  return(
    <Container>
      {allPosts.map(({ _id, post, user, date}) => (
        <Post id={_id} key={_id} post={post} user={user} date={date}/>
      ))}
    </Container>
  )
}

export default AllPostsComponent;
