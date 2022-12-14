import React from "react";
import {
  StyledSubheader1,
  StyledSubheader2,
} from "../../atoms/headers/StyledHeaders.js";
import {
  StyledAdditionalInfoWrapper,
  StyledWrapperMoreInfo,
} from "./StyledPlanetAdditionalInfo.js";

const PlanetAdditionalInfo = ({ distance, travel }) => {
  return (
    <StyledWrapperMoreInfo>
      <StyledAdditionalInfoWrapper>
        <StyledSubheader2 margin='0px 0px 10px 0px' color='#D0D6F9'>
          AVG.DISTACE
        </StyledSubheader2>
        <StyledSubheader1>{distance}</StyledSubheader1>
      </StyledAdditionalInfoWrapper>
      <StyledAdditionalInfoWrapper>
        <StyledSubheader2 margin='0px 0px 10px 0px' color='#D0D6F9'>
          EST. TRAVEL TIME
        </StyledSubheader2>
        <StyledSubheader1>{travel}</StyledSubheader1>
      </StyledAdditionalInfoWrapper>
    </StyledWrapperMoreInfo>
  );
};

export default PlanetAdditionalInfo;
