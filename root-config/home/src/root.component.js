import React from 'react';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
