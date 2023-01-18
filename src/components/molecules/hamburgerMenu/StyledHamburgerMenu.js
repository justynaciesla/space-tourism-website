/** @format */

import styled from "styled-components";
import { devices } from "../../../devices/devices";
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled.div`
    display: none;

    @media ${devices.devices.mobile} {
        display: block;
        width: 70vw;
        background-color: black;
        transition: margin 0.5s;
        position: absolute;
        height: 100vh;
        z-index: 5;
        margin: ${({ visibility }) =>
          (visibility === "closed" && "0px -500px 0px 500px") ||
          (visibility === "opened" && "0px 0px 0px 30vw")};
        }
    }
`;

export const StyledCloseIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StyledUl = styled.ul`
  display: none;
  @media ${devices.devices.mobile} {
    list-style: none;
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0px 0px 0px;
  } ;
`;

export const StyledLi = styled.li`
  display: none;

  @media ${devices.devices.mobile} {
    display: block;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    margin: 0px 0px 20px 0px;
  }
`;

export const StyledBold = styled.span`
  display: none;
  @media ${devices.devices.mobile} {
    display: block;
    font-weight: 1000;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: none;
  @media ${devices.devices.mobile} {
    display: block;
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 2.7px;

    &.active {
      text-underline-offset: 2px;
      text-decoration-color: #ffffff;
      text-decoration-thickness: 3px;
    }
    &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-color: #979797;
      text-decoration-thickness: 3px;
    }
  }
`;

export const StyledCloseIcon = styled.img`
  display: none;

  @media ${devices.devices.tablet} {
    display: none;
  }
  @media ${devices.devices.mobile} {
    width: 24px;
    height: 21px;
    display: block;
    margin: 40px 0px 0px 57vw;
  } ;
`;
