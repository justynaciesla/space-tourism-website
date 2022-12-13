import React from "react";
import { StyledA, StyledLink, StyledNavLink } from "./StyledLink";

const Link = ({
  linkType,
  children,
  to,
  color,
  fontFamily,
  fontSize,
  margin,
  textDecoration,
  letterSpacing,
  onClickFn,
}) => {
  const _renderLink = () =>
    linkType === "a" ? (
      <StyledA
        textDecoration={textDecoration}
        href={to}
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        margin={margin}
        onClickFn={onClickFn}>
        {children}
      </StyledA>
    ) : (
      (linkType = "link" ? (
        <StyledLink
          textDecoration={textDecoration}
          to={to}
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}
          margin={margin}
          onClickFn={onClickFn}>
          {children}
        </StyledLink>
      ) : (
        <StyledNavLink
          textDecoration={textDecoration}
          to={to}
          letterSpacing={letterSpacing}
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}
          margin={margin}
          onClickFn={onClickFn}>
          {children}
        </StyledNavLink>
      ))
    );

  return <>{_renderLink()}</>;
};

export default Link;
