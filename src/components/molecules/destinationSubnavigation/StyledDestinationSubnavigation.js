import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "./../../../devices/devices";

export const StyledUl = styled.ul`
  position: absolute;
  padding: 0px 0px 0px 10px;
  margin: -50px 0px 0px 0px;
  width: 285px;
  height: 34px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
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

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;

  &.active {
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-color: #ffffff;
    text-decoration-thickness: 3px;
  }
  &:hover {
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-color: #979797;
    text-decoration-thickness: 3px;
  }
`;
