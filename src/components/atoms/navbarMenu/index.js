import React, { useContext } from "react";
import RootContext from "../../../context";
import {
  StyledUl,
  StyledLi,
  StyledBold,
  StyledNavLink,
} from "./StyledNavbarMenu";

const NavbarMenu = () => {
  const { destinations } = useContext(RootContext);

  let Moon = destinations.filter((destination) => {
    return destination.name === "Moon";
  });

  return (
    <StyledUl>
      <StyledLi>
        <StyledNavLink to='/'>
          <StyledBold>00</StyledBold> HOME
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink
          to={`/destination/${Moon[0].name}`}
          state={{ ...Moon[0] }}>
          <StyledBold>01</StyledBold> DESTINSTION
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to='/crew'>
          <StyledBold>02</StyledBold> CREW
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to='/technology'>
          <StyledBold>03</StyledBold> TECHNOLOGY
        </StyledNavLink>
      </StyledLi>
    </StyledUl>
  );
};

export default NavbarMenu;
