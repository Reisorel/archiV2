import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { projectsData } from "../Projects/ProjectsDetails/Data/ProjectData";
import ScrollLock from "react-scrolllock"; // package react-scrolllock
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import leftChevronBlack from "../../assets/icons/left-arrow-black.svg";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [lockScroll, setLockScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileOn, setIsMobileOn] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // state pour l'affichage projects dans menu mobile

  const logoRef = useRef(null); // Référence logo
  const dropdownRef = useRef(null); // Référence menu déroulant projets

  // Gère l'arrivée du logo
  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { x: -300, opacity: 0 }, // Départ hors écran à gauche
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" } // Arrivée fluide
    );
  }, []);

  // Gère le menu déroulant projets
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
  const toggleMobileMenu = () => {
    setIsMobileOn((prev) => !prev);
    setIsDropdownOpen(false); // Ferme toujours le sous-menu projets
  };

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
      {/* <ScrollLock isActive={isMobileOn} /> */}

      <header className={`header-container ${showHeader ? "show" : "hide"}`}>
        <div
          ref={logoRef}
          className="header-logo"
          data-hover-detect="true"
          onClick={() => handleNavigation("header-logo")}
        >
          <h1>CASSANDRE MARION</h1>
          <h2>ATELIER D'ARCHITECTURE</h2>
        </div>

        <div
          className={`header-hamburger-menu ${isMobileOn ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className="burger-wrapper">
            <IoMdMenu className="icon-menu" />
            <IoMdClose className="icon-close" />
          </div>
        </div>

        {/* Menu mobile avec le wrapper pour l'animation */}
        <div className={`header-content ${isMobileOn ? "mobile-open" : ""}`}>
          <ul className="header-nav-list" data-hover-detect="true">
            <li onClick={() => handleNavigation("news")}>
              <span>ACTUALITÉS</span>
            </li>
            <li
              className="projects-menu"
              onMouseEnter={() => !isMobileOn && setIsDropdownOpen(true)}
              onMouseLeave={() => !isMobileOn && setIsDropdownOpen(false)}
            >
              {isMobileOn ? (
                isDropdownOpen ? (
                  // Affichage des projets en mode mobile
                  <div className="mobile-projects-menu">
                    <span
                      className="back-button"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <img
                        src={leftChevronBlack}
                        alt="Retour"
                        className="chevron-icon"
                      />
                      Retour
                    </span>
                    <ul>
                      <li
                        onClick={() => {
                          navigate("/projects");
                          window.scrollTo(0, 0);
                          setIsDropdownOpen(false); // Ferme le sous-menu projets
                          setIsMobileOn(false); // Ferme le menu mobile
                        }}
                      >
                        <p>
                          <strong>TOUS LES PROJETS</strong>
                        </p>
                      </li>
                      {projectsData.map((project) => (
                        <li
                          key={project.id}
                          onClick={() => {
                            navigate(`/projects/${project.slug}`);
                            setIsDropdownOpen(false); // Ferme le sous-menu projets
                            setIsMobileOn(false); // Ferme le menu mobile
                          }}
                        >
                          <p>{project.title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  // Affichage du bouton pour entrer dans les projets
                  <span onClick={() => setIsDropdownOpen(true)}>PROJETS</span>
                )
              ) : (
                // Mode desktop, menu déroulant classique
                <>
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
                </>
              )}
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
          <div className="header-icon-container">
            <div className="header-icon">
              <a
                href="https://www.linkedin.com/in/cassandre-marion-0ab776128/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <div className="header-icon">
              <a
                href="https://www.instagram.com/cassandremrn_architecte?igsh=MWw5Z2pzOGI1NnYwaQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
