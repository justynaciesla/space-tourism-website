import React, { useState, useEffect } from "react";
import Router from "../routing/Router";
import RootContext from "../context";
import Home from "../views/home";


const Root = () => {

  return (
    <RootContext.Provider
      value={{
      }}
    >
        <Router />
    </RootContext.Provider>
  );
};

export default Root;
