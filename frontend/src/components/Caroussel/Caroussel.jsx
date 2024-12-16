import { useState, useEffect } from "react";
import { gsap } from "gsap"; // Importer GSAP
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


import leftChevron from "../../assets/icons/left-arrow.svg";
import rightChevron from "../../assets/icons/right-arrow.svg";
import downChevron from "../../assets/icons/down-arrow.svg";
import "./Caroussel.css";

gsap.registerPlugin(ScrollToPlugin);

export default function Caroussel() {

  const scrollToNextSection = () => {
    gsap.to(window, {
      duration: 0.3, // Durée du scroll (en secondes)
      scrollTo: "#news", // Cible l'ID de la section News
      ease: "power2.inOut", // Effet d'animation fluide
    });
  };

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
      description: "SAINT-AUBIN, NORMANDIE",
    },
    {
      id: 3,
      name: "GARAGE INDIVIDUEL",
      description: "RENNES, BRETAGNE",
    },
    {
      id: 4,
      name: "FERME DOUBLE NIVEAU",
      description: "BREVILLE, NORMANDIE",
    },
    {
      id: 5,
      name: "RENOVATION",
      description: "Nantes, PAYS-DE-LA-LOIRE",
    },
  ];
  const [sliderIndex, setSliderIndex] = useState(1);
  function toggleImage(indexPayload) {
    setSliderIndex((state) => {
      if (indexPayload + state > sliderData.length) {
        return 1;
      } else if (indexPayload + state < 1) {
        return sliderData.length;
      } else {
        return state + indexPayload;
      }
    });
  }

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 4000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <div className="slider">
        <p className="image-info">
          <span className="image-name">
            {sliderData.find((obj) => obj.id === sliderIndex).name}
          </span>
          <br/>
          <span className="image-description">
            {sliderData.find((obj) => obj.id === sliderIndex).description}
          </span>
        </p>
        <img
          src={`/images/caroussel/img-${sliderIndex}.jpg`}
          alt="caroussel picutres"
          className="slider-img"
        />
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
          <img src={downChevron} alt="next-image" />
        </button>
      </div>
    </>
  );
}
