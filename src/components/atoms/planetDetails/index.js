import React from "react";
import { StyledHeading2, StyledP } from "../../atoms/headers/StyledHeaders.js";

const PlanetDetails = ({ planetName, planetDescription }) => {
  return (
    <>
      <StyledHeading2>{planetName}</StyledHeading2>
      <StyledP>{planetDescription}</StyledP>
    </>
  );
};

export default PlanetDetails;
