import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import React from "react";
import AdminDashboard from "./components/admin/adminDashboard";
import SindicoDashboard from "./components/sindico/sindicoDashboard";
import PorteiroDashboard from "./components/porteiro/porteiroDashboard";
import MoradorDashboard from "./components/morador/moradorDashboard";

function AdminPage() {
  return <h2>Página do Administrador</h2>;
}
function SindicoPage() {
  return <h2>Página do Síndico</h2>;
}
function PortariaPage() {
  return <h2>Página da Portaria</h2>;
}
function MoradorPage() {
  return <h2>Página do Morador</h2>;
}

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/sindico" element={<SindicoDashboard />} />
      <Route path="/porteiro" element={<PorteiroDashboard />} />
      <Route path="/morador" element={<MoradorDashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
