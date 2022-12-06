import styled from "styled-components";

export const StyledHeading1 = styled.h1`
font-family: 'Bellefair', serif;
  font-size: ${({ fontSize = "150px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color="#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px"}) => margin};
  padding: ${({padding= "0px"}) => padding}
`;

export const StyledHeading2 = styled.h2`
font-family: 'Bellefair', serif;
font-size: ${({ fontSize = "100px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color="#FFFFFF"  }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin= "0px" }) => margin};
  padding: ${({padding= "0px"}) => padding}

`;

export const StyledHeading3 = styled.h3`
font-family: 'Bellefair', serif;
font-size: ${({ fontSize = "56px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color ="#FFFFFF" }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin = "0px"}) => margin};
  padding: ${({padding= "0px"}) => padding}

`;

export const StyledHeading4 = styled.h4`
font-family: 'Bellefair', serif;
font-size: ${({ fontSize = "32px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color ="#FFFFFF"  }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin= "0px" }) => margin};
  padding: ${({padding= "0px"}) => padding}

`;

export const StyledHeading5 = styled.h5`
font-family: 'Barlow Condensed', sans-serif; 
font-size: ${({ fontSize = "28px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color="#FFFFFF"  }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin= "0px" }) => margin};
  letter-spacing: ${({letterSpacing ="4.72px"}) => letterSpacing};
  padding: ${({padding= "0px"}) => padding}

`;

export const StyledSubheader1 = styled.p`
font-family: 'Bellefair', serif;
font-size: ${({ fontSize = "28px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color ="#FFFFFF"  }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin= "0px" }) => margin};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  padding: ${({padding= "0px"}) => padding}

`;

export const StyledSubheader2 = styled.p`
font-family: 'Barlow Condensed', sans-serif; 
font-size: ${({ fontSize = "14px" }) => fontSize};
letter-spacing: ${({letterSpacing ="2.35 px"}) => letterSpacing}
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color ="#FFFFFF"  }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin= "0px" }) => margin};
  padding: ${({padding= "0px"}) => padding}

`;



export const StyledNavHeader = styled.p`
font-family: 'Bellefair', serif;
font-size: ${({ fontSize = "16px" }) => fontSize};
letter-spacing: ${({ letterSpacing = "2.7px" }) => letterSpacing};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color ="#FFFFFF"  }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin= "0px" }) => margin};
  padding: ${({padding = "0px"}) => padding}

`;

export const StyledP = styled.p`
font-family: 'Barlow Condensed', sans-serif; 
font-size: ${({ fontSize = "18px" }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color ="#FFFFFF"  }) => color};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin= "0px" }) => margin};
  letter-spacing: ${({letterSpacing ="4.72 px"}) => letterSpacing};
  padding: ${({padding= "0px"}) => padding}

`;