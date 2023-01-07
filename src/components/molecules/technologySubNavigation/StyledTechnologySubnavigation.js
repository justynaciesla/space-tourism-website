import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { devices } from "./../../../devices/devices";

export const StyledUl = styled.ul`
  position: absolute;
  top: 40%;
  left: 10%;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  @media ${devices.devices.tablet} {
    flex-direction: row;
    top: 70%;
    left: 30%;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  width: 80px;
  height: 80px;
  border: 1px solid #979797;
  background-color: transparent;
  color: white;
  border-radius: 50%;
  margin: 0px 0px 30px 0px;
  text-align: center;
  line-height: 80px;
  font-family: "Bellefair", serif;
  font-size: 32px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
  &.active {
    background-color: white;
    color: black;
  }

  @media ${devices.devices.tablet} {
    margin: 0px 30px 0px 0px;
    width: 60px;
    height: 60px;
    font-size: 24px;
    line-height: 60px;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
    }
    &.active {
      background-color: white;
      color: black;
    }
  }
`;

export const StyledDiv = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid #979797;
  background-color: transparent;
  color: white;
  border-radius: 50%;
  margin: 0px 0px 30px 0px;
  text-align: center;
  line-height: 80px;
  font-family: "Bellefair", serif;
  font-size: 32px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
  &.active {
    background-color: white;
  }

  @media ${devices.devices.tablet} {
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
    }
    &.active {
      background-color: white;
    }
  }
`;
