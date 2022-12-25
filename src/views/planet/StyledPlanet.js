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

export const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
  top: 43%;
  left: 12%;
`;

export const StyledImg = styled.img`
  height: 350px;
  width: 350px;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 445px;
`;

export const StyledLine = styled.div`
  height: 1px;
  background: #979797;
  width: 444px;
  margin: 20px 0px 20px 0px;
`;
