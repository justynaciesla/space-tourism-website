import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "./../../../devices/devices";

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 0px;

  @media ${devices.devices.tablet} {
    position: absolute;
    margin: 250px 0px -50px 200px;
    order: 2;
  }

  @media ${devices.devices.mobile} {
    position: absolute;
    margin: -20px 0px 0px 0px;
    order: 2;
  }
`;

export const StyledLink = styled(NavLink)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #979797;
  margin: 0px 30px 0px 0px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
  &.active {
    background-color: white;
    background-color: white;
  }
`;
