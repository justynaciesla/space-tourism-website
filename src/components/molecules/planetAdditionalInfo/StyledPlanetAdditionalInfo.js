import styled from "styled-components";
import { devices } from "../../../devices/devices";

export const StyledWrapperMoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media ${devices.devices.tablet} {
    gap: 50px;
  }

  @media ${devices.devices.mobile} {
    flex-direction: column;
    gap: 50px;
  }
`;

export const StyledAdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 50px 0px 0px;

  @media ${devices.devices.tablet} {
    align-items: center;
    margin: 0px 0px 40px 0px;
  }
`;
