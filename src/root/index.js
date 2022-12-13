import React, { useState } from "react";

import Router from "../routing/Router";
import RootContext from "../context";

const Root = () => {
  const [isHmburgerMenuOpen, setHamburgerMenuOpen] = useState("closed");

  const toggleHamburgerMenu = () => {
    isHmburgerMenuOpen === "closed"
      ? setHamburgerMenuOpen("opened")
      : setHamburgerMenuOpen("closed");
  };

  return (
    <RootContext.Provider
      value={{
        isHmburgerMenuOpen,
        setHamburgerMenuOpen,
        toggleHamburgerMenu,
      }}>
      <Router />
    </RootContext.Provider>
  );
};

export default Root;
