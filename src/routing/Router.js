import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../routes";
import MainTemplate from "../templates/MainTemplate";
import Home from "../views/home";
import Crew from "../views/crew";
import Technology from "../views/technology";
import Planet from "../views/planet";

const Router = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path={routes.home} element={<Home />} />
          <Route path={routes.planetDestination} element={<Planet />} />
          <Route path={routes.crewDetails} element={<Crew />} />
          <Route path={routes.technologyDetails} element={<Technology />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
