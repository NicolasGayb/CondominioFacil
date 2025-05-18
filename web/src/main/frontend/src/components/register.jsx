import React, { useState } from "react";
import api from "../services/api";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await api.post("/users", { nome, email, senha });
    console.log(response.data);
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} required />
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;