import React from "react";
import { useLocation } from "react-router-dom";
import { devices } from "./../../devices/devices";
import TechnologyDesktop from "../../assets/technology/background-technology-desktop.jpg";
import TechnologyTablet from "../../assets/technology/background-technology-tablet.jpg";
import TechnologyMobile from "../../assets/technology/background-technology-mobile.jpg";
import {
  StyledBackground,
  StyledContentWrapper,
  StyledImg,
} from "./StyledTechnology";
import TechnologyTitle from "../../components/atoms/technologyTitle";
import TechnologySubnavigation from "../../components/molecules/technologySubNavigation";
import TechnologyContent from "../../components/organisms/technologyContent";

const Technology = () => {
  const location = useLocation();
  console.log("from tech", location);

  return (
    <>
      <picture>
        <source media={devices.devices.tablet} src={TechnologyTablet} />
        <source media={devices.devices.mobile} src={TechnologyMobile} />
        <StyledBackground src={TechnologyDesktop} alt='background' />
      </picture>

      <TechnologyTitle />
      <TechnologySubnavigation />

      <StyledContentWrapper key={location.key}>
        <TechnologyContent
          name={location.state.name.toUpperCase()}
          description={location.state.description}
        />

        <picture>
          <source
            media={devices.devices.tablet}
            src={location.state.images.landscape.slice(1)}
          />
          <source
            media={devices.devices.mobile}
            src={location.state.images.landscape.slice(1)}
          />
          <StyledImg src={location.state.images.portrait.slice(1)} alt='' />
        </picture>
      </StyledContentWrapper>
    </>
  );
};

export default Technology;
