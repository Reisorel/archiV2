import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true); // Contrôle la visibilité
  const [lastScrollY, setLastScrollY] = useState(0); // Dernière position de scroll
  // Contrôle du mode mobile
  const [isMobileOn, setIsMobileOn] = useState(false);

  // Fonctionbasculer état mobile
  const toggleMobileMenu = () => {
    setIsMobileOn((prev) => !prev);
  };

  // Fonction pour gérer le header au scroll
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
  const handleNavigation = (targetId, isExternalPage = false) => {
    if (isExternalPage) {
      // Si c'est une page externe (comme "projets"), navigue directement
      navigate(`/${targetId}`);
    } else if (location.pathname === "/") {
      // Si tu es sur la page d'accueil, scrolle smooth
      gsap.to(window, {
        duration: 0.8,
        scrollTo: `#${targetId}`,
        ease: "power2.inOut",
      });
    } else {
      // Sinon, redirige vers la page d'accueil avec un état pour scroller
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  return (
    <header className={`header-container ${showHeader ? "show" : "hide"}`}>
      <div className="header-logo">
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

      <div className="header-hamburger-menu" onClick={toggleMobileMenu}>
        {isMobileOn ? "X" : "☰"}
      </div>

      <div className={`header-content ${isMobileOn ? "mobile-open" : ""}`}>
        <ul className="header-nav-list">
          <li onClick={() => handleNavigation("news")}>
            <span>ACTUALITÉS</span>
          </li>
          <li onClick={() => handleNavigation("missions")}>
            <span>MISSIONS</span>
          </li>
          <li onClick={() => handleNavigation("projects", true)}>
          <span>PROJETS</span>
          </li>
          <li onClick={() => handleNavigation("about")}>
          <span>A PROPOS</span>
          </li>
          <li onClick={() => handleNavigation("footer")}>
            <span>CONTACT</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
