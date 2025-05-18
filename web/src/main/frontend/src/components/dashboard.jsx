import "./Dashboard.css";
import encomendaImg from "../assets/encomenda.svg"; // coloque sua imagem aqui
import avisoImg from "../assets/aviso.svg";         // idem

const cards = [
  {
    id: 1,
    label: "Encomendas aguardando",
    value: 0,
    icon: encomendaImg,
  },
  {
    id: 2,
    label: "Avisos novos",
    value: 0,
    icon: avisoImg,
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>
        Bem-vindo ao <span className="highlight">Condomínio Fácil!</span>
      </h1>
      <p className="subtitle">
        Aqui você acompanha suas encomendas, solicitações e avisos do condomínio em tempo real.
        <br />
        Use o menu para navegar.
      </p>

      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.icon} alt={card.label} className="icon" />
            <div className="value">{card.value}</div>
            <div className="label">{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
