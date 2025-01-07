import "./Footer.css";
import ordre from "../../assets/logos/ordre.jpg";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import upChevron from "../../assets/icons/up-arrow.svg";

// Enregistrement du plugin GSAP
gsap.registerPlugin(ScrollToPlugin);

function Footer() {
  // Fonction pour gérer le scroll
  const handleScrollToTop = () => {
    gsap.to(window, {
      duration: 1, // Durée du défilement (en secondes)
      scrollTo: { y: 0 }, // Définit la position cible (0 = haut de la page)
      ease: "power2.inOut", // Animation fluide
    });
  };

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="left-paragraph">
          <p>
            <strong>Architecte diplômée d'état</strong>
          </p>
          <p> Habilitée à la Maîtrise</p>
          <p>d'Oeuvre en son Nom Propre</p>
          <div className="ordre">
            <img src={ordre} alt="ordre" />
          </div>
        </div>

        <div className="center-paragraph">
          <p>
            <strong>Agence d'architecture basée à Rennes</strong>
          </p>
          <p>BRETAGNE / NORMANDIE / PARIS</p>
          <div className="chevron" onClick={handleScrollToTop}>
            <img src={upChevron} alt="up-chevron" />
          </div>
        </div>

        <div className="right-paragraph">
          <p>
            <strong>T: 06 88 59 75 02</strong>
          </p>
          <p>cassandre.architecte@gmail.com</p>
          <div className="icon-container">
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/cassandre-marion-0ab776128/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <div className="icon">
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
