import React, { useEffect, useRef } from "react"; // Import des hooks
import { useLocation } from "react-router-dom"; // Import useLocation de react router
import ordre from "../../assets/logos/ordre.jpg"; // Import image ordre
import upChevron from "../../assets/icons/up-arrow.svg"; // Import svg flèche

import gsap from "gsap"; // Import librairie gsap
import ScrollTrigger from "gsap/ScrollTrigger"; // Import du plugin ScrollTrigger pour gérer les animations liées au scroll
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import du plugin ScrollTo pour gérer le défilement animé
import "./Footer.scss"; // Import css

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger); // Activation des plugins gsap

export default function FooterTest() {

  const iconsRef = useRef(null); // Référence à l'élément DOM icons
  const linkedinRef = useRef(null); // Référence à l'élément DOM linkedin
  const instagramRef = useRef(null); // Référence à l'élément DOM insta

  const location = useLocation(); // Récupère les changements d'URL
  const footerRef = useRef(null); // Référence à l'élément DOM du footer
  const triggerRef = useRef(null); // Référence au trigger GSAP

  // Fonction de retour en haut de la page avec une animation fluide
  const handleScrollToTop = () => {
    gsap.to(window, {
      duration: 1, // Durée du défilement (en secondes)
      scrollTo: { y: 0 }, // Définit la position cible (0 = haut de la page)
      ease: "power2.inOut", // Courbe d'animation pour une transition fluide
    });
  };

  // Gère l'arrivée des icones
  useEffect(() => {
    if (!linkedinRef.current || !instagramRef.current || !iconsRef.current) {
      console.warn("Une ou plusieurs références sont nulles !");
      return;
    }

    gsap.fromTo(
      [linkedinRef.current, instagramRef.current],
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: {
          amount: 0.6, // Augmente la durée totale du stagger
          from: "start",
        },
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      }
    );

    // Forcer ScrollTrigger à recalculer ses positions après le chargement
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return; // Vérifie que le footer est bien monté

    // Fonction pour calculer le "chevauchement" (overlap)
    const getOverlap = () => Math.min(window.innerHeight, footer.offsetHeight);

    // Fonction pour ajuster dynamiquement la marge supérieure
    const adjustFooterOverlap = () => {
      if (footer) {
        const overlap = getOverlap();
        footer.style.marginTop = `-${overlap}px`;
      }
    };

    // Nettoie l'ancien trigger avant d'en créer un nouveau
    if (triggerRef.current) {
      triggerRef.current.kill();
    }

    // Laisse un délai pour que le DOM soit prêt avant d'initialiser GSAP
    const timeout = setTimeout(() => {
      adjustFooterOverlap();

      // Crée le trigger GSAP
      const trigger = ScrollTrigger.create({
        trigger: footer,
        start: `top ${window.innerHeight - getOverlap()}`,
        end: `+=${getOverlap()}`,
        pin: true,
        markers: false, // Désactiver les marqueurs en production
      });

      triggerRef.current = trigger; // Stocke le trigger dans la ref
    }, 50); // Petit délai pour laisser le DOM se stabiliser

    // Écoute les événements de redimensionnement
    window.addEventListener("resize", adjustFooterOverlap);

    // Cleanup
    return () => {
      clearTimeout(timeout); // Nettoie le timeout
      if (triggerRef.current) {
        triggerRef.current.kill(); // Supprime le trigger GSAP
        triggerRef.current = null;
      }
      window.removeEventListener("resize", adjustFooterOverlap); // Supprime l'écouteur
    };
  }, [location.pathname]); // Réagit aux changements d'URL

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        <div className="footer-left-paragraph">
          <p>
            <strong>Architecte diplômée d'état</strong>
          </p>
          <p>Habilitée à la Maîtrise d'Oeuvre</p>
          <p>en son Nom Propre</p>
          <div className="footer-ordre">
            <img src={ordre} alt="ordre" />
          </div>
        </div>

        <div className="footer-center-paragraph">
          <p>
            <strong>Agence d'architecture basée à Rennes</strong>
          </p>
          <p>BRETAGNE / NORMANDIE / PARIS</p>
          <div
            data-hover-detect="true"
            className="footer-chevron"
            onClick={handleScrollToTop}
          >
            <img src={upChevron} alt="Retour en haut" />
          </div>
        </div>

        <div className="footer-right-paragraph">
          <p>
            <strong>T: 06 88 59 75 02</strong>
          </p>
          <p>cassandre.architecte@gmail.com</p>
          <div
          ref={iconsRef}
          className="footer-icon-container">
            <div data-hover-detect="true" className="footer-icon" ref={linkedinRef}>
              <a
                href="https://www.linkedin.com/in/cassandre-marion-0ab776128/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <div data-hover-detect="true" className="footer-icon" ref={instagramRef}>
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
      </div>
    </footer>
  );
}
