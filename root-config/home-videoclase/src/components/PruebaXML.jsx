import React, { useState } from "react";

function App() {
  // Estados para almacenar los valores del formulario
  const [titulo, setTitulo] = useState("");
  const [titulo2, setTitulo2] = useState("");
  const [ttsTitulo, setTtsTitulo] = useState("");
  const [ttsTitulo2, setTtsTitulo2] = useState("");
  const [parrafo, setParrafo] = useState("");
  const [fileName, setFileName] = useState("videoclase"); // Estado para el nombre del archivo

  // Función para convertir el objeto a XML
  const convertToXML = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += "<Videoclase>\n";
    xml += "  <Slide>\n";
    xml += `    <Titulo tts="${ttsTitulo}">${titulo}</Titulo>\n`;
    xml += `    <Titulo2 tts="${ttsTitulo2}">${titulo2}</Titulo2>\n`;
    xml += `    <Parrafo>${parrafo}</Parrafo>\n`;
    xml += "  </Slide>\n";
    xml += "</Videoclase>\n";
    return xml;
  };

  // Función para descargar el archivo XML
  const downloadXML = () => {
    const xmlContent = convertToXML();
    const blob = new Blob([xmlContent], { type: "application/xml" });
    const link = document.createElement("a");

    // Usamos el estado `fileName` para el nombre del archivo
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.xml`; // El archivo llevará el nombre ingresado por el usuario
    link.click();
  };

  return (
    <div>
      <h1>Generar archivo XML con entrada de datos</h1>

      {/* Formulario para ingresar los datos */}
      <form>
        {/* Campo para el nombre del archivo */}
        <div>
          <label htmlFor="fileName">Nombre del archivo:</label>
          <input
            type="text"
            id="fileName"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Introduce el nombre del archivo"
          />
        </div>

        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="ttsTitulo">Texto a voz (Titulo):</label>
          <input
            type="text"
            id="ttsTitulo"
            value={ttsTitulo}
            onChange={(e) => setTtsTitulo(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="titulo2">Título 2:</label>
          <input
            type="text"
            id="titulo2"
            value={titulo2}
            onChange={(e) => setTitulo2(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="ttsTitulo2">Texto a voz (Titulo 2):</label>
          <input
            type="text"
            id="ttsTitulo2"
            value={ttsTitulo2}
            onChange={(e) => setTtsTitulo2(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="parrafo">Párrafo:</label>
          <textarea
            id="parrafo"
            value={parrafo}
            onChange={(e) => setParrafo(e.target.value)}
          />
        </div>
      </form>

      {/* Botón para descargar el XML */}
      <button onClick={downloadXML}>Descargar XML</button>
    </div>
  );
}

export default App;
