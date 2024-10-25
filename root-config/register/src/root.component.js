import React from "react";
import Registro from "./components/Registro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}
