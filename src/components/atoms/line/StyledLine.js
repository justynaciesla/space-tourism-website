import styled from "styled-components"; 
import {devices} from './../../../devices/devices'


export const StyledLine = styled.div`
    height: 1px;
    background: #979797;
    width: 40%;
    margin-right:-50px; 

    @media ${devices.devices.tablet} {
     display: none;
  }
`;