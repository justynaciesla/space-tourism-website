import React from "react";
import { StyledWrapper } from "./StyledTechnologyContent";
import Header from "../../atoms/headers/index.js";

const TechnologyContent = ({ name, description }) => {
  return (
    <StyledWrapper>
      <Header headerType='nav' color='#D0D6F9' margin='0px 0px 10px 0px'>
        THE TERMINOLOGY...
      </Header>
      <Header headerType='h3' margin='0px 0px 30px 0px'>
        {name}
      </Header>
      <Header color='#D0D6F9'>{description}</Header>
    </StyledWrapper>
  );
};

export default TechnologyContent;
