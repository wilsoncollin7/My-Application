import React from 'react';
// components
import HeaderImage from "../components/HeadImage/HeadImage";
import Card from "../components/Card/Card";
import HomeComponent from "../components/HomeComponent/HomeComponent";


function Home() {
  return(
    <>
      <HeaderImage />
      {
        localStorage.getItem("user") ?
        <Card>
          <HomeComponent />
        </Card> : 
        
        <Card>
          <h1>MUST LOG IN</h1>
        </Card>
      }
      
    </>
  )
}

export default Home;
