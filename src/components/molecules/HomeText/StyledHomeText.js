import styled from 'styled-components';
import {devices} from "../../../devices/devices"

export const StyledWrapper = styled.div`
display: flex; 
flex-direction: column; 
width: 40%;

@media ${devices.devices.tablet} {
    width:80%;
    align-items: center;
    justify-content:center;
}
`

export const StyledP = styled.p`
font-size: 18px; 
font-family: 'Barlow Condensed', sans-serif; 
margin: 0px; 
color: #D0D6F9;
line-height: 32px;

@media ${devices.devices.tablet} {
    font-size: 16px;
    line-height: 28px;
    width: 70%; 
    text-align: center;
  }

`