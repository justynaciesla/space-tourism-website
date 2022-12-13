import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledA = styled.a`
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  color: ${({ color = "white" }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  margin: ${({ margin }) => margin};
`;

export const StyledLink = styled(Link)`
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  color: ${({ color = "white" }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  margin: ${({ margin }) => margin};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  &.active a {
    text-decoration: underline;
  }
`;
