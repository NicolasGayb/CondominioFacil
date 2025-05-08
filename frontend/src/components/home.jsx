import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const imageUrl = "https://img.freepik.com/free-photo/deliver-man-holding-package_23-2148890014.jpg?t=st=1746472253~exp=1746475853~hmac=3bc8c0e5d944f411d0bbdef373db62c249f1ca7142a49fb59c360ad04d6578dd&w=740"; // Substitua pela URL real

  return (
    <div className="home-bg">
      <div className="home-content">
        <div className="home-logo">
          <img src={imageUrl} alt="Caixa de Correio" />
        </div>
        <h1 className="home-title">Porteiro Digital</h1>
        <p className="home-description">
          Esperando aquela grande encomenda chegar?<br />
          A gente resolve pra você e te avisa quando chegar!
        </p>
        <button className="home-btn" onClick={() => navigate("/login")}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Home;
