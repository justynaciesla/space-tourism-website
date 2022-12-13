import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../routes";
import MainTemplate from "../templates/MainTemplate";
import Home from "../views/home";
import Destination from '../views/destination';
import Crew from "../views/crew";
import Technology from "../views/technology"

const Router = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path={routes.home} element={<Home />} />
          <Route path={routes.destination} element={<Destination />} />
          <Route path={routes.crew} element={<Crew/>}/>
          <Route path={routes.technology} element={<Technology/>}/>
        </Routes>
        </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
