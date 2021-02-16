import React from 'react';
// styling
import "./style.css";
// components
import Container from "../Container/Container";
import CreatePostComponent from "../CreatePostComponent/CreatePostComponent";

function HomeComponent() {

  return(
    <Container>
      <CreatePostComponent />
      <p>Adding some stuff here</p>
    </Container>
  )
}

export default HomeComponent;
