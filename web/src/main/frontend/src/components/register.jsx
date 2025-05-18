import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    console.log("Dados enviados:", formData);
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="main-wrapper">
      <div className="top-right-buttons">
        <button className="top-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Tema Claro" : "🌙 Tema Escuro"}
        </button>
      </div>

      <div className="auth-card">
        <h1>Crie sua conta</h1>
        <p className="subtitle">Preencha os dados abaixo para se cadastrar</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="fullName"
            placeholder="Nome completo"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Nome de usuário"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn login-btn">Criar conta</button>
        </form>

        <p className="switch">
          Já possui conta?{" "}
          <span onClick={() => navigate("/login")}>Entrar</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
