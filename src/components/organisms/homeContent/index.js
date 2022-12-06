import React from 'react'
import ExploreButton from '../../atoms/exploreButton'
import HomeText from '../../molecules/HomeText'
import {StyledWrapper} from "./StyledHomeContent"

const HomeContent = () => {
  return (
    <StyledWrapper>
        <HomeText />
        <ExploreButton />
    </StyledWrapper>
  )
}

export default HomeContent