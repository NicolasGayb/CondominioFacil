import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Aplica/remova a classe dark no body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="main-wrapper">
      <div className="top-right-buttons">
        <button
          className="top-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </div>

      <div className="welcome-card">
        <h1>
          Bem-vindo ao{" "}
          <span className="brand">Condomínio Fácil!</span>
        </h1>
        <p>
          Aqui você acompanha suas encomendas, solicitações e avisos do condomínio em tempo real.
        </p>

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

        <div className="action-buttons">
          <button className="btn login-btn">Login</button>
          <button className="btn signup-btn">Cadastro</button>
        </div>
      </div>
    </div>
  );
}

export default Home;