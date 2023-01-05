import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;

  @media ${devices.devices.tablet} {
    align-items: center;
    justify-content: flex-end;
    width: 80%;
  }

  @media ${devices.devices.tablet} {
    align-items: center;
    justify-content: flex-start;
    width: 80%;
  }
`;
