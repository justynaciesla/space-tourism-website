import React, {useContext} from 'react';
import RootContext from './../../../context'
import HamburgerMenu from './../../../assets/shared/icon-hamburger.svg';
import CloseIcon from './../../../assets/shared/icon-close.svg'
import {StyledHamburgerMenu, StyledButton} from './StyledHamburgerMenuIcon'

const HamburgerMenuIcon = () => {
const { toggleHamburgerMenu } = useContext(RootContext);

  return (
    <>
    <StyledButton onClick={toggleHamburgerMenu}>
      <StyledHamburgerMenu src={HamburgerMenu} alt="hamburgerMenu" />
    </StyledButton>
   
    
    </>
   
  )
}

export default HamburgerMenuIcon