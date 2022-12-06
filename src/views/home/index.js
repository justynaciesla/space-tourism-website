import React from "react";
import SpaceBackground from "../../assets/home/background-home-desktop.jpg"
import HomeContent from "../../components/organisms/homeContent";
import {StyledBackground, StyledDiv} from "./StyledHome"

const Home = () => {
  return (
    <StyledDiv>
    <StyledBackground src={SpaceBackground} alt="bckground"/> 
      <HomeContent />
  
    </StyledDiv>
  );
};

export default Home;
