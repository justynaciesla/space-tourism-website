import React from "react";
import { StyledUl, StyledLi, StyledBold, StyledNavLink} from "./StyledNavbarMenu";


const NavbarMenu = () => {
  return (
    <StyledUl>
      <StyledLi>
        <StyledNavLink 
       to="/"><StyledBold>00</StyledBold> HOME</StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to="/destination"><StyledBold>01</StyledBold> DESTINSTION</StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to="/crew"><StyledBold>02</StyledBold> CREW</StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to="/technology"><StyledBold>03</StyledBold> TECHNOLOGY</StyledNavLink>
      </StyledLi>
    </StyledUl>
  );
};

export default NavbarMenu;
