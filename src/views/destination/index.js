import React from "react";
import { devices } from "./../../devices/devices";
import DestinationDesktop from "../../assets/destination/background-destination-desktop.jpg";
import DestinationTablet from "../../assets/destination/background-destination-tablet.jpg";
import DestinationMobile from "../../assets/destination/background-destination-mobile.jpg";
import { StyledBackground } from "./StyledDestination";
import DestinationContent from "../../components/organisms/destinationContent";
import DestinationSubnavigation from "../../components/molecules/destinationSubnavigation";

const Destination = () => {
  return (
    <>
      <picture>
        <source media={devices.devices.tablet} src={DestinationTablet} />
        <source media={devices.devices.mobile} src={DestinationMobile} />
        <StyledBackground src={DestinationDesktop} alt='background' />
      </picture>
      <DestinationContent />
      <DestinationSubnavigation />
    </>
  );
};

export default Destination;
