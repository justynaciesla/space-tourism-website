import React from "react";
import Header from "./../../atoms/headers";
import { StyledWrapper } from "./StyledCrewTitle";

const CrewTitle = () => {
  return (
    <StyledWrapper>
      <Header
        headerType='h5'
        fontWeight='800'
        color='#979797'
        margin='0px 20px 0px 0px'>
        02
      </Header>
      <Header headerType='h5'>MEET YOUR CREW</Header>
    </StyledWrapper>
  );
};

export default CrewTitle;
