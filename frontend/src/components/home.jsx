import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchResumoDashboard } from "../services/dashboardService";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const [resumo, setResumo] = useState({
    encomendasPendentes: 0,
    avisos: 0,
    moradores: 0
  });

  // Carrega dados da API ao carregar a página
  useEffect(() => {
    async function carregarDados() {
      const dados = await fetchResumoDashboard();
      setResumo(dados);
    }
    carregarDados();
  }, []);

  return (
    <div className="main-wrapper">
      <div className="top-right-buttons">
        <button className="top-btn" onClick={() => navigate("/login")}>Login</button>
        <button className="top-btn" onClick={() => navigate("/register")}>Cadastro</button>
      </div>

      <div className="welcome-card">
        <h2>Bem-vindo ao <span className="brand">Condômino Fácil!</span></h2>
        <p>
          Aqui você acompanha suas encomendas, solicitações e avisos do condomínio em tempo real.<br />
          Use o menu para navegar.
        </p>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <img src="https://cdn-icons-png.flaticon.com/512/833/833524.png" alt="encomenda" className="dashboard-icon" />
            <div>
              <strong>{resumo.encomendasPendentes}</strong>
              <div>Encomendas aguardando</div>
            </div>
          </div>

          <div className="dashboard-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png" alt="avisos" className="dashboard-icon" />
            <div>
              <strong>{resumo.avisos}</strong>
              <div>Avisos novos</div>
            </div>
          </div>

          <div className="dashboard-card">
            <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="moradores" className="dashboard-icon" />
            <div>
              <strong>{resumo.moradores}</strong>
              <div>Moradores ativos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
