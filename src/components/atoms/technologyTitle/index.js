import React from "react";
import Header from "../../atoms/headers";
import { StyledWrapper } from "./StyledTechnologyTitle";

const TechnologyTitle = () => {
  return (
    <StyledWrapper>
      <Header
        headerType='h5'
        fontWeight='800'
        color='#979797'
        margin='0px 20px 0px 0px'>
        03
      </Header>
      <Header headerType='h5'>SPACE LAUNCH 101</Header>
    </StyledWrapper>
  );
};

export default TechnologyTitle;
