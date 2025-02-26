import React, { useEffect, useRef } from "react"; // Import des hooks
import { useLocation } from "react-router-dom"; // Import useLocation de react router
import ordre from "../../assets/logos/ordre.jpg"; // Import image ordre
import upChevron from "../../assets/icons/up-arrow.svg"; // Import svg flèche

import gsap from "gsap"; // Import librairie gsap
import ScrollTrigger from "gsap/ScrollTrigger"; // Import du plugin ScrollTrigger pour gérer les animations liées au scroll
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import du plugin ScrollTo pour gérer le défilement animé
import "./Footer2.scss"; // Import css

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger); // Activation des plugins gsap

export default function Footer2() {
  // Refs des icones
  const iconsRef = useRef(null); // Référence à l'élément DOM icons
  const linkedinRef = useRef(null); // Référence à l'élément DOM linkedin
  const instagramRef = useRef(null); // Référence à l'élément DOM insta

  const location = useLocation(); // Récupère les changements d'URL

  // Fonction retour haut de page
  const handleScrollToTop = () => {
    gsap.to(window, {
      duration: 1, // Durée du défilement (en secondes)
      scrollTo: { y: 0 }, // Définit la position cible (0 = haut de la page)
      ease: "power2.inOut", // Courbe d'animation pour une transition fluide
    });
  };

  // Fonction arrivée des icones
  // Fonction arrivée des icônes
  useEffect(() => {
    if (!linkedinRef.current || !instagramRef.current || !iconsRef.current) {
      console.warn("Une ou plusieurs références sont nulles !");
      return;
    }

    const icons = [linkedinRef.current, instagramRef.current];

    gsap.fromTo(
      icons,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: {
          each: 0.3, // Ajoute un délai entre chaque icône
          from: "start",
          onComplete: function () {
            icons.forEach((icon, index) => {
              setTimeout(() => {
                if (icon) {
                  icon.classList.add("footer-visible");
                } else {
                  console.warn(
                    `Impossible d'ajouter la classe, icône ${index} introuvable ❌`
                  );
                }
              }, index * 300);
            });

            // Vérification après un petit délai
          },
        },
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 5%", // Déclenche plus tôt
          end: "top 5%", // Supprime la classe juste avant que l'icône disparaisse
          toggleActions: "restart none none none", // Toujours repartir de zéro
          onLeave: () => {
            console.log("🚨 Icônes recouvertes, suppression des classes...");
            icons.forEach((icon) => {
              if (icon) {
                icon.classList.remove("footer-visible"); // Supprime la classe pour l'animation CSS
                gsap.set(icon, { x: 300, opacity: 0 }); // Réinitialisation immédiate de la position
                console.log(
                  `Classe retirée et état réinitialisé pour ${icon.className} ❌`
                );
              }
            });
          },
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [location.pathname]);

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-sticky">
          <div className="content">
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
              <div
                data-hover-detect="true"
                className="footer-chevron"
                onClick={handleScrollToTop}
              >
                <img src={upChevron} alt="Retour en haut" />
              </div>
              <p>
                <strong>Atelier d'architecture basée à Rennes</strong>
              </p>
              <p>BRETAGNE / NORMANDIE / PARIS</p>
            </div>
            <div className="footer-right-paragraph">
              <p>
                <strong>T: 06 88 59 75 02</strong>
              </p>
              <p>cassandre.architecture@gmail.com</p>
              <div ref={iconsRef} className="footer-icon-container">
                <div
                  data-hover-detect="true"
                  className="footer-icon"
                  ref={linkedinRef}
                >
                  <a
                    href="https://www.linkedin.com/in/cassandre-marion-0ab776128/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
                <div
                  data-hover-detect="true"
                  className="footer-icon"
                  ref={instagramRef}
                >
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
