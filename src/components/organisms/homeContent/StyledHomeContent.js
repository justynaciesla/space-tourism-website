import styled from 'styled-components';
import {devices} from './../../../devices/devices'

export const StyledWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    display: flex; 
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-end;
    align-content: flex-end;
    margin: 50px 0px 0px 0px;

    @media ${devices.devices.tablet} {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        width:100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
  }
    
`
