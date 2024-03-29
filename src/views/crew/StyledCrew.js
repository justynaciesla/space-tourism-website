import styled, { keyframes } from "styled-components";
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
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  top: 43%;

  @media ${devices.devices.tablet} {
    top: 25%;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: -80px 0px 0px 0px;
  }

  @media ${devices.devices.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const crewAnimation = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledImg = styled.img`
  margin: -100px 0px 0px 0px;
  animation-name: ${crewAnimation};
  animation-duration: 3s;
  @media ${devices.devices.tablet} {
    height: 40%;
    width: auto;
    margin: 80px 0px 0px 0px;
  }

  @media ${devices.devices.mobile} {
    height: 220px;
    width: auto;
    margin: 40px 0px 0px 0px;
  }
`;

export const StyledLine = styled.div`
  height: 1px;
  background: #979797;
  width: 100%;
`;

export const StyledImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.devices.mobile} {
    order: 1;
  }
`;
