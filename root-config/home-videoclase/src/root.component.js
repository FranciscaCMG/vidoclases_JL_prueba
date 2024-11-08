import React from "react";
import HomeVC from "./components/HomeVC";
import PlantillaN from "./components/PlantillaN";
import Plantilla2C from "./components/Plantilla2C";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomeVC" element={<HomeVC />} />
        <Route path="/PlantillaN" element={<PlantillaN />} />
        <Route path="/Plantilla2C" element={<Plantilla2C />} />
        <Route
          path="/PersistentDrawerLeft"
          element={<PersistentDrawerLeft />}
        />
      </Routes>
    </BrowserRouter>
  );
}
