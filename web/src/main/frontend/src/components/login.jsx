import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:8082/CondominioFacil/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const tipo = await response.text();
        if (tipo === "admin") {
          navigate("/admin");
        } else if (tipo === "morador") {
          navigate("/morador");
        } else {
          navigate("/");
        }
      } else {
        const msg = await response.text();
        setError(msg || "Usuário ou senha inválidos");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor");
    }
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
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">
            Entrar
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <p className="switch">
          Ainda não tem conta?{" "}
          <span onClick={() => navigate("/register")}>Cadastre-se</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
