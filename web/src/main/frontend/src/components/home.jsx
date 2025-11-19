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

      <div className="home-container">
        <header className="header">
        <h1 className="logo">
          🏢 Porteiro Digital
        </h1>
        </header>

        <main className="content">
          <section className="left">
            <h2>Bem-vindo ao Porteiro Digital</h2>
            <p className="subtitle">
              Plataforma moderna para encomendas, comunicação e administração condominial.
            </p>
            <div className="buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/login")} // Redireciona para a página de login
                >Login</button>
              <button
                className="btn-secondary"
                onClick={() => navigate("/register")} // Redireciona para a página de registro
                >Registrar</button>
            </div>

            <ul className="features">
              <li>🔔 Notificações automáticas de entregas</li>
              <li>📊 Relatórios detalhados para síndicos</li>
              <li>💬 Chat interno entre moradores e portaria</li>
              <li>🛡️ Segurança e controle de acesso às encomendas</li>
            </ul>

            <div className="info-box">
              <p>ℹ️ Novo: Acompanhe o status das encomendas em tempo real!</p>
            </div>
          </section>
          <section className="right">
            <div className="card">
              <h3>📦 Controle de Encomendas</h3>
              <p>Acompanhe entregas e retiradas com facilidade.</p>
            </div>
            <div className="card">
              <h3>💬 Comunicação Direta</h3>
              <p>Fale com síndicos e moradores de forma eficiente.</p>
            </div>
            <div className="card">
              <h3>📑 Gestão Transparente</h3>
              <p>Acesso facilitado a relatórios e informações.</p>
            </div>
            <div className="card">
              <h3>🔔 Alertas Inteligentes</h3>
              <p>Receba notificações automáticas sobre eventos importantes.</p>
            </div>

            <div className="card">
              <h3>📈 Relatórios e Estatísticas</h3>
              <p>Acompanhe o desempenho do condomínio em tempo real.</p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© 2024 Porteiro Digital. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;