import styled from "styled-components";
import {devices} from './../../../devices/devices'

export const StyledNavigationWrapper = styled.div`
position: absolute;
width: 100vw;
 display:flex;
 wrap:nowrap;
 flex-direction: row; 
 align-items: center; 
 justify-content: flex-end; 
 margin: 54px 0px 0px 0px;

 @media ${devices.devices.tablet} {
    justify-content: space-between; 
    margin-top: -10px;
  }

`;