import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home"; 
import Login from "./components/login"; 
import Register from "./components/register";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />           {/* Home na rota raiz */}
      <Route path="/login" element={<Login />} />     {/* Login separado */}
      <Route path="/register" element={<Register />} /> {/* Cadastro, se houver */}
    </Routes>
  </BrowserRouter>
);

export default App;
