import React from "react";
import HamburgerMenu from "../components/molecules/hamburgerMenu";
import Navbar from "../components/organisms/navbar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      {children}
    </>
  );
};

export default MainTemplate;
