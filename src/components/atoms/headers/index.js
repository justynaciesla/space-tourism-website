import React from "react";
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledHeading5,
  StyledSubheader1,
  StyledSubheader2,
  StyledNavHeader,
  StyledP,
} from "./StyledHeaders";

const Header = ({
  headerType,
  children,
  color,
  fontFamily,
  fontSize,
  textAlign,
  margin,
  padding,
  fontWeight,
  letterSpacing,
  whiteSpace,
  width,
}) => {
  const _renderHeader = () =>
    headerType === "h1" ? (
      <StyledHeading1
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        padding={padding}>
        {children}
      </StyledHeading1>
    ) : headerType === "h2" ? (
      <StyledHeading2
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        padding={padding}>
        {children}
      </StyledHeading2>
    ) : headerType === "h3" ? (
      <StyledHeading3
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        padding={padding}>
        {children}
      </StyledHeading3>
    ) : headerType === "h4" ? (
      <StyledHeading4
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        padding={padding}>
        {children}
      </StyledHeading4>
    ) : headerType === "h5" ? (
      <StyledHeading5
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        letterSpacing={letterSpacing}
        padding={padding}>
        {children}
      </StyledHeading5>
    ) : headerType === "Subh1" ? (
      <StyledSubheader1
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        letterSpacing={letterSpacing}
        padding={padding}>
        {children}
      </StyledSubheader1>
    ) : headerType === "Subh2" ? (
      <StyledSubheader2
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        letterSpacing={letterSpacing}
        padding={padding}>
        {children}
      </StyledSubheader2>
    ) : headerType === "nav" ? (
      <StyledNavHeader
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        letterSpacing={letterSpacing}
        padding={padding}>
        {children}
      </StyledNavHeader>
    ) : (
      <StyledP
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        letterSpacing={letterSpacing}
        padding={padding}
        width={width}>
        {children}
      </StyledP>
    );

  return <>{_renderHeader()}</>;
};

export default Header;
