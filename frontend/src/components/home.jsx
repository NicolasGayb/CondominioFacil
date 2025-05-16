import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      {/* Botões no topo direito */}
      <div className="top-right-buttons">
        <button className="top-btn" onClick={() => navigate("/login")}>Login</button>
        <button className="top-btn" onClick={() => navigate("/register")}>Cadastro</button>
      </div>
      {/* Card centralizado */}
      <div className="welcome-card">
        <h2>Bem-vindo ao <span className="brand">Condômino Fácil!</span></h2>
        <p>
          Aqui você acompanha suas encomendas, solicitações e avisos do condomínio em tempo real.<br />
          Use o menu para navegar.
        </p>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <span role="img" aria-label="encomenda" className="dashboard-icon">📦</span>
            <div>
              <strong>2</strong>
              <div>Encomendas aguardando</div>
            </div>
          </div>
          <div className="dashboard-card">
            <span role="img" aria-label="avisos" className="dashboard-icon">🔔</span>
            <div>
              <strong>1</strong>
              <div>Aviso novo</div>
            </div>
          </div>
          <div className="dashboard-card">
            <span role="img" aria-label="moradores" className="dashboard-icon">👥</span>
            <div>
              <strong>24</strong>
              <div>Moradores ativos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
