import React, { useContext } from "react";
import RootContext from "./../../../context";
import { StyledLink } from "./StyledDestinationSubnavigation";

import { StyledUl, StyledLi } from "./StyledDestinationSubnavigation";

const DestinationSubnavigation = () => {
  const { destinations } = useContext(RootContext);
  console.log(destinations);

  return (
    <StyledUl>
      {destinations.map((destination, index) => (
        <StyledLi key={index}>
          <StyledLink
            to={`/destination/${destination.name.replace(/\s/g, "")}`}
            state={{ ...destination }}>
            {destination.name.toUpperCase()}
          </StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default DestinationSubnavigation;
