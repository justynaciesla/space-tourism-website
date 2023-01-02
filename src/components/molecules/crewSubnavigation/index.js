import React, { useContext } from "react";
import RootContext from "./../../../context";
import { StyledLink } from "./StyledCrewSubnavigation";
import { StyledUl, StyledLi, StyledBullet } from "./StyledCrewSubnavigation";

const CrewSubnavigation = () => {
  const { crew } = useContext(RootContext);

  return (
    <StyledUl>
      {crew.map((member, index) => (
        <StyledLink
          to={`/crew/${member.role.replace(/\s/g, "")}`}
          state={{ ...member }}></StyledLink>
      ))}
    </StyledUl>
  );
};

export default CrewSubnavigation;
