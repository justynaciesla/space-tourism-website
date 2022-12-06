import React from "react";
import Logo from "../../atoms/logo";
import Line from '../../atoms/line/index';
import NavbarMenu from "../../atoms/navbarMenu";
import {StyledNavigationWrapper} from './StyledNavbar'

const Navbar = () => {
  return (
   <StyledNavigationWrapper> 
    <Logo />
    <Line />
    <NavbarMenu />
   </StyledNavigationWrapper>
  )
};

export default Navbar;
