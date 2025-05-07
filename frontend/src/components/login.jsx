import React, { useState } from 'react';
import api from "../services/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await api.post("/users/login", { email, senha });
        console.log(response.data);
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login;