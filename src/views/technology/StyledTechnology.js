import styled from "styled-components";

export const StyledBackground = styled.img`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: -1;
`;

export const StyledContentWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const StyledImg = styled.img`
  width: 415px;
  height: 427px;
`;
