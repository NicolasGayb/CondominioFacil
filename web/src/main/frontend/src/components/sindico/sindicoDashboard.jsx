import React from "react";
import "./sindicoDashboard.css";

function SindicoDashboard() {
  return (
    <div className="sindico-container">
      <h1>Painel do Síndico</h1>

      <div className="sindico-grid">
        <div className="sindico-card">
          <h3>Entregas Pendentes</h3>
          <p>Visualize todas as entregas aguardando retirada.</p>
        </div>

        <div className="sindico-card">
          <h3>Entregas Concluídas</h3>
          <p>Acompanhe as entregas já finalizadas.</p>
        </div>

        <div className="sindico-card">
          <h3>Moradores</h3>
          <p>Visualize todos os moradores do condomínio.</p>
        </div>

        <div className="sindico-card">
          <h3>Relatórios</h3>
          <p>Gere relatórios completos de movimentações.</p>
        </div>
      </div>
    </div>
  );
}

export default SindicoDashboard;
