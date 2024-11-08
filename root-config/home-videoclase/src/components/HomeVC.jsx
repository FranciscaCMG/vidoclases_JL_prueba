import React from "react";
import { Link } from "react-router-dom";
import "./stylehome-videoclase.css";

export default function HomeVC() {
  return (
    <div>
      <div className="centrado">
        <Link className="h1-home-presentacion" to="/">
          PRESENTACIONES
        </Link>
      </div>
      <div className="plantilla-view__grid">
        <a href="/Plantilla2C">
          <img
            src="/images/plantilla_nueva.png"
            alt="Ir a HomeVC"
            className="plantilla-card"
          />
          <h3 className="plantilla-card__name">Presentación en blanco</h3>
        </a>

        <a href="/Plantilla2C">
          <img
            src="/images/Diapo_Columnas.png"
            alt="Ir a HomeVC"
            className="plantilla-card"
          />
          <h3 className="plantilla-card__name">Plantilla 2 columnas</h3>
        </a>

        <a href="/PlantillaN">
          <img
            src="/images/Diapo_Normal.png"
            alt="Ir a HomeVC"
            className="plantilla-card"
          />
          <h3 className="plantilla-card__name">Plantilla normal</h3>
        </a>

        <a href="/PlantillaN">
          <img
            src="/images/Diapo_Normal.png"
            alt="Ir a HomeVC"
            className="plantilla-card"
          />
          <h3 className="plantilla-card__name">Plantilla normal</h3>
        </a>
      </div>
    </div>
  );
}
