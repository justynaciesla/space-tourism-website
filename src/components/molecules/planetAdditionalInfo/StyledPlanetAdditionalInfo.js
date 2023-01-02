import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledWrapperMoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledAdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 50px 0px 0px;

  @media ${devices.devices.tablet} {
    align-items: center;
  }
`;
