import React from "react";
import { useLocation } from "react-router-dom";
import { devices } from "./../../devices/devices";
import DestinationDesktop from "../../assets/destination/background-destination-desktop.jpg";
import DestinationTablet from "../../assets/destination/background-destination-tablet.jpg";
import DestinationMobile from "../../assets/destination/background-destination-mobile.jpg";
import {
  StyledBackground,
  StyledImg,
  StyledWrapper,
  StyledContentWrapper,
  StyledLine,
} from "./StyledPlanet";
import DestinationSubnavigation from "../../components/molecules/destinationSubnavigation";
import PlanetAdditionalInfo from "../../components/molecules/planetAdditionalInfo";
import PlanetDetails from "../../components/atoms/planetDetails";
import DestinationTitle from "../../components/atoms/destinationTitle";

const Planet = () => {
  const location = useLocation();

  return (
    <>
      <picture>
        <source media={devices.devices.tablet} src={DestinationTablet} />
        <source media={devices.devices.mobile} src={DestinationMobile} />
        <StyledBackground src={DestinationDesktop} alt='background' />
      </picture>

      <DestinationTitle />
      <StyledWrapper key={location.key}>
        <StyledImg src={location.state.images.png.slice(1)} alt='' />
        <StyledContentWrapper>
          <DestinationSubnavigation />
          <PlanetDetails
            planetName={location.state.name.toUpperCase()}
            planetDescription={location.state.description}
          />
          <StyledLine></StyledLine>
          <PlanetAdditionalInfo
            distance={location.state.distance.toUpperCase()}
            travel={location.state.travel.toUpperCase()}
          />
        </StyledContentWrapper>
      </StyledWrapper>
    </>
  );
};

export default Planet;
