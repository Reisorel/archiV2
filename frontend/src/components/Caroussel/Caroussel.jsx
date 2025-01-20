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

  // Fonction scroll next section
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#news");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  // Fonction pour changer l'image (précédente ou suivante)
  const toggleImage = (indexPayload) => {
    setSliderIndex((prevIndex) => {
      const newIndex = prevIndex + indexPayload;
      if (newIndex > sliderData.length) return 1;
      if (newIndex < 1) return sliderData.length;
      return newIndex;
    });
  };

  // Effet pour gérer l'autoplay (changement automatique des slides)
  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 2000); // Change de slide toutes les 2 secondes
    return () => clearInterval(intervalID); // Nettoie l'intervalle quand le composant est démonté
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
            onClick={() => toggleImage(1)}
            className="navigation-button prev-button"
          >
            <img src={leftChevron} alt="previous image" />
          </button>
          <button
            onClick={() => toggleImage(-1)}
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
                }`}
                onClick={() => setSliderIndex(slide.id)}
              ></div>
            ))}
          </div>

          <button className="down-button" onClick={scrollToNextSection}>
            <img src={downChevron} alt="down-chevron" />
          </button>
        </div>
      </div>
    </div>
  );
}
