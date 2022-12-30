import React from "react";
import { StyledHeading5 } from "../../atoms/headers/StyledHeaders";
import { StyledWrapper } from "./StyledCrewTitle";

const CrewTitle = () => {
  return (
    <StyledWrapper>
      <StyledHeading5
        headerType='h5'
        fontWeight='800'
        color='#979797'
        margin='0px 20px 0px 0px'>
        02
      </StyledHeading5>
      <StyledHeading5 headerType='h5'>MEET YOUR CREW</StyledHeading5>
    </StyledWrapper>
  );
};

export default CrewTitle;
