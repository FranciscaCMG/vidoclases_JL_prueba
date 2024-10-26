import { useState } from "react";
import axios from "axios"; // Asegúrate de importar axios

export function FormularioRegistro({ setUser }) {
  const [username, setUsername] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !contrasena || !correo || !nombres || !apellidos) {
      setError(true);
      setSuccessMessage("");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8090/user`, {
        username,
        nombres,
        apellidos,
        correo,
        contrasena,
        locked: false,
        disabled: false,
      });

      setSuccessMessage("Usuario guardado correctamente"); // Mensaje de éxito

      // Espera 2 segundos y luego redirige a la página de inicio de sesión
      setTimeout(() => {
        window.location.href = "/singin"; // Cambia la URL según necesites
      }, 300); // 2000 milisegundos = 2 segundos
    } catch (error) {
      setError(
        error.response ? error.response.data : "Hubo un error en la solicitud"
      );
      setSuccessMessage("");
    }
  };

  return (
    <section className="login">
      <h1 className="h1-form">Gracias por querer ser parte</h1>
      <p className="p-form">
        Completa los siguientes datos para crear tu primera videoclase.
      </p>
      <p className="p-form-link">
        ¿Ya tienes cuenta?{" "}
        <a className="link-register" href="/singin">
          Inicia sesión
        </a>
      </p>
      <br />

      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="input-form"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario*"
          />
          <input
            className="input-form"
            type="text"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            placeholder="Nombres*"
          />
        </div>
        <div className="form-group">
          <input
            className="input-form"
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Apellidos*"
          />
          <input
            className="input-form"
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo*"
          />
        </div>

        <input
          className="input-form"
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="Contraseña*"
        />

        <button className="btn-form" type="submit">
          Registrarse
        </button>
      </form>

      {error && (
        <p style={{ color: "#e71d36" }}>Por favor ingresa ambos campos</p>
      )}
      {successMessage && (
        <p style={{ color: "#28a745" }}>{successMessage}</p> // Mensaje de éxito
      )}
    </section>
  );
}
