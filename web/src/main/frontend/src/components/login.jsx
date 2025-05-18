import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  // Estado para controlar o tema escuro
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });

  // Aplica o tema ao carregar e ao alterar
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Lógica de envio do formulário de login
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login simulado"); // Aqui você pode chamar uma API real
  };

  return (
    <div className="main-wrapper">
      {/* Botão de alternância de tema */}
      <div className="top-right-buttons">
        <button className="top-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Tema Claro" : "Tema Escuro"}
        </button>
      </div>

      {/* Card de autenticação */}
      <div className="auth-card">
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className="btn login-btn">Entrar</button>
        </form>

        {/* Link para tela de cadastro */}
        <p className="switch">
          Ainda não tem conta?{" "}
          <span onClick={() => navigate("/register")}>Cadastre-se</span>
        </p>
      </div>
    </div>
  );
}

export default Login;