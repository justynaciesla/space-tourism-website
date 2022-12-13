import React from "react";
import Logo from "../../atoms/logo";
import Line from '../../atoms/line/index';
import NavbarMenu from "../../atoms/navbarMenu";
import {StyledNavigationWrapper} from './StyledNavbar'
import HamburgerMenuIcon from "../../atoms/hamburgerMenuIcon";

const Navbar = () => {
  return (
   <StyledNavigationWrapper> 
    <Logo />
    <Line />
    <NavbarMenu />
    <HamburgerMenuIcon/>
   </StyledNavigationWrapper>
  )
};

export default Navbar;
