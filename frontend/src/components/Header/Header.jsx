import { useNavigate } from "react-router-dom"; // Hook pour naviguer programmatique
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <h2 className="logo">
        <span onClick={() => navigate("/")}>CASSANDRE MARION ARCHITECTE</span>
      </h2>{" "}
      <div className="header-content">
        <h1>A Propos</h1>
        <h1>Projets</h1>
        <h1>Parcours</h1>
        <h1>Contact</h1>
      </div>
    </header>
  );
}
