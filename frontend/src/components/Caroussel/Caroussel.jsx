import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./Slider.scss";
import { sliderData } from "./Data/SliderData";
import downChevron from "../../assets/icons/down-arrow.svg";

const Test = () => {
  const slidesRef = useRef([]); // Références pour les slides
  const currentIndexRef = useRef(0); // Référence mutable pour l'index courant
  const autoplayRef = useRef(null); // Référence pour l'autoplay
  const isAnimatingRef = useRef(false); // Verrou pour les animations
  const slideDuration = 1; // Durée de transition (en secondes)
  const autoplayInterval = 6000; // Intervalle d'autoplay (en ms)
  const totalSlides = sliderData.length; // Nombre total de slides
  const imageInfoRefs = useRef([]); // Références pour les éléments texte des slides
  const [activeDotIndex, setActiveDotIndex] = useState(0); // État pour l'index actif des dots

  // Initialisation des positions et démarrage de l'autoplay
  useEffect(() => {
    // Initialise les positions des slides
    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, { xPercent: i * 100 });
    });
    // Démarre l'autoplay
    startAutoplay();

    return () => stopAutoplay(); // Nettoie l'autoplay lors du démontage
  }, []);

  // Démarre l'autoplay
  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      gotoSlide(1); // Passe à la slide suivante automatiquement
    }, autoplayInterval);
  };
  // Stop l'autoplay
  const stopAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = null;
  };

  // Navigue entre les slides
  const gotoSlide = (steps) => {
    if (isAnimatingRef.current) return; // Empêche l'exécution si une animation est déjà en cours
    isAnimatingRef.current = true; // Active le verrou pendant l'animation

    const currentIndex = currentIndexRef.current; // Index actuel
    const targetIndex = (currentIndex + steps + totalSlides) % totalSlides; // Calcul de l'index cible

    // Animation de sortie pour le texte de la slide actuelle
    gsap.to(imageInfoRefs.current[currentIndex], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {

        // Anime la slide actuelle pour qu'elle sorte
        gsap.to(slidesRef.current[currentIndex], {
          xPercent: -steps * 100,
          duration: slideDuration,
        });

        // Anime la slide cible pour qu'elle entre
        gsap.fromTo(
          slidesRef.current[targetIndex],
          { xPercent: steps * 100 },
          {
            xPercent: 0,
            duration: slideDuration,
            onComplete: () => {
              isAnimatingRef.current = false; // Libère le verrou après l'animation
            },
          }
        );

        // Anime l'entrée du texte de la nouvelle slide
        gsap.fromTo(
          imageInfoRefs.current[targetIndex],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: slideDuration / 2 }
        );

        // Met à jour l'index courant
        currentIndexRef.current = targetIndex;
        setActiveDotIndex(targetIndex); // Met à jour l'état pour les dots
      },
    });
  };

  // Va à la slide suivante
  const handleNext = () => {
    stopAutoplay(); // Arrête temporairement l'autoplay
    gotoSlide(1); // Avance d'une slide
    startAutoplay(); // Redémarre l'autoplay
  };

  // Va à la slide précédente
  const handlePrev = () => {
    stopAutoplay(); // Arrête temporairement l'autoplay
    gotoSlide(-1); // Recule d'une slide
    startAutoplay(); // Redémarre l'autoplay
  };

  // Fonction de navigaiton rapide clic DOTS
  const fastNavigateToSlide = (targetIndex) => {
    stopAutoplay(); // Arrête l'autplay

    const currentIndex = currentIndexRef.current; // Récupère l'index actuel de la slide active.
    const steps = targetIndex - currentIndex; // Calcule le nombre de slides à parcourir pour atteindre la cible.

    if (steps === 0) return; // Pas d'animation si on clique sur le dot actif

    const direction = steps > 0 ? 1 : -1; // Détermine la direction de la navigation :

    const totalSteps = Math.abs(steps); // Calcule le nombre total de transitions nécessaires (valeur absolue de `steps`)
    const intermediateDuration = 0; // Durée de chaque transition intermédiaire

    let currentStep = 0; // Initialise un compteur pour suivre les étapes intermédiaires.

    const navigateStep = () => {
      if (currentStep < totalSteps) {
        const intermediateIndex =
          (currentIndex + direction * (currentStep + 1) + totalSlides) %
          totalSlides;

        // Anime la slide actuelle pour qu'elle sorte
        gsap.to(slidesRef.current[currentIndexRef.current], {
          xPercent: -direction * 100,
          duration: intermediateDuration,
          ease: "power1.out",
        });

        // Anime la slide suivante pour qu'elle entre
        gsap.fromTo(
          slidesRef.current[intermediateIndex],
          { xPercent: direction * 100 },
          {
            xPercent: 0,
            duration: intermediateDuration,
            ease: "power1.out",
            onComplete: () => {
              currentIndexRef.current = intermediateIndex;
              currentStep++;
              navigateStep(); // Continue vers la slide suivante
            },
          }
        );
      } else {
        setActiveDotIndex(targetIndex); // Met à jour l'état des dots
        startAutoplay(); // Redémarre l'autoplay
      }
    };

    navigateStep(); // Lance la navigation rapide
  };

  // Fonction scroll next section
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#news");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="wrapper">
      <div className="slider-test">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="slide-test"
            ref={(el) => (slidesRef.current[index] = el)}
          >
            <img src={slide.src} alt={slide.name} className="slider-img" />
            {/* `image-info` avec la référence */}
            <p
              ref={(el) => (imageInfoRefs.current[index] = el)}
              className="image-info"
            >
              <span className="image-name">{slide.name}</span>
              <br />
              <span className="image-description">{slide.description}</span>
            </p>
          </div>
        ))}
        {/* Boutons de navigation */}
        <button onClick={handlePrev} className="navigation-button prev-button">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNext} className="navigation-button next-button">
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Dots pour navigation */}
        <div className="dots-container">
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`dot ${
                activeDotIndex === index ? "active" : "passive"
              }`}
              onClick={() => fastNavigateToSlide(index)}
            ></div>
          ))}
        </div>

        {/* Bouton pour descendre */}
        <div className="down-button-container">
          <button
            data-hover-detect="true"
            className="down-button"
            onClick={scrollToNextSection}
          >
            <img src={downChevron} alt="down-chevron" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
