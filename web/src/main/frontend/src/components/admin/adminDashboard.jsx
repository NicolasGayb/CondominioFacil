import React from "react";
import AdminLayout from "./layout/AdminLayout";
import "./adminDashboard.css";

function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="page-title">Visão Geral da Plataforma</h1>
      <p className="subtitle">Gerencie condomínios e configurações da plataforma.</p>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Resumo Geral</h3>
          <div className="stats">
            <div><strong>0</strong><span>Total de Entregas</span></div>
            <div><strong>0</strong><span>Retiradas Pendentes</span></div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Gerenciar Condomínios</h3>
          <p>Adicione, edite ou remova condomínios.</p>
        </div>

        <div className="dashboard-card">
          <h3>Configurações da Plataforma</h3>
          <p>Ajustes globais do sistema.</p>
        </div>

        <div className="dashboard-card">
          <h3>Editar Usuários</h3>
          <p>Gerencie permissões e redefina senhas.</p>
        </div>

      </div>

    </AdminLayout>
  );
}

export default AdminDashboard;
