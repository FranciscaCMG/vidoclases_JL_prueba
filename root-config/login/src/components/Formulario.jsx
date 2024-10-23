import "./Formulario.css";
import { useState } from "react";
import axios from "axios"; // Asegúrate de importar axios

export function Formulario({ setUser }) {
  const [username, setUsername] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    console.log("1. entre");
    e.preventDefault();

    // Cambié el operador | por ||
    if (!username || !contrasena) {
      console.log("2. entre if");
      setError(true);
      return;
    }
    console.log("3. no entre if");

    try {
      console.log("4. entre try");

      // Cambié password por contrasena
      const token = btoa(`${username}:${contrasena}`);
      console.log("user", username);
      console.log("contrasena", contrasena);
      console.log("token", token);

      // Hacer la solicitud GET al servidor
      const response = await axios.get(
        `http://localhost:8090/user/usuario/${username}`,
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );
      console.log("5. entre get");

      console.log(response);

      if (response.data === "Usuario no encontrado") {
        setError(true);
        console.log("Usuario no encontrado");
        return;
      }

      // Aquí puedes manejar lo que ocurre cuando el usuario es encontrado
      // Por ejemplo, puedes redirigir o actualizar el estado de usuario:
      setUser(response.data); // Aquí asumo que lo que recibes es el objeto del usuario

      if (response.data === true) {
        console.log("Usuario autenticado, redirigiendo...");
        // Usar window.location.replace() para evitar que el usuario regrese a la página de login
        window.location.replace("/");
        return;
      }
    } catch (error) {
      // Si ocurre un error, mostrar el error
      console.log("Error en la solicitud:", error);
      setError(
        error.response ? error.response.data : "Hubo un error en la solicitud"
      );
    }
  };

  return (
    <section className="login">
      <h1 className="h1-form">¡Hola!</h1>
      <p className="p-form">Qué bueno tenerte de vuelta.</p>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario*"
        />
        <input
          className="input-form"
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="Contraseña*"
        />
        <button className="btn-form" type="submit">
          Iniciar Sesión
        </button>
        <p className="p-form-link">
          ¿No tienes cuenta?{" "}
          <a className="link-register" href="/register">
            Regístrate aquí
          </a>
        </p>
      </form>

      {error && (
        <p style={{ color: "#e71d36" }}>Por favor ingresa ambos campos</p>
      )}
    </section>
  );
}
