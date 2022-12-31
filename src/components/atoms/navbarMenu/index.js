import React, { useContext } from "react";
import RootContext from "../../../context";
import {
  StyledUl,
  StyledLi,
  StyledBold,
  StyledNavLink,
} from "./StyledNavbarMenu";

const NavbarMenu = () => {
  const { destinations, crew, technology } = useContext(RootContext);

  let Moon = destinations.filter((destination) => {
    return destination.name === "Moon";
  });

  let DouglasHurley = crew.filter((crew) => {
    return crew.name === "Douglas Hurley";
  });

  let LaunchVehicle = technology.filter((technology) => {
    return technology.name === "Launch vehicle";
  });

  return (
    <StyledUl>
      <StyledLi>
        <StyledNavLink to='/'>
          <StyledBold>00</StyledBold> HOME
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to={`/destination/$[0].name}`} state={{ ...Moon[0] }}>
          <StyledBold>01</StyledBold> DESTINSTION
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink
          to={`/crew/${DouglasHurley[0].name}`}
          state={{ ...DouglasHurley[0] }}>
          <StyledBold>02</StyledBold> CREW
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink
          to={`/technology/${LaunchVehicle[0].name}`}
          state={{ ...LaunchVehicle[0] }}>
          <StyledBold>03</StyledBold> TECHNOLOGY
        </StyledNavLink>
      </StyledLi>
    </StyledUl>
  );
};

export default NavbarMenu;
