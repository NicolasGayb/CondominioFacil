import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login simulado");
  };

  return (
    <div className="login-wrapper">
      <div className="theme-toggle">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Tema Claro" : "🌙 Tema Escuro"}
        </button>
      </div>

      <div className="card">
        <h1>Bem-vindo de volta</h1>
        <p className="subtitle">Acesse sua conta para continuar</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className="btn-primary">Entrar</button>
        </form>

        <p className="switch">
          Ainda não tem conta?{" "}
          <span onClick={() => navigate("/register")}>Cadastre-se</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
