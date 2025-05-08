import { useState, useEffect, useRef, FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import "./Header.scss"; // Renommé en .scss pour la cohérence
import leftChevronBlack from "../../assets/icons/left-arrow-black.svg";

// Interface pour les données de projet
interface Project {
  id: string;
  title: string;
  slug: string;
  // Ajoutez d'autres champs si nécessaire
}

// Interface pour l'événement de changement d'état de la modal
interface ModalStateEvent extends CustomEvent {
  detail: boolean;
}

gsap.registerPlugin(ScrollToPlugin);

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const [lockScroll, setLockScroll] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isMobileOn, setIsMobileOn] = useState<boolean>(false);

  const logoRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchProjects = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:3000/api/admin/projects");
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data: Project[] = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Erreur lors du fetch des projets:", error);
      }
    };
    fetchProjects();
  }, []);

  // Gère l'arrivée du logo
  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { x: -300, opacity: 0 }, // Départ hors écran à gauche
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" } // Arrivée fluide
      );
    }
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

  // Bascule l'état du menu mobile (fermé/ouvert)
  const toggleMobileMenu = (): void => {
    setIsMobileOn((prev) => !prev);
    setIsDropdownOpen(false); // Ferme toujours le sous-menu projets
  };

  // Ferme le menu mobile après un clic sur un lien
  const closeMobileMenu = (): void => setIsMobileOn(false);

  // Gère l'affichage du header au scroll
  useEffect(() => {
    const handleScroll = (): void => {
      if (lockScroll) return; // Si le scroll est verrouillé, on ne fait rien

      setShowHeader(window.scrollY < lastScrollY); // Affichage du header en fonction du scroll
      setLastScrollY(window.scrollY); // Mise à jour de la position du scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Supprime l'écouteur scroll lors du démontage pour éviter fuite de mémoire.
  }, [lastScrollY, lockScroll]); // Dépend aussi de lockScroll

  // Écoute les changements de l'état de la modale
  useEffect(() => {
    const handleModalStateChange = (event: Event): void => {
      const modalEvent = event as ModalStateEvent;
      setShowHeader(!modalEvent.detail); // Si la modale est ouverte, on cache le header
      setLockScroll(modalEvent.detail); // Bloque le scroll si la modale est ouverte, et le débloque si fermée
    };

    document.addEventListener("modalStateChange", handleModalStateChange as EventListener); // Détecte l'événmeent modalStateChange sur l'ensemble du doc
    return () => {
      document.removeEventListener("modalStateChange", handleModalStateChange as EventListener); // Supprime écouteur
    };
  }, []);

  // Navigation depuis menu
  const handleNavigation = (targetId: string, _isProjectsLink: boolean = false): void => {
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

    // Navigation "contact" : scroll down toute la page actuelle
    if (targetId === "footer") {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: "max" },
        ease: "power2.inOut",
      });
      return;
    }

    // Gérer le scroll si changement de page autre que page principale
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
                aria-label="Visitez le profil Linkedin de Cassandre Marion"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <div className="header-icon">
              <a
                href="https://www.instagram.com/cassandremrn_architecte?igsh=MWw5Z2pzOGI1NnYwaQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Découvrez le profil instagram de Cassandre Marion"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
