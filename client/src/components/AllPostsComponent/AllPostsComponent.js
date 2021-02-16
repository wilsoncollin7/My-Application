import React, { useEffect } from 'react';
import API from "../../utils/API";
// styling
import "./style.css";
// components
import Container from "../Container/Container";

function AllPostsComponent() {

  const loadPosts = function() {
    API.getAllPosts()
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadPosts()
  });

  return(
    <Container>
      <h1>all posts</h1>
    </Container>
  )
}

export default AllPostsComponent;
