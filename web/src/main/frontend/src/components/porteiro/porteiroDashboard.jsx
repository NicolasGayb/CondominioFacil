import React from "react";
import "./porteiroDashboard.css";

function PorteiroDashboard() {
  return (
    <div className="porteiro-container">
      <h1>Painel da Portaria</h1>

      <div className="porteiro-grid">
        <div className="porteiro-card">
          <h3>Registrar Entrega</h3>
          <p>Cadastre novas encomendas que chegarem.</p>
        </div>

        <div className="porteiro-card">
          <h3>Histórico</h3>
          <p>Veja todas as entregas realizadas.</p>
        </div>

        <div className="porteiro-card">
          <h3>Moradores</h3>
          <p>Consulte informações dos moradores.</p>
        </div>

        <div className="porteiro-card">
          <h3>Notificações</h3>
          <p>Envie avisos automáticos para moradores.</p>
        </div>
      </div>
    </div>
  );
}

export default PorteiroDashboard;
