import { useNavigate } from "react-router-dom"; // Hook pour naviguer programmatique
import "./Header.css";
import { gsap } from "gsap"; // Importer GSAP
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


export default function Header() {
  const navigate = useNavigate();

  const scrollToNextSection = () => {
    gsap.to(window, {
      duration: 0.3, // Durée du scroll (en secondes)
      scrollTo: "#news", // Cible l'ID de la section News
      ease: "power2.inOut", // Effet d'animation fluide
    });
  };

  return (
    <header className="header-container">
      <div className="logo">
        <h1 onClick={() => navigate("/")}>CASSANDRE MARION</h1>
        <h2>ARCHITECTE DE-HMONP</h2>
      </div>{" "}
      <div className="header-content">
        <h1 onClick={scrollToNextSection}>ACTUALITES</h1>
        <h1>MISSIONS</h1>
        <h1>PROJETS</h1>
        <h1>CONTACT</h1>
      </div>
    </header>
  );
}
