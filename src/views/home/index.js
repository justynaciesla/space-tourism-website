import React from "react";
import {devices} from './../../devices/devices'
import SpaceBackground from "../../assets/home/background-home-desktop.jpg"
import SpaceBackgroundTablet from "../../assets/home/background-home-tablet.jpg"
import SpaceBackgroundMobile from "../../assets/home/background-home-mobile.jpg"
import HomeContent from "../../components/organisms/homeContent";
import {StyledBackground} from "./StyledHome"

const Home = () => {
  return (
    <>
    <picture>
      <source media={devices.devices.tablet} srcset={SpaceBackgroundTablet} />
      <source media={devices.devices.mobile} srcset={SpaceBackgroundMobile} />
    <StyledBackground src={SpaceBackground} alt="bckground"/> 
    </picture>
    <HomeContent />
    </>
  );
};

export default Home;
