import React from "react";
import HomeVC from "./components/HomeVC";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomeVC" element={<HomeVC />} />
      </Routes>
    </BrowserRouter>
  );
}
