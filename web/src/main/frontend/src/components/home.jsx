import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para redirecionamento
import "./home.css";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // Hook para redirecionar entre rotas

  // Aplica/remova a classe "dark" no <body> com base no estado
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="main-wrapper">
      {/* Botão no canto superior direito para alternar o tema */}
      <div className="top-right-buttons">
        <button
          className="top-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </div>

      {/* Cartão de boas-vindas com estatísticas */}
      <div className="welcome-card">
        <h1>
          Bem-vindo ao <span className="brand">Condomínio Fácil!</span>
        </h1>
        <p>
          Aqui você acompanha suas encomendas, solicitações e avisos do condomínio em tempo real.
        </p>

        {/* Cartões de resumo */}
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <img
              className="dashboard-icon"
              src="https://cdn-icons-png.flaticon.com/512/833/833524.png"
              alt="Encomendas"
            />
            <span className="count">0</span>
            <p>Encomendas aguardando</p>
          </div>

          <div className="dashboard-card">
            <img
              className="dashboard-icon"
              src="https://cdn-icons-png.flaticon.com/512/1827/1827304.png"
              alt="Avisos"
            />
            <span className="count">0</span>
            <p>Avisos novos</p>
          </div>
        </div>

        {/* Botões de ação que redirecionam para as páginas de Login e Cadastro */}
        <div className="action-buttons">
          <button
            className="btn login-btn"
            onClick={() => navigate("/login")} // Redireciona para Login
          >
            Login
          </button>
          <button
            className="btn signup-btn"
            onClick={() => navigate("/register")} // Redireciona para Cadastro
          >
            Cadastro
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;