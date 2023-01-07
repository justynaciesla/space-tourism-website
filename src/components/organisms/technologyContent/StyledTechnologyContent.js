import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media ${devices.devices.tablet} {
    width: 90%;
    margin: 140px 0px 0px 0px;
    align-items: center;
    order: 2;
  }
`;
