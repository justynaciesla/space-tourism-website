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
  StyledWrapperMoreInfo,
  StyledAdditionalInfoWrapper,
} from "./StyledPlanet";
import {
  StyledHeading2,
  StyledSubheader1,
  StyledSubheader2,
} from "../../components/atoms/headers/StyledHeaders";
import { StyledP } from "../../components/atoms/headers/StyledHeaders";
import DestinationContent from "../../components/organisms/destinationContent";
import DestinationSubnavigation from "../../components/molecules/destinationSubnavigation";

const Planet = () => {
  const location = useLocation();

  return (
    <>
      <picture>
        <source media={devices.devices.tablet} src={DestinationTablet} />
        <source media={devices.devices.mobile} src={DestinationMobile} />
        <StyledBackground src={DestinationDesktop} alt='background' />
      </picture>

      <DestinationContent />
      <StyledWrapper style={{ position: "absolute" }}>
        <StyledImg src={location.state.images.png.slice(1)} alt='' />
        <StyledContentWrapper>
          <DestinationSubnavigation />
          <StyledHeading2>{location.state.name.toUpperCase()}</StyledHeading2>
          <StyledP>{location.state.description}</StyledP>
          <StyledLine></StyledLine>
          <StyledWrapperMoreInfo>
            <StyledAdditionalInfoWrapper>
              <StyledSubheader2>AVG.DISTACE</StyledSubheader2>
              <StyledSubheader1>
                {location.state.distance.toUpperCase()}
              </StyledSubheader1>
            </StyledAdditionalInfoWrapper>
            <StyledAdditionalInfoWrapper>
              <StyledSubheader2>EST. TRAVEL TIME</StyledSubheader2>
              <StyledSubheader1>
                {location.state.travel.toUpperCase()}
              </StyledSubheader1>
            </StyledAdditionalInfoWrapper>
          </StyledWrapperMoreInfo>
        </StyledContentWrapper>
      </StyledWrapper>
    </>
  );
};

export default Planet;
