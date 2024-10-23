import React from "react";

export default function Home() {
  return (
    <div className="container-home">
      <h1 className="h1-home">
        Transforma tu contenido en videoclases con un click
      </h1>
      <p className="p-home">
        <span>Convierte tus ideas en contenido educativo de manera fácil</span>
        <span>No necesitas ser un experto en tecnología.</span>
        <span>
          Ahorra tiempo y enfócate en lo que mejor sabes hacer: enseñar
        </span>
      </p>

      <button className="btn-home">
        <a href="./Singin" style={{ textDecoration: "none", color: "inherit" }}>
          Regístrate
        </a>
      </button>
    </div>
  );
}
