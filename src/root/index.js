import React from "react";
import Router from "../routing/Router";
import RootContext from "../context";


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
