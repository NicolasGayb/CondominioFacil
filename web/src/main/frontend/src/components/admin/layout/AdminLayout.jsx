import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">Porteiro Digital</div>

        <nav className="menu">
          <button onClick={() => navigate("/admin")}>🏠 Início</button>
          <button onClick={() => navigate("/admin/usuarios")}>👥 Gerenciar Usuários</button>
          <button onClick={() => navigate("/admin/condominios")}>🏢 Condomínios</button>
          <button onClick={() => navigate("/admin/relatorios")}>📊 Relatórios</button>
          <button onClick={() => navigate("/admin/config")}>⚙️ Configurações</button>
        </nav>

        <div className="user-area">
          <div className="user-info">
            <strong>Nicolas</strong>
            <span>Administrador</span>
          </div>
          <button className="logout-btn" onClick={logout}>Sair</button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
