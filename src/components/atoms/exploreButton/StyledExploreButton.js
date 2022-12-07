import styled from 'styled-components'
import {devices} from './../../../devices/devices'

export const StyledButton = styled.button`
width: 275px;
height:275px; 
background-color:#FFFFFF;
border-radius:50%;
color:#0B0D17; 
font-family: 'Bellefair', serif;
font-size: 32px;
letter-spacing: 2px;
border:none;
margin: 100px 0px 0px 0px;

&:hover{
    box-shadow: 0px 0px 0px 75px rgba(255,255,255, 10%);
    border-radius: 50%;
    cursor: pointer;
};

@media ${devices.devices.tablet} {
    width: 242px;
    height:242px; 
    
    &:hover{
        box-shadow: 0px 0px 0px 50px rgba(255,255,255, 10%);
        border-radius: 50%;
        cursor: pointer;
};
}

`