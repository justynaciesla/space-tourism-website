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
          <StyledNavLink to='/destination'>01 DESTINSTION</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to='/crew'>02 CREW</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to='/technology'>03 TECHNOLOGY</StyledNavLink>
        </StyledLi>
      </StyledUl>
    </StyledWrapper>
  );
};

export default HamburgerMenu;
