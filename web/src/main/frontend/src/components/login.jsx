import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../services/api"; // Certifique-se de que esse serviço está configurado corretamente

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Ajuste o endpoint e o payload conforme sua API
      const response = await api.post("/users/login", { email, senha: password });
      // Exemplo: supondo que o token venha em response.data.token
      if (response.data && response.data.token) {
        // Salve o token no localStorage para manter a sessão
        localStorage.setItem("token", response.data.token);
        // Redirecione para a página principal do sistema (ajuste o caminho conforme necessário)
        navigate("/dashboard");
      } else {
        setError("Credenciais inválidas. Tente novamente.");
      }
    } catch (err) {
      setError("Erro ao fazer login. Verifique seus dados.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h2>Porteiro Digital</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
          {error && <div className="login-error">{error}</div>}
        </form>
        <div className="login-register-link">
          <span>Não tem conta?</span>
          <button type="button" onClick={() => navigate("/register")}>
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;