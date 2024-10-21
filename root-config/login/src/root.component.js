import React from 'react';
import Singin from './components/Singin';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Singin" element={<Singin />} />
      </Routes>
    </BrowserRouter>
  );
}