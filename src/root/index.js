import React, { useState } from "react";
import Router from "../routing/Router";
import RootContext from "../context";
import data from "../starter-code/data.json";

const Root = () => {
  const [isHmburgerMenuOpen, setHamburgerMenuOpen] = useState("closed");
  const [destinations, setDestinations] = useState(data.destinations);

  const toggleHamburgerMenu = () => {
    isHmburgerMenuOpen === "closed"
      ? setHamburgerMenuOpen("opened")
      : setHamburgerMenuOpen("closed");
  };

  return (
    <RootContext.Provider
      value={{
        isHmburgerMenuOpen,
        destinations,
        setHamburgerMenuOpen,
        toggleHamburgerMenu,
      }}>
      <Router />
    </RootContext.Provider>
  );
};

export default Root;
