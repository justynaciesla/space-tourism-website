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

export const StyledContentWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media ${devices.devices.tablet} {
    flex-direction: column;
    align-items: center;
    left: 0%;
  }
`;

const imgAnimation = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledImg = styled.img`
  width: 415px;
  height: 427px;
  animation-name: ${imgAnimation};
  animation-duration: 3s;

  @media ${devices.devices.tablet} {
    width: 100vw;
    height: 310px;
    order: 1;
    margin: -50px 0px 0px -20px;
    object-fit: cover;
  }

  @media ${devices.devices.mobile} {
    width: 100vw;
    height: 150px;
    order: 1;
    margin: -50px 0px 0px 0px;
  }
`;
