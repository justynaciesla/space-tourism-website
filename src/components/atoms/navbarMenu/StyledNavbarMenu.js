import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "./../../../devices/devices";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;

  &.active {
    text-decoration: underline;
    text-underline-offset: 38px;
    text-decoration-color: #ffffff;
    text-decoration-thickness: 3px;
    transition: opacity 1s ease-in-out;
  }
  &:hover {
    text-decoration: underline;
    text-underline-offset: 38px;
    text-decoration-color: #979797;
    text-decoration-thickness: 3px;
    transition: opacity 1s ease-in-out;
  }

  @media ${devices.devices.tablet} {
    font-size: 14px;
  }
`;
export const StyledUl = styled.ul`
  width: 50%;
  height: 93px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 5%);
  backdrop-filter: blur(2rem);

  @media ${devices.devices.mobile} {
    display: none;
  }
`;

export const StyledLi = styled.li`
  font-family: "Barlow Condensed", sans-serif;
  margin: 0px 30px 0px 0px;
  font-size: 16px;
  letter-spacing: 2.7px;
  white-space: nowrap;
`;

export const StyledBold = styled.span`
  font-weight: 1000;

  @media ${devices.devices.tablet} {
    display: none;
  }
`;
