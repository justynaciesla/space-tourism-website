import styled from "styled-components";
import { devices } from "../../devices/devices";

export const StyledBackground = styled.img`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: -1;
`;

export const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  top: 43%;
  left: 10%;

  @media ${devices.devices.tablet} {
    top: 25%;
    flex-direction: column;
    width: 100%;
    left: 10%;
    align-items: center;
  }

  @media ${devices.devices.mobile} {
    top: 50%;
    flex-direction: column;
    width: 100%;
    left: 10%;
    align-items: center;
  }
`;

export const StyledImg = styled.img`
  position: fixed;
  bottom: 0px;
  left: 50%;
  height: 70%;
  width: auto;

  @media ${devices.devices.tablet} {
    height: 40%;
    width: auto;
    left: 25%;
  }

  @media ${devices.devices.mobile} {
    height: 220px;
    width: auto;
    top: 10%;
    left: 10%;
  }
`;
