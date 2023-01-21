import React from "react";
import Header from "./../../atoms/headers";
import {
  StyledAdditionalInfoWrapper,
  StyledWrapperMoreInfo,
} from "./StyledPlanetAdditionalInfo.js";

const PlanetAdditionalInfo = ({ distance, travel }) => {
  return (
    <StyledWrapperMoreInfo>
      <StyledAdditionalInfoWrapper>
        <Header headerType='Subh2' margin='0px 0px 5px 0px' color='#D0D6F9'>
          AVG.DISTACE
        </Header>
        <Header headerType='Subh1'>{distance}</Header>
      </StyledAdditionalInfoWrapper>
      <StyledAdditionalInfoWrapper>
        <Header headerType='Subh2' margin='0px 0px 5px 0px' color='#D0D6F9'>
          EST. TRAVEL TIME
        </Header>
        <Header headerType='Subh1'>{travel}</Header>
      </StyledAdditionalInfoWrapper>
    </StyledWrapperMoreInfo>
  );
};

export default PlanetAdditionalInfo;
