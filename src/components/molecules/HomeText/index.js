import React from "react";
import Header from "./../../atoms/headers";
import { StyledWrapper, StyledP } from "./StyledHomeText";

const HomeText = () => {
  return (
    <StyledWrapper>
      <Header headerType='h5' color='#D0D6F9' fontWeight='400'>
        So, you want to travel to
      </Header>
      <Header headerType='h1'>SPACE</Header>
      <StyledP>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </StyledP>
    </StyledWrapper>
  );
};

export default HomeText;
