import { useRef, useEffect } from "react";
import ordre from "../../assets/logos/ordre.jpg";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import upChevron from "../../assets/icons/up-arrow.svg";
import "./Footer.css";

// Enregistrement du plugin GSAP
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function Footer() {
  // Fonction pour gérer le scroll
  const handleScrollToTop = () => {
    gsap.to(window, {
      duration: 1, // Durée du défilement (en secondes)
      scrollTo: { y: 0 }, // Définit la position cible (0 = haut de la page)
      ease: "power2.inOut", // Animation fluide
    });
  };
  //
  const linkedinRef = useRef(null);
  const instagramRef = useRef(null);
  const iconsRef = useRef(null);
  const footerRef = useRef(null); // Gère le reveal footer

  useEffect(() => {
    const footer = footerRef.current;

    if (footer) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: footer,
        pin: true,
        start: "bottom bottom",
        end: "+=100%",
      });

      return () => {
        scrollTrigger.kill(); // Nettoyage de l'animation lors du démontage
      };
    }
  }, []);

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

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="left-paragraph">
          <p>
            <strong>Architecte diplômée d'état</strong>
          </p>
          <p>Habilitée à la Maîtrise d'Oeuvre</p>
          <p>en son Nom Propre</p>
          <div className="ordre">
            <img src={ordre} alt="ordre" />
          </div>
        </div>

        <div className="center-paragraph">
          <p>
            <strong>Agence d'architecture basée à Rennes</strong>
          </p>
          <p>BRETAGNE / NORMANDIE / PARIS</p>
          <div
          data-hover-detect="true"
          className="chevron"
          onClick={handleScrollToTop}>
            <img
            src={upChevron} alt="up-chevron" />
          </div>
        </div>

        <div className="right-paragraph">
          <p>
            <strong>T: 06 88 59 75 02</strong>
          </p>
          <p>cassandre.architecte@gmail.com</p>
          <div ref={iconsRef} className="icon-container">
            <div data-hover-detect="true" className="icon" ref={linkedinRef}>
              <a
                href="https://www.linkedin.com/in/cassandre-marion-0ab776128/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <div data-hover-detect="true" className="icon" ref={instagramRef}>
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

export default Footer;
