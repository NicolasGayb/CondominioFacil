import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBoxOpen, FaBell, FaUsers } from "react-icons/fa"; // ícones reais
import Button from "./Button";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      {/* Botões no topo direito */}
      <div className="top-right-buttons">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/register")}>Cadastro</Button>
      </div>

      {/* Card centralizado */}
      <div className="welcome-card">
        <h2>Bem-vindo ao <span className="brand">Condômino Fácil!</span></h2>
        <p>
          Aqui você acompanha suas encomendas, solicitações e avisos do condomínio em tempo real.<br />
        </p>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <FaBoxOpen size={36} className="dashboard-icon" />
            <div>
              <strong>2</strong>
              <div>Encomendas aguardando</div>
            </div>
          </div>
          <div className="dashboard-card">
            <FaBell size={36} className="dashboard-icon" />
            <div>
              <strong>1</strong>
              <div>Aviso novo</div>
            </div>
          </div>
          <div className="dashboard-card">
            <FaUsers size={36} className="dashboard-icon" />
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
