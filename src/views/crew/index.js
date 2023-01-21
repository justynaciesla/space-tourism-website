import React from "react";
import { useLocation } from "react-router-dom";
import { devices } from "./../../devices/devices";
import CrewDesktop from "../../assets/crew/background-crew-desktop.jpg";
import CrewTablet from "../../assets/crew/background-crew-tablet.jpg";
import CrewMobile from "../../assets/crew/background-crew-mobile.jpg";
import {
  StyledBackground,
  StyledWrapper,
  StyledImg,
  StyledLine,
  StyledImgWrapper,
} from "./StyledCrew.js";
import CrewTitle from "../../components/atoms/crewTitle";
import CrewContent from "../../components/organisms/crewContent";

const Crew = () => {
  const location = useLocation();

  return (
    <>
      <picture>
        <source media={devices.devices.tablet} src={CrewTablet} />
        <source media={devices.devices.mobile} src={CrewMobile} />
        <StyledBackground src={CrewDesktop} alt='background' />
      </picture>

      <CrewTitle />
      <StyledWrapper key={location.key}>
        <CrewContent
          role={location.state.role.toUpperCase()}
          name={location.state.name.toUpperCase()}
          description={location.state.bio}
        />
        <StyledImgWrapper>
          <StyledImg
            src={location.state.images.png.slice(1)}
            alt=''></StyledImg>
          <StyledLine />
        </StyledImgWrapper>
      </StyledWrapper>
    </>
  );
};

export default Crew;
