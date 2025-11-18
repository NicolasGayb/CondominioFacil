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
      const response = await fetch("http://localhost:8082/api/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password }),
      });

      // Se o login deu errado
      if (!response.ok) {
        const msg = await response.text();
        setError(msg || "Erro ao fazer login. Tente novamente.");
        return;
      }

      // Se o login deu certo
      const tipo = await response.text();

      // Salvar no localStorage
      localStorage.setItem("role", tipo);

      // Redirecionar baseado no tipo
      if (tipo === "admin") {
        navigate("/admin");
      } else if (tipo === "sindico") {
        navigate("/sindico");
      } else if (tipo === "porteiro") {
        navigate("/porteiro");
      } else if (tipo === "morador") {
        navigate("/morador");
      } else {
        setError("Tipo de usuário desconhecido.");
      }

    } catch (err) {
      setError("Erro ao conectar ao servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <div className={`login-wrapper${darkMode ? ' dark-bg' : ''}`}>
      <div className="theme-toggle">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Tema Claro" : "🌙 Tema Escuro"}
        </button>
      </div>

      <div className={`card${darkMode ? ' card-dark' : ''}`}>
        <h1 className="login-title">Bem-vindo de volta</h1>
        <p className="subtitle">Acesse sua conta para continuar</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={darkMode ? 'input-dark' : ''}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className={darkMode ? 'input-dark' : ''}
          />
          <button type="submit" className="btn-primary">Entrar</button>
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
