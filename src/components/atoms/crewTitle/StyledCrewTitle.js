import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 50px 0px 0px 0px;

  @media ${devices.devices.tablet} {
    margin: -100px 0px 0px 0px;
  }

  @media ${devices.devices.mobile} {
    margin: -80px 0px 0px 0px;
  }
`;
