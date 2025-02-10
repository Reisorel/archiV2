import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { projectsData } from "../Projects/ProjectsDetails/Data/ProjectData";
import ScrollLock from "react-scrolllock"; // 👈 Ajout de react-scrolllock


gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [lockScroll, setLockScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileOn, setIsMobileOn] = useState(false);
  // useDisableScroll(isMobileOn);

  const logoRef = useRef(null); // Référence pour GSAP
  const dropdownRef = useRef(null); // Référence pour le menu déroulant project

  //Gère l'arrivée du logo
  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { x: -300, opacity: 0 }, // Départ hors écran à gauche
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" } // Arrivée fluide
    );
  }, []);

  //Gère le menu déroulant projects
  useEffect(() => {
    if (dropdownRef.current) {
      if (isDropdownOpen) {
        gsap.fromTo(
          dropdownRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.2, ease: "power2.out" }
        );
      } else {
        gsap.to(dropdownRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isDropdownOpen]);

  // Basculer l'état du menu mobile
  const toggleMobileMenu = () => setIsMobileOn((prev) => !prev);

  // Ferme le menu mobile après un clic sur un lien
  const closeMobileMenu = () => setIsMobileOn(false);

  // Gérer l'affichage du header au scroll
  useEffect(() => {
    const handleScroll = () => {
      if (lockScroll) return; // Si le scroll est verrouillé, on ne fait rien

      setShowHeader(window.scrollY < lastScrollY); // Affichage du header en fonction du scroll
      setLastScrollY(window.scrollY); // Mise à jour de la position du scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, lockScroll]); // Dépend aussi de lockScroll

  // Écouter les changements de l'état de la modale
  useEffect(() => {
    const handleModalStateChange = (event) => {
      setShowHeader(!event.detail); // Si la modale est ouverte, on cache le header
      setLockScroll(event.detail); // Bloquer le scroll si la modale est ouverte, et le débloquer si fermée
    };

    document.addEventListener("modalStateChange", handleModalStateChange);
    return () => {
      document.removeEventListener("modalStateChange", handleModalStateChange);
    };
  }, []);

  useEffect(() => {
    if (isMobileOn) {
      document.body.classList.add("no-scroll");
      console.log("Scroll désactivé !");
    } else {
      document.body.classList.remove("no-scroll");
      console.log("Scroll réactivé !");
    }
  }, [isMobileOn]);

  const handleNavigation = (targetId) => {
    closeMobileMenu(); // Ferme le menu mobile après un clic

    if (targetId === "projects") {
      if (location.pathname === "/projects") {
        // Déjà sur "/projects" → Scroll smooth en haut
        gsap.to(window, { duration: 0.8, scrollTo: 0, ease: "power2.inOut" });
      } else {
        // Pas encore sur "/projects" → On y navigue
        navigate("/projects", { replace: true });
        window.scrollTo(0, 0);
      }
      return;
    }

    // Si on clique sur "CONTACT", on reste sur la page et scrolle tout en bas sans changer l'URL
    if (targetId === "footer") {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: "max" },
        ease: "power2.inOut",
      });
      return;
    }

    // Gérer le scroll vers une section même si on est sur une autre page
    if (location.pathname !== "/") {
      // On est sur une autre page → Naviguer vers "/" et scroller après chargement
      navigate("/", { replace: true, state: { scrollTo: targetId } });
      window.scrollTo(0, 0);

      requestAnimationFrame(() => {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: `#${targetId}`,
          ease: "power2.inOut",
        });
      });
      return;
    }

    // Scroll smooth vers la section demandée
    gsap.to(window, {
      duration: 0.8,
      scrollTo: `#${targetId}`,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      {/* Activation du scroll lock si le menu mobile est ouvert */}
      <ScrollLock isActive={isMobileOn} />

      <header className={`header-container ${showHeader ? "show" : "hide"}`}>
        <div
          ref={logoRef}
          className="header-logo"
          data-hover-detect="true"
          onClick={() => handleNavigation("header-logo")}
        >
          <h1>CASSANDRE MARION</h1>
          <h2>ARCHITECTE DE-HMONP</h2>
        </div>

        <div className="header-hamburger-menu" onClick={toggleMobileMenu}>
          {isMobileOn ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>
          }
        </div>

        <div className={`header-content ${isMobileOn ? "mobile-open" : ""}`}>
          <ul className="header-nav-list" data-hover-detect="true">
            <li onClick={() => handleNavigation("news")}>
              <span>ACTUALITÉS</span>
            </li>
            <li
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="projects-menu"
            >
              <span onClick={() => handleNavigation("projects", true)}>
                PROJETS
              </span>

              <ul
                ref={dropdownRef}
                className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
              >
                {projectsData.map((project) => (
                  <li
                    key={project.id}
                    onClick={() => navigate(`/projects/${project.slug}`)}
                  >
                    <p>{project.title}</p>
                  </li>
                ))}
              </ul>
            </li>

            <li onClick={() => handleNavigation("missions")}>
              <span>MISSIONS</span>
            </li>
            <li onClick={() => handleNavigation("about")}>
              <span>A PROPOS</span>
            </li>
            <li onClick={() => handleNavigation("footer")}>
              <span>CONTACT</span>
            </li>
            <li onClick={() => handleNavigation("footer")}></li>
          </ul>
        </div>
      </header>
    </>
  );

}
