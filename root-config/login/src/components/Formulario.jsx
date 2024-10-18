import "./Formulario.css"
import { useState } from 'react';

export function Formulario(){
    const [username,  setUsername] = useState("");
    const [contrasena,  setContrasena] = useState("");
    const [error,  setError] = useState(false);

    const handleSubmit = (e)  => {
        e.preventDefault();

        if(!username | !contrasena){
            setError(true);
            return
        }
    }


    return(
        <section>
            <h1>Login</h1>
            <form 
            className="formulario"
            onSubmit={handleSubmit}
            >
                <input className="input" type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                />
                <button type="submit">Iniciar  Sesión</button>

            </form>
            {error && <p style={{ color: 'red' }}>Por favor ingresa ambos campos</p>}

        </section>
    )
}
