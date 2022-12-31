import React, { useContext } from "react";
import RootContext from "./../../../context";
import {
  StyledUl,
  StyledLi,
  StyledDiv,
  StyledLink,
} from "./StyledTechnologySubnavigation";

const TechnologySubnavigation = () => {
  const { technology } = useContext(RootContext);

  console.log("from sub", technology);

  return (
    <StyledUl>
      {technology.map((item, index) => (
        <StyledLi key={index}>
          <StyledDiv>
            <StyledLink to={`/technology/${item.name}`} state={{ ...item }}>
              {index + 1}
            </StyledLink>
          </StyledDiv>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default TechnologySubnavigation;
