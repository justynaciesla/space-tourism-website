import React from "react";
import Header from "./../../atoms/headers";

const PlanetDetails = ({ planetName, planetDescription }) => {
  return (
    <>
      <Header headerType='h2'>{planetName}</Header>
      <Header margin='0px 0px 20px 0px' color='#D0D6F9'>
        {planetDescription}
      </Header>
    </>
  );
};

export default PlanetDetails;
