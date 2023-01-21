import React from "react";
import Header from "./../../atoms/headers";
import { StyledWrapper } from "./StyledDestinationTitle";

const DestinationTitle = () => {
  return (
    <StyledWrapper>
      <Header
        headerType='h5'
        fontWeight='800'
        color='#979797'
        margin='0px 20px 0px 0px'>
        01
      </Header>
      <Header headerType='h5'>PICK YOUR DESTINATION</Header>
    </StyledWrapper>
  );
};

export default DestinationTitle;
