import styled from "styled-components";
import { Link } from "react-router-dom";

import { devices } from "./../../../devices/devices";

export const StyledLink = styled(Link)`
text-decoration:none;
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
display: flex;
align-items: center;
justify-content: center;
transition: ease-in-out;
transition-duration: 0.3s;

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
};
}

@media ${devices.devices.mobile} {
    width: 150px;
    height: 150px; 
    font-size: 20px;
    letter-spacing: 1.25px;
    
    &:hover{
        box-shadow: 0px 0px 0px 50px rgba(255,255,255, 10%);
        border-radius: 50%;
        cursor: pointer;
      
};
};
`;
