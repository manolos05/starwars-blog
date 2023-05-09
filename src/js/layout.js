import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Planets from "./views/Planets";
import { PlanetCards } from "./views/PlanetCard";
import { Films } from "./views/Films";
import { FilmCards } from "./views/FilmsCard";
import { People } from "./views/People";
import { PeopleCard, PoepleCard } from "./views/PeopleCard";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Starship } from "./views/Starship";
import StarshipCard from "./views/StarShipsCards";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Planets" element={<Planets />} />
            <Route element={<PlanetCards />} path="/Planets/:id" />
            <Route path="/Films" element={<Films />} />
            <Route element={<FilmCards />} path="/Films/:id" />
            <Route path="/People" element={<People />} />
            <Route element={<PeopleCard />} path="/People/:id" />
            <Route element={<Starship />} path="/Starship/" />
            <Route element={<StarshipCard />} path="/Starship/:id" />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
