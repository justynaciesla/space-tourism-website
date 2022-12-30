import React, { useContext } from "react";
import RootContext from "./../../../context";
import { StyledLink } from "./StyledCrewSubnavigation";
import { StyledUl, StyledLi, StyledBullet } from "./StyledCrewSubnavigation";

const CrewSubnavigation = () => {
  const { crew } = useContext(RootContext);

  console.log("from sub", crew);

  return (
    <StyledUl>
      {crew.map((member, index) => (
        <StyledLi key={index}>
          <StyledLink
            to={`/crew/${member.role}`}
            state={{ ...member }}></StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default CrewSubnavigation;
