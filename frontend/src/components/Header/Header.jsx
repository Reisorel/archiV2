import { useNavigate } from "react-router-dom"; // Hook pour naviguer programmatique
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="logo">
        <h1 onClick={() => navigate("/")}>CASSANDRE MARION</h1>
        <h2>ARCHITECTE DE-HMONP</h2>
      </div>{" "}
      <div className="header-content">
        <h1>A PROPOS</h1>
        <h1>PROJETS</h1>
        <h1>MISSIONS</h1>
        <h1>CONTACT</h1>
      </div>
    </header>
  );
}
