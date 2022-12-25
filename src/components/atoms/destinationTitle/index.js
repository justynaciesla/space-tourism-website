import React from "react";
import { StyledHeading5 } from "../../atoms/headers/StyledHeaders";
import { StyledWrapper } from "./StyledDestinationTitle";

const DestinationTitle = () => {
  return (
    <StyledWrapper>
      <StyledHeading5
        headerType='h5'
        fontWeight='800'
        color='#979797'
        margin='0px 20px 0px 0px'>
        01
      </StyledHeading5>
      <StyledHeading5 headerType='h5'>PICK YOUR DESTINATION</StyledHeading5>
    </StyledWrapper>
  );
};

export default DestinationTitle;
