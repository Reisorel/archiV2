import { useState, useEffect, useRef } from "react";
import { sliderData } from "./Data/SliderData";
import gsap from "gsap";

import leftChevron from "../../assets/icons/left-arrow.svg";
import rightChevron from "../../assets/icons/right-arrow.svg";
import downChevron from "../../assets/icons/down-arrow.svg";
import "./Caroussel.css";

export default function Caroussel() {
  // État pour gérer l'index de la slide affichée actuellement
  const [sliderIndex, setSliderIndex] = useState(1);

  // Référence pour l'élément `image-info` (texte associé à l'image)
  const imageInfoRef = useRef();

  // Référence pour stocker l'intervalle
  const intervalRef = useRef();

  // Fonction scroll next section
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#news");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fonction pour changer l'image (précédente ou suivante)
  const toggleImage = (indexPayload) => {
    // Réinitialise le timer quand une action est effectuée
    resetInterval();

    // Animation de sortie pour `image-info`
    gsap.to(imageInfoRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        setSliderIndex((prevIndex) => {
          const newIndex = prevIndex + indexPayload;
          if (newIndex > sliderData.length) return 1;
          if (newIndex < 1) return sliderData.length;
          return newIndex;
        });

        // Animation d'entrée pour `image-info`
        gsap.fromTo(
          imageInfoRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      },
    });
  };

  // Fonction pour réinitialiser l'intervalle
  const resetInterval = () => {
    // Nettoie l'intervalle existant
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Démarre un nouvel intervalle
    intervalRef.current = setInterval(() => toggleImage(1), 5000); // Change de slide toutes les 5 secondes
  };

  // Effet pour démarrer l'autoplay lors du montage
  useEffect(() => {
    resetInterval(); // Initialise l'intervalle

    return () => clearInterval(intervalRef.current); // Nettoie l'intervalle lors du démontage
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Conteneur de l'image affichée */}
        <div className="slider-images">
          {/* Affiche l'image de la slide actuelle */}
          <img
            src={sliderData.find((obj) => obj.id === sliderIndex).src}
            alt={sliderData.find((obj) => obj.id === sliderIndex).name}
            className="slider-img"
          />
        </div>
        <div className="slider-content">
          {/* `image-info avec la référence */}
          <p ref={imageInfoRef} className="image-info">
            <span className="image-name">
              {sliderData.find((obj) => obj.id === sliderIndex).name}
            </span>
            <br />
            <span className="image-description">
              {sliderData.find((obj) => obj.id === sliderIndex).description}
            </span>
          </p>

          {/* Boutons de navigation */}
          <button
            onClick={() => toggleImage(-1)}
            className="navigation-button prev-button"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={() => toggleImage(1)}
            className="navigation-button next-button"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Dots pour navigation */}
          <div className="dots-container">
            {sliderData.map((slide) => (
              <div
                key={slide.id}
                className={`dot ${
                  sliderIndex === slide.id ? "active" : "passive"
                }`}
                onClick={() => {
                  resetInterval();
                  setSliderIndex(slide.id);
                }}
              ></div>
            ))}
          </div>

          {/* Bouton pour descendre */}
          <div className="down-button-container">
            <button
            data-hover-detect="true"
            className="down-button" onClick={scrollToNextSection}>
              <img src={downChevron} alt="down-chevron" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
