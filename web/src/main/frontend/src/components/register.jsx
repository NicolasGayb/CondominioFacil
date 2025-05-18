// Register.jsx
import React, { useState, useEffect } from "react";
import "./register.css";

function Register() {
  const [darkMode, setDarkMode] = useState(false);

  // Aplica ou remove a classe 'dark' no body com base no estado
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  // Atualiza os dados do formulário conforme o usuário digita
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envia o formulário (ainda sem backend)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples de senha
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    // Aqui você pode enviar os dados para uma API
    console.log("Dados enviados:", formData);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="main-wrapper">
      <div className="top-right-buttons">
        <button
          className="top-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Alternar tema"
        >
          {darkMode ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </div>

      <div className="welcome-card">
        <h1>
          Crie sua conta no <span className="brand">Condomínio Fácil</span>
        </h1>
        <p>Preencha os dados abaixo para acessar a plataforma.</p>

        <form className="register-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn login-btn">
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;