import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [darkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (localStorage.getItem("role") !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className={`admin-container ${darkMode ? "dark" : ""}`}>
      <header className="admin-header">
        <h1>Painel do Administrador</h1>
        <button 
          className="logout-btn"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Sair
        </button>
      </header>

      <section className="admin-grid">

        <div className="admin-card" onClick={() => navigate("/admin/usuarios")}>
          <div className="icon users"></div>
          <h3>Gerenciar Usuários</h3>
          <p>Controle de moradores, síndicos e porteiros.</p>
        </div>

        <div className="admin-card" onClick={() => navigate("/admin/condominios")}>
          <div className="icon buildings"></div>
          <h3>Condomínios</h3>
          <p>Cadastrar, editar e visualizar condomínios.</p>
        </div>

        <div className="admin-card" onClick={() => navigate("/admin/entregas")}>
          <div className="icon deliveries"></div>
          <h3>Relatórios de Entregas</h3>
          <p>Acompanhe entregas pendentes e finalizadas.</p>
        </div>

        <div className="admin-card" onClick={() => navigate("/admin/config")}>
          <div className="icon settings"></div>
          <h3>Configurações</h3>
          <p>Ajustes gerais do sistema e preferências.</p>
        </div>

      </section>
    </div>
  );
}

export default AdminDashboard;
