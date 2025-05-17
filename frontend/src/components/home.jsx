import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  // Hook para navegação entre rotas
  const navigate = useNavigate();

  // Estado para armazenar os dados do dashboard recebidos da API
  const [dashboardData, setDashboardData] = useState({
    encomendas: 0,
    avisos: 0,
    moradores: 0,
  });

  // Estado para controlar se os dados ainda estão sendo carregados
  const [loading, setLoading] = useState(true);

  // useEffect para executar a busca dos dados assim que o componente é montado
  useEffect(() => {
    // Faz uma requisição GET para o endpoint do backend que retorna os dados do dashboard
    fetch("/api/dashboard")
      .then((res) => {
        // Verifica se a resposta foi OK (status 200-299)
        if (!res.ok) throw new Error("Erro ao buscar dados do dashboard");
        return res.json(); // Converte a resposta para JSON
      })
      .then((data) => {
        // Atualiza o estado com os dados recebidos
        setDashboardData(data);
        setLoading(false); // Indica que terminou de carregar
      })
      .catch((err) => {
        // Em caso de erro na requisição, mostra no console e finaliza loading
        console.error(err);
        setLoading(false);
      });
  }, []); // [] garante que o efeito execute só uma vez após o primeiro render

  return (
    <div className="main-wrapper">
      {/* Botões Login e Cadastro no topo direito */}
      <div className="top-right-buttons">
        <button className="top-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="top-btn" onClick={() => navigate("/register")}>
          Cadastro
        </button>
      </div>

      {/* Card principal de boas-vindas e dashboard */}
      <div className="welcome-card">
        <h2>
          Bem-vindo ao <span className="brand">Condômino Fácil!</span>
        </h2>
        <p>
          Aqui você acompanha suas encomendas, solicitações e avisos do
          condomínio em tempo real.
          <br />
          Use o menu para navegar.
        </p>

        {/* Mostra mensagem de carregamento enquanto busca dados */}
        {loading ? (
          <p>Carregando dados...</p>
        ) : (
          // Mostra os cards com os dados reais após carregar
          <div className="dashboard-cards">
            {/* Card Encomendas */}
            <div className="dashboard-card">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/parcel.png"
                alt="encomenda"
                className="dashboard-icon"
              />
              <div>
                <strong>{dashboardData.encomendas}</strong>
                <div>Encomendas aguardando</div>
              </div>
            </div>

            {/* Card Avisos */}
            <div className="dashboard-card">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/appointment-reminders.png"
                alt="avisos"
                className="dashboard-icon"
              />
              <div>
                <strong>{dashboardData.avisos}</strong>
                <div>Aviso novo</div>
              </div>
            </div>

            {/* Card Moradores */}
            <div className="dashboard-card">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/group.png"
                alt="moradores"
                className="dashboard-icon"
              />
              <div>
                <strong>{dashboardData.moradores}</strong>
                <div>Moradores ativos</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
