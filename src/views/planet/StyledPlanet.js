import styled from "styled-components";
import { devices } from "./../../devices/devices";

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
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
  top: 43%;
  left: 12%;

  @media ${devices.devices.tablet} {
    flex-direction: column;
    align-items: center;
    top: 23%;
  }
`;

export const StyledImg = styled.img`
  height: 350px;
  width: 350px;

  @media ${devices.devices.tablet} {
    height: 300px;
    width: 300px;
    margin: 0px 0px 80px 0px;
  }
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 445px;
  @media ${devices.devices.tablet} {
    align-items: center;
    width: 100%;
  }
`;

export const StyledLine = styled.div`
  height: 1px;
  background: #979797;
  width: 444px;
  margin: 20px 0px 20px 0px;
  @media ${devices.devices.tablet} {
    width: 100%;
  }
`;
