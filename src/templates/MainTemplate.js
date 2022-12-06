import React from "react";
import Navbar from "../components/organisms/navbar";

const MainTemplate = ({ children }) => {
  return (
    <>
 
      <Navbar />
      {children}
   
    </>
  );
};

export default MainTemplate;
