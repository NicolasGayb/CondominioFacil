import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

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
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/sindico" element={<SindicoPage />} />
      <Route path="/portaria" element={<PortariaPage />} />
      <Route path="/morador" element={<MoradorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
