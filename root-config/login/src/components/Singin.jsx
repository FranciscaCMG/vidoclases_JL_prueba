import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formulario } from './Formulario';
import {Home} from './Home'
import 'regenerator-runtime/runtime';

const Singin = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const username = 'admin';
        const password = 'admin';
        const token = btoa(`${username}:${password}`);

        const response = await axios.get('http://localhost:8090/user', {
          headers: {
            'Authorization': `Basic ${token}`,
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
      <Formulario/>
      <Home/>
      {error && <div>Error: {error}</div>}
      <div>Users: {JSON.stringify(users)}</div>
    </div>
  );
};

export default Singin;

