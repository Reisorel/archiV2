import { useEffect, useRef, FC } from "react";
import { useLocation } from "react-router-dom";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "./Footer.scss";
import ordre from "../../assets/logos/ordre.jpg";
import upChevron from "../../assets/icons/up-arrow.svg";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger); // Activation des plugins gsap

const Footer: FC = () => {
  // Refs des icones
  const iconsRef = useRef<HTMLDivElement | null>(null); // Refs toutes icones (div conteneur)
  const linkedinRef = useRef<HTMLDivElement | null>(null); // Ref icone linkedin (div)
  const instagramRef = useRef<HTMLDivElement | null>(null); // Ref icone instagram (div)

  const location = useLocation();

  // Fonction retour haut de page
  const handleScrollToTop = (): void => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power2.inOut",
    });
  };

  // Fonction arrivée des icones
  useEffect(() => {
    if (!linkedinRef.current || !instagramRef.current || !iconsRef.current) {
      console.warn("Une ou plusieurs références sont nulles !");
      return;
    }

    // Typage explicite du tableau d'icônes
    const icons: HTMLDivElement[] = [linkedinRef.current, instagramRef.current];

    gsap.fromTo(
      icons,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: {
          each: 0.3,
          from: "start",
          // Typage explicite de la fonction de callback
          onComplete: function (): void {
            icons.forEach((icon: HTMLDivElement, index: number) => {
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
          },
        },
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 5%",
          end: "top 5%",
          toggleActions: "restart none none none",
          // Typage explicite de la fonction de callback
          onLeave: (): void => {
            icons.forEach((icon: HTMLDivElement) => {
              if (icon) {
                icon.classList.remove("footer-visible");
                gsap.set(icon, { x: 300, opacity: 0 });
              }
            });
          },
        },
      }
    );

    ScrollTrigger.refresh();

    // Fonction de nettoyage
    return (): void => {
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) =>
        trigger.kill()
      );
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
                <img
                  src={ordre}
                  alt="Ordre des architectes"
                  width="200"
                  height="25"
                />
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
                <strong>Atelier d'architecture basé à Rennes</strong>
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
                    aria-label="Visitez le profil Linkedin de Cassandre Marion"
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
                    aria-label="Découvrez le profil instagram de Cassandre Marion"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
