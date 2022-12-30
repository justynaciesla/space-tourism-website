import React from "react";
import { useLocation } from "react-router-dom";
import { devices } from "./../../devices/devices";
import CrewDesktop from "../../assets/crew/background-crew-desktop.jpg";
import CrewTablet from "../../assets/crew/background-crew-tablet.jpg";
import CrewMobile from "../../assets/crew/background-crew-mobile.jpg";

import {
  StyledBackground,
  StyledContentWrapper,
  StyledWrapper,
  StyledImg,
} from "./StyledCrew.js";

import CrewTitle from "../../components/atoms/crewTitle";
import Header from "../../components/atoms/headers/index";
import CrewSubnavigation from "../../components/molecules/crewSubnavigation";

const Planet = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <picture>
        <source media={devices.devices.tablet} src={CrewTablet} />
        <source media={devices.devices.mobile} src={CrewMobile} />
        <StyledBackground src={CrewDesktop} alt='background' />
      </picture>

      <CrewTitle />
      <StyledWrapper>
        <StyledContentWrapper>
          <div>
            <Header headerType='h4' color='#979797'>
              {location.state.role.toUpperCase()}
            </Header>
            <Header
              headerType='h3'
              margin='10px 0px 30px 0px'
              whiteSpace='nowrap'>
              {location.state.name.toUpperCase()}
            </Header>
            <Header color='#D0D6F9' width='90%'>
              {location.state.bio}
            </Header>
          </div>
          <CrewSubnavigation />
        </StyledContentWrapper>

        <StyledImg src={location.state.images.png.slice(1)} alt=''></StyledImg>
      </StyledWrapper>
    </>
  );
};

export default Planet;
