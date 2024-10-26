import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FormularioRegistro } from "./FormularioRegistro.jsx";
import { UseState } from "react";

import "regenerator-runtime/runtime";

const Registro = () => {
  return (
    <div>
      <Link className="nombre-home-register " to="/Home">
        Videoclases
      </Link>
      <FormularioRegistro />
    </div>
  );
};

export default Registro;
