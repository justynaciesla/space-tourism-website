import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledHamburgerMenu = styled.img`
  display: none;

  @media ${devices.devices.tablet} {
    display: none;
  }
  @media ${devices.devices.mobile} {
    width: 24px;
    height: 21px;
    display: block;
    margin: 0px 30px 0px 0px;
  } ;
`;

export const StyledButton = styled.button`
        display: none; 

        @media ${devices.devices.tablet} {
            display: none; 

        @media ${devices.devices.mobile} {
            display: block;
            width: 24px;
            height: 21px;
            border: none;
            background-color: transparent;
            margin: 0px 30px 0px 0px; 
            cursor: pointer; 
  };
`;
