import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap"; // Importer GSAP
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import leftChevron from "../../assets/icons/left-arrow.svg";
import rightChevron from "../../assets/icons/right-arrow.svg";
import downChevron from "../../assets/icons/down-arrow.svg";
import "./Caroussel.css";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

// État pour l'index du slider, initialisé à 1
const sliderData = [
  {
    id: 1,
    name: "APPARTEMENT PARISIEN",
    description: "Paris 7, Ile-De-France",
  },
  {
    id: 2,
    name: "MAISON INDIVIDUELLE",
    description: "Saint-Aubin, Normandie",
  },
  {
    id: 3,
    name: "GARAGE INDIVIDUEL",
    description: "Rennes, Bretagne",
  },
  {
    id: 4,
    name: "FERME DOUBLE NIVEAU",
    description: "Breville, Normandie",
  },
  {
    id: 5,
    name: "RENOVATION",
    description: "Nantes, Pays-De-La-Loire",
  },
];

export default function Caroussel() {
  const scrollToNextSection = () => {
    gsap.to(window, {
      duration: 0.3, // Durée du scroll (en secondes)
      scrollTo: "#news", // Cible l'ID de la section News
      ease: "power2.inOut", // Effet d'animation fluide
    });
  };

  const [sliderIndex, setSliderIndex] = useState(1);
  const sliderImagesRef = useRef(null); // Référence pour l'image

  function toggleImage(indexPayload) {
    if (!sliderImagesRef.current) return; // Vérifie que l'élément existe

    // Animation de sortie de l'image actuelle
    gsap.to(sliderImagesRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        // Mise à jour de l'index de l'image après l'animation
        setSliderIndex((prevIndex) => {
          const newIndex = prevIndex + indexPayload;
          if (newIndex > sliderData.length) return 1;
          if (newIndex < 1) return sliderData.length;
          return newIndex;
        });

        // Animation d'entrée pour la nouvelle image
        setTimeout(() => {
          if (sliderImagesRef.current) {
            gsap.to(sliderImagesRef.current, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.inOut",
            });
          }
        }, 50); // Petit délai pour s'assurer que l'image est bien changée
      },
    });
  }

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 4000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
    <div className="slider-container">
      <div className="slider">

        <div ref={sliderImagesRef} className="slider-images">
          <img
            src={`/images/caroussel/img-${sliderIndex}.jpg`}
            alt="caroussel pictures"
            className="slider-img"
          />
        </div>
        <div className="slider-content">

        <p className="image-info">
          <span className="image-name">
            {sliderData.find((obj) => obj.id === sliderIndex).name}
          </span>
          <br />
          <span className="image-description">
            {sliderData.find((obj) => obj.id === sliderIndex).description}
          </span>
        </p>

        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next-image" />
        </button>

        <div className="dots-container">
          {sliderData.map((slide) => (
            <div
              key={slide.id}
              className={`dot ${
                sliderIndex === slide.id ? "active" : "passive"
              }`} // "active" uniquement pour la boule active
              onClick={() => setSliderIndex(slide.id)} // Permet de naviguer au clic
            ></div>
          ))}
        </div>
        <button className="down-button" onClick={scrollToNextSection}>
          <img src={downChevron} alt="down-chevron" />
        </button>
        </div>
      </div>
      </div>
    </>
  );
}
