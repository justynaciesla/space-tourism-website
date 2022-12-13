import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledLogo = styled.img`
  height: 48px;
  width: 48px;
  margin: 0px 65px;

  @media ${devices.devices.mobile} {
    margin: 0px 20px;
  }
`;
