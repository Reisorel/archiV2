import React, { useState, useEffect, useRef } from "react";
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
  const logoRef = useRef(null); // Référence pour GSAP


  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { x: -300, opacity: 0 }, // Départ hors écran à gauche
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" } // Arrivée fluide
    );
  }, []);

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

  const handleNavigation = (targetId) => {
    closeMobileMenu(); // Ferme le menu mobile après un clic

    if (targetId === "projects") {
      // Si on clique sur "PROJETS", on va sur "/projects" et on remonte en haut
      navigate("/projects", { replace: true });
      window.scrollTo(0, 0);
      return;
    }

    if (targetId === "footer") {
      // Si on clique sur "CONTACT", on reste sur la page et scrolle tout en bas sans changer l'URL
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: "max" }, // "max" permet d'aller tout en bas
        ease: "power2.inOut",
      });
      return;
    }

    if (location.pathname !== "/") {
      // Si on est sur une autre page, on navigue vers "/"
      navigate("/", { replace: true });

      // Exécuter le scroll après la navigation une fois que la page est bien chargée
      requestAnimationFrame(() => {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: `#${targetId}`,
          ease: "power2.inOut",
        });
      });
      return;
    }

    // Si on est déjà sur "/", scroller immédiatement à la section demandée
    gsap.to(window, {
      duration: 0.8,
      scrollTo: `#${targetId}`,
      ease: "power2.inOut",
    });
  };



  return (
    <header className={`header-container ${showHeader ? "show" : "hide"}`}>
      <div
        ref={logoRef}
        className="header-logo"
        data-hover-detect="true"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <h1>CASSANDRE MARION</h1>
        <h2>ARCHITECTE DE-HMONP</h2>
      </div>

      <div className="header-hamburger-menu" onClick={toggleMobileMenu}>
        {isMobileOn ? "X" : "☰"}
      </div>

      <div className={`header-content ${isMobileOn ? "mobile-open" : ""}`}>
        <ul
        className="header-nav-list"
        data-hover-detect="true">
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
          <li onClick={() => handleNavigation("footer")}>
          </li>
        </ul>
      </div>
    </header>
  );
}
