import "./Dashboard.css";

const cards = [
  {
    id: 1,
    label: "Encomendas aguardando",
    value: 0,
    iconUrl: "https://www.svgrepo.com/show/499848/package.svg", // ícone de pacote
  },
  {
    id: 2,
    label: "Avisos novos",
    value: 0,
    iconUrl: "https://www.svgrepo.com/show/499794/notification.svg", // ícone de sino
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
            <img src={card.iconUrl} alt={card.label} className="icon" />
            <div className="value">{card.value}</div>
            <div className="label">{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}