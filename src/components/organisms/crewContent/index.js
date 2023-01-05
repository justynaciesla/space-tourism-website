import React from "react";
import { StyledContentWrapper } from "./StyledCrewContent.js";
import Header from "../../atoms/headers/index";
import CrewSubnavigation from "../../molecules/crewSubnavigation";

const CrewContent = ({ role, name, description }) => {
  return (
    <StyledContentWrapper>
      <div style={{ margin: "50px 0px 0px 0px" }}>
        <Header headerType='h4' color='#979797'>
          {role}
        </Header>
        <Header headerType='h3' margin='10px 0px 30px 0px' whiteSpace='nowrap'>
          {name}
        </Header>
        <Header color='#D0D6F9' width='90%'>
          {description}
        </Header>
      </div>
      <CrewSubnavigation />
    </StyledContentWrapper>
  );
};

export default CrewContent;
