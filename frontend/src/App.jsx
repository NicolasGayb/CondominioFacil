import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />           {/* Página inicial */}
        <Route path="/login" element={<Login />} />     {/* Login */}
        <Route path="/register" element={<Register />} /> {/* Registro */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
