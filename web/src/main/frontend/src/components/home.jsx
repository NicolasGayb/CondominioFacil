import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  // Estado para controlar o modo escuro (dark mode)
  // Inicializa lendo o valor salvo no localStorage ou preferencia do sistema
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Efeito para aplicar ou remover a classe 'dark' no body e salvar no localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="main-wrapper">
      {/* Botão toggle no canto superior direito */}
      <div className="top-right-buttons">
        <button
          className="top-btn"
          onClick={() => setDarkMode(!darkMode)} // Alterna tema claro/escuro
          aria-label="Toggle Dark Mode"
        >
          {/* Ícones simples para indicar estado */}
          {darkMode ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </div>

      {/* Cartão principal de boas-vindas */}
      <div className="welcome-card">
        <h1>
          Bem-vindo ao <span className="brand">Condomínio Fácil!</span>
        </h1>
        <p>
          Aqui você acompanha suas encomendas, solicitações e avisos do
          condomínio em tempo real.<br />
          Use o menu para navegar.
        </p>

        {/* Cards de informações rápidas */}
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2913/2913466.png" // Ícone Encomendas
              alt="Encomendas"
              className="dashboard-icon"
            />
            <span className="count">0</span>
            <p>Encomendas aguardando</p>
          </div>

          <div className="dashboard-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1827/1827304.png" // Ícone Avisos
              alt="Avisos"
              className="dashboard-icon"
            />
            <span className="count">0</span>
            <p>Avisos novos</p>
          </div>
        </div>

        {/* Botões de ação Login e Cadastro */}
        <div className="action-buttons">
          <button className="btn login-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/271/271220.png" // Ícone Login
              alt="Login Icon"
              className="btn-icon"
            />
            Login
          </button>
          <button className="btn signup-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png" // Ícone Cadastro
              alt="Cadastro Icon"
              className="btn-icon"
            />
            Cadastro
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;