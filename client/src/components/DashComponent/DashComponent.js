import React from 'react';
// styling
import "./style.css";
// components
import Container from "../Container/Container";

function DashComponent() {

  const user = JSON.parse(localStorage.getItem("user"));

  return(
    <Container>
      <h1>Hello {user.firstName}</h1>
      <p>this is the dashboard</p>
      <p>Adding some stuff here</p>
    </Container>
  )
}

export default DashComponent;
