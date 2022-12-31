import React from "react";
import { useLocation } from "react-router-dom";
import { devices } from "./../../devices/devices";
import TechnologyDesktop from "../../assets/technology/background-technology-desktop.jpg";
import TechnologyTablet from "../../assets/technology/background-technology-tablet.jpg";
import TechnologyMobile from "../../assets/technology/background-technology-mobile.jpg";

import {
  StyledBackground,
  StyledContentWrapper,
  StyledWrapper,
  StyledImg,
} from "./StyledTechnology";
import TechnologyTitle from "../../components/atoms/technologyTitle";
import TechnologySubnavigation from "../../components/molecules/technologySubNavigation";
import Header from "../../components/atoms/headers";

const Technology = () => {
  const location = useLocation();
  console.log("from tech", location);

  return (
    <>
      <picture>
        <source media={devices.devices.tablet} src={TechnologyTablet} />
        <source media={devices.devices.mobile} src={TechnologyMobile} />
        <StyledBackground src={TechnologyDesktop} alt='background' />
      </picture>

      <TechnologyTitle />
      <TechnologySubnavigation />

      <StyledContentWrapper>
        <StyledWrapper>
          <Header headerType='nav' color='#D0D6F9' margin='0px 0px 10px 0px'>
            THE TERMINOLOGY...
          </Header>
          <Header headerType='h3' margin='0px 0px 30px 0px'>
            {location.state.name.toUpperCase()}
          </Header>
          <Header color='#D0D6F9'>{location.state.description}</Header>
        </StyledWrapper>

        <StyledImg
          src={location.state.images.portrait.slice(1)}
          alt=''></StyledImg>
      </StyledContentWrapper>
    </>
  );
};

export default Technology;
