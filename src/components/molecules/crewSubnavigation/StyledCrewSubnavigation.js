import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "./../../../devices/devices";

export const StyledUl = styled.ul`
  position: fixed;
  bottom: 80px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  @media ${devices.devices.mobile} {
    display: none;
  }
`;

export const StyledLi = styled.li`
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

export const StyledLink = styled(NavLink)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #979797;
  cursor: pointer;
  background-color: #979797;

  &:active {
    background-color: white;
    background-color: white;
  }
  &:hover {
    background-color: white;
  }
`;

export const StyledBullet = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #979797;
`;
