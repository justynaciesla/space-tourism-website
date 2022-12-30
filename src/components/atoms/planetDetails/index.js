import React from "react";
import { StyledHeading2, StyledP } from "../../atoms/headers/StyledHeaders.js";

const PlanetDetails = ({ planetName, planetDescription }) => {
  return (
    <>
      <StyledHeading2>{planetName}</StyledHeading2>
      <StyledP margin='0px 0px 20px 0px' color='#D0D6F9'>
        {planetDescription}
      </StyledP>
    </>
  );
};

export default PlanetDetails;
