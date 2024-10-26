import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formulario } from "./Formulario.jsx";
import { UseState } from "react";

import "regenerator-runtime/runtime";

const Singin = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const username = "admin";
        const password = "admin";
        const token = btoa(`${username}:${password}`);

        const response = await axios.get("http://localhost:8090/user", {
          headers: {
            Authorization: `Basic ${token}`,
          },
        });

        setUsers(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Link className="nombre-home " to="/Home">
        Videoclases
      </Link>

      <Formulario setUser={setUser} />

      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Singin;
