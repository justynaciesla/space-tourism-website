import styled, { keyframes } from "styled-components";
import { devices } from "../../../devices/devices";

const entryAnimation = keyframes`
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

const planetNameAnimation = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledHeading1 = styled.h1`
  font-family: "Bellefair", serif;
  font-size: ${({ fontSize = "150px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px" }) => margin};
  padding: ${({ padding = "0px" }) => padding};
  animation-name: ${entryAnimation};
  animation-duration: 2s;

  @media ${devices.devices.tablet} {
    font-size: 150px;
  }

  @media ${devices.devices.mobile} {
    font-size: 80px;
  }
`;

export const StyledHeading2 = styled.h2`
  font-family: "Bellefair", serif;
  font-size: ${({ fontSize = "100px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px" }) => margin};
  padding: ${({ padding = "0px" }) => padding};
  animation-name: ${planetNameAnimation};
  animation-duration: 2s;

  @media ${devices.devices.tablet} {
    font-size: 80px;
  }

  @media ${devices.devices.mobile} {
    font-size: 56px;
  }
`;

export const StyledHeading3 = styled.h3`
  font-family: "Bellefair", serif;
  font-size: ${({ fontSize = "56px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px" }) => margin};
  padding: ${({ padding = "0px" }) => padding};
  white-space: ${({ whiteSpace = "nowrap" }) => whiteSpace};
  animation-name: ${planetNameAnimation};
  animation-duration: 2s;

  @media ${devices.devices.tablet} {
    font-size: 40px;
  }

  @media ${devices.devices.mobile} {
    font-size: 24px;
  }
`;

export const StyledHeading4 = styled.h4`
  font-family: "Bellefair", serif;
  font-size: ${({ fontSize = "32px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px" }) => margin};
  padding: ${({ padding = "0px" }) => padding};

  @media ${devices.devices.tablet} {
    font-size: 24px;
  }

  @media ${devices.devices.mobile} {
    font-size: 16px;
  }
`;

export const StyledHeading5 = styled.h5`
  font-family: "Barlow Condensed", sans-serif;
  font-size: ${({ fontSize = "28px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px" }) => margin};
  letter-spacing: ${({ letterSpacing = "4.72px" }) => letterSpacing};
  padding: ${({ padding = "0px" }) => padding};

  @media ${devices.devices.tablet} {
    font-size: 20px;
    letter-spacing: 3.38px;
  }

  @media ${devices.devices.mobile} {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`;

export const StyledSubheader1 = styled.p`
  font-family: "Bellefair", serif;
  font-size: ${({ fontSize = "28px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px" }) => margin};
  letter-spacing: ${({ letterSpacing = "2.35px" }) => letterSpacing};
  padding: ${({ padding = "0px" }) => padding};
`;

export const StyledSubheader2 = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: ${({ fontSize = "14px" }) => fontSize};
  letter-spacing: ${({ letterSpacing = "2.35px" }) => letterSpacing};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px" }) => margin};
  padding: ${({ padding = "0px" }) => padding};
`;

export const StyledNavHeader = styled.p`
  font-family: "Bellefair", serif;
  font-size: ${({ fontSize = "16px" }) => fontSize};
  letter-spacing: ${({ letterSpacing = "2.7px" }) => letterSpacing};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px" }) => margin};
  padding: ${({ padding = "0px" }) => padding};
`;

export const StyledP = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: ${({ fontSize = "18px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px" }) => margin};
  letter-spacing: ${({ letterSpacing = "4.72 px" }) => letterSpacing};
  padding: ${({ padding = "0px" }) => padding};
  line-height: 32px;
  text-align: justify;
  text-justify: inter-word;
  width: ${({ width }) => width};

  @media ${devices.devices.tablet} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${devices.devices.mobile} {
    font-size: 15px;
    line-height: 25px;
  }
`;
