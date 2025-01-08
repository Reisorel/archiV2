import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileOn, setIsMobileOn] = useState(false);

  // Basculer l'état du menu mobile
  const toggleMobileMenu = () => setIsMobileOn((prev) => !prev);

  // Ferme le menu mobile après un clic sur un lien
  const closeMobileMenu = () => setIsMobileOn(false);

  // Gérer l'affichage du header au scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Gestion du scroll après navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: `#${location.state.scrollTo}`,
        ease: "power2.inOut",
      });
    }
  }, [location]);

  const handleNavigation = (targetId, isExternalPage = false) => {
    closeMobileMenu(); // Ferme le menu mobile après un clic

    if (isExternalPage) {
      if (location.pathname === "/projects") {
        // Si on est déjà sur /projects et qu'on reclique sur "PROJETS", scroll smooth vers le haut
        gsap.to(window, { duration: 0.8, scrollTo: { y: 0 }, ease: "power2.inOut" });
      } else {
        // Sinon, navigation directe vers "/projects" sans animation et reset en haut immédiatement
        navigate("/projects");
        window.scrollTo(0, 0);
      }
      return;
    }

    if (targetId === "footer") {
      // Si on clique sur "CONTACT", scroll smooth vers le footer sans changer de page
      gsap.to(window, { duration: 0.8, scrollTo: `#footer`, ease: "power2.inOut" });
      return;
    }

    if (location.pathname === "/") {
      // Si on est déjà sur la page principale, scroll smooth vers la section demandée
      gsap.to(window, { duration: 0.8, scrollTo: `#${targetId}`, ease: "power2.inOut" });
    } else {
      // Naviguer vers "/" et scroller immédiatement après le changement d'URL
      navigate("/", { replace: true });

      // Attendre le prochain cycle de rendu avant d'exécuter GSAP
      requestAnimationFrame(() => {
        gsap.to(window, { duration: 0.8, scrollTo: `#${targetId}`, ease: "power2.inOut" });
      });
    }
  };

  return (
    <header className={`header-container ${showHeader ? "show" : "hide"}`}>
      <div className="header-logo">
        <h1
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
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
          <li onClick={() => handleNavigation("news")}><span>ACTUALITÉS</span></li>
          <li onClick={() => handleNavigation("missions")}><span>MISSIONS</span></li>
          <li onClick={() => handleNavigation("projects", true)}><span>PROJETS</span></li>
          <li onClick={() => handleNavigation("about")}><span>A PROPOS</span></li>
          <li onClick={() => handleNavigation("footer")}><span>CONTACT</span></li>
        </ul>
      </div>
    </header>
  );
}
