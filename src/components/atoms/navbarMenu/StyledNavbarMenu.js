import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const StyledNavLink =styled(NavLink)`
    text-decoration: none;
    color:  #FFFFFF;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing:  2.7px;
    
&.active{
  text-decoration: underline;
    text-underline-offset: 38px;
    text-decoration-color: #FFFFFF;
    text-decoration-thickness: 3px;
}
&:hover{
    text-decoration: underline;
    text-underline-offset: 38px;
    text-decoration-color: #979797; 
    text-decoration-thickness: 3px;
};
`
export const StyledUl = styled.ul`
  width: 50%;
  height: 93px; 
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255, 4%);
`;

export const StyledLi = styled.li`
    font-family: 'Barlow Condensed', sans-serif;
    margin: 0px 30px 0px 0px;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing:  2.7px;
`;

export const StyledBold = styled.span`
    font-weight: 1000`
