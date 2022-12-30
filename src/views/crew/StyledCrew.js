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
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  top: 43%;
  left: 10%;
`;

export const StyledImg = styled.img`
  position: fixed;
  bottom: 0px;
  left: 50%;
  height: 70%;
  width: auto;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
`;

export const StyledLine = styled.div`
  height: 1px;
  background: #979797;
  width: 444px;
  margin: 20px 0px 20px 0px;
`;
