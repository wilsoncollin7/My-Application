import React from 'react';
// styling
import "./style.css";
// components
import Container from "../Container/Container";
import CreatePostComponent from "../CreatePostComponent/CreatePostComponent";
import AllPostsComponent from "../AllPostsComponent/AllPostsComponent";

function HomeComponent() {

  return(
    <Container>
      <CreatePostComponent />
      <AllPostsComponent />
    </Container>
  )
}

export default HomeComponent;
