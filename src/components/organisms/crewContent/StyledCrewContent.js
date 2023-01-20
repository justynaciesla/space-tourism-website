import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;

  @media ${devices.devices.tablet} {
    justify-content: flex-end;
    width: 80%;
  }

  @media ${devices.devices.tablet} {
    align-items: center;
    justify-content: flex-start;
    width: 80%;
  }
`;

export const StyledWrapper = styled.div`
  margin: 30px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  @media ${devices.devices.tablet} {
    order: 1;
    align-items: center;
    justify-content: center;
  }
`;
