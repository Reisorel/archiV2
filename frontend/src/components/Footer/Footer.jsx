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

      <div className="ordre">
        <img src={ordre} alt="" />
      </div>

      <div className="footer-paragraph">
        <h3>A Propos</h3>
        <p>Voici un exemple de paragraphe devant se situer dans le flow du footer-paragrah</p>
      </div>

      <div className="footer-paragraph">
        <h3>Contact</h3>
      </div>

      <div className="footer-paragraph">
        <h3>Réseaux</h3>
      </div>


      {/* <p>2024 - CASSANDRE MARION ARCHITECTURE</p> */}

      <div className="chevron" onClick={handleScrollToTop}>
        <img src={upChevron} alt="up-chevron" />
      </div>
      </div>
    </footer>
  );
}

export default Footer;
