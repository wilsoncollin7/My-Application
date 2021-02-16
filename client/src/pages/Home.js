import React from 'react';
// components
import HeaderImage from "../components/HeadImage/HeadImage";
import Card from "../components/Card/Card";
import HomeComponent from "../components/HomeComponent/HomeComponent";


function Home() {
  return(
    <>
      {
        localStorage.getItem("user") 
          ?
        <Card header="Home">
          <HomeComponent />
        </Card> 
          : 
        <Card header="MUST LOG IN"></Card>
      }
      
    </>
  )
}

export default Home;
