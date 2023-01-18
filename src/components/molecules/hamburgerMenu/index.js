import React, { useContext } from "react";
import RootContext from "../../../context";
import CloseIcon from "../../../assets/shared/icon-close.svg";
import {
  StyledWrapper,
  StyledUl,
  StyledLi,
  StyledNavLink,
  StyledCloseIcon,
} from "./StyledHamburgerMenu";

const HamburgerMenu = () => {
  const { isHmburgerMenuOpen, toggleHamburgerMenu } = useContext(RootContext);

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
    <StyledWrapper visibility={isHmburgerMenuOpen}>
      <StyledCloseIcon
        src={CloseIcon}
        alt='closeButton'
        onClick={toggleHamburgerMenu}
      />

      <StyledUl>
        <StyledLi>
          <StyledNavLink to='/'>00 HOME</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink
            to={`/destination/${Moon[0].name}`}
            state={{ ...Moon[0] }}>
            01 DESTINSTION
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink
            to={`/crew/${DouglasHurley[0].role.replace(/\s/g, "")}`}
            state={{ ...DouglasHurley[0] }}>
            02 CREW
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink
            to={`/technology/${LaunchVehicle[0].name.replace(/\s/g, "")}`}
            state={{ ...LaunchVehicle[0] }}>
            03 TECHNOLOGY
          </StyledNavLink>
        </StyledLi>
      </StyledUl>
    </StyledWrapper>
  );
};

export default HamburgerMenu;
