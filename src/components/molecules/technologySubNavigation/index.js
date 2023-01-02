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
        <StyledLink
          to={`/technology/${item.name.replace(/\s/g, "")}`}
          state={{ ...item }}>
          {index + 1}
        </StyledLink>
      ))}
    </StyledUl>
  );
};

export default TechnologySubnavigation;
