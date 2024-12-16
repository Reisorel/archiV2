import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true); // Contrôle la visibilité
  const [lastScrollY, setLastScrollY] = useState(0); // Dernière position de scroll

  // Fonction pour gérer le scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowHeader(false); // Scroll vers le bas -> on cache le header
    } else {
      setShowHeader(true); // Scroll vers le haut -> on montre le header
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Fonction pour scroller à une section spécifique
  const scrollToSection = (targetId) => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: `#${targetId}`,
      ease: "power2.inOut",
    });
  };

  return (
    <header className={`header-container ${showHeader ? "show" : "hide"}`}>
      <div className="logo">
        <h1
          onClick={() => {
            navigate("/"); // Navigation si nécessaire
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll fluide vers le haut
          }}
        >
          CASSANDRE MARION
        </h1>
        <h2>ARCHITECTE DE-HMONP</h2>
      </div>

      <div className="header-content">
        <h1 onClick={() => scrollToSection("news")}>ACTUALITES</h1>
        <h1 onClick={() => scrollToSection("missions")}>MISSIONS</h1>
        <h1 onClick={() => scrollToSection("projects")}>PROJETS</h1>
        <h1 onClick={() => scrollToSection("contact")}>CONTACT</h1>
      </div>
    </header>
  );
}
