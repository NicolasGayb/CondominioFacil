import React from "react";
import "./moradorDashboard.css";

function MoradorDashboard() {
  return (
    <div className="morador-container">
      <h1>Painel do Morador</h1>

      <div className="morador-grid">
        <div className="morador-card">
          <h3>Minhas Entregas</h3>
          <p>Acompanhe o status das suas encomendas.</p>
        </div>

        <div className="morador-card">
          <h3>Entregas Pendentes</h3>
          <p>Retire encomendas já disponíveis.</p>
        </div>

        <div className="morador-card">
          <h3>Histórico</h3>
          <p>Veja todas as entregas que já recebeu.</p>
        </div>

        <div className="morador-card">
          <h3>Configurações</h3>
          <p>Atualize suas informações pessoais.</p>
        </div>
      </div>
    </div>
  );
}

export default MoradorDashboard;
