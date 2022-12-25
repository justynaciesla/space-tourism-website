import React, { useContext } from "react";
import RootContext from "../../../context";
import { StyledLink } from "./StyledExploreButton";

const ExploreButton = () => {
  const { destinations } = useContext(RootContext);

  let Moon = destinations.filter((destination) => {
    return destination.name === "Moon";
  });

  return (
    <StyledLink to={`/destination/${Moon[0].name}`} state={{ ...Moon[0] }}>
      EXPLORE
    </StyledLink>
  );
};

export default ExploreButton;
