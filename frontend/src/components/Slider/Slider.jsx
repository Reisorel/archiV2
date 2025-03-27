import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import "./Slider.scss";
import downChevron from "../../assets/icons/down-arrow.svg";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const slidesRef = useRef([]); // Réf pour les slides
  const currentIndexRef = useRef(0); // Réf mutable pour l'index courant
  const autoplayRef = useRef(null); // Réf pour l'autoplay
  const isAnimatingRef = useRef(false); // Verrou pour animations
  const slideDuration = 1; // Durée de transition (en s)
  const autoplayInterval = 6000; // Intervalle autoplay (en ms)
  const totalSlides = sliderData.length; // Nombre total slides
  const imageInfoRefs = useRef([]); // Réf éléments texte slides
  const [activeDotIndex, setActiveDotIndex] = useState(0); // État index actif des dots

  // Fetch des données depuis le backend :
  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/admin/sliders");
        const data = await response.json();
        setSliderData(data);
      } catch (error) {
        console.error("Erreur lors du fetch des sliders:", error);
      }
    };

    fetchSliders();
  }, []);

  // Initialisation des positions et démarrage de l'autoplay
  useEffect(() => {
    if (sliderData.length === 0) return; // Ne fait rien si pas encore de data

    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, { xPercent: i * 100 });
    });

    startAutoplay();

    return () => stopAutoplay(); // Nettoie si composant démonte
  }, [sliderData]); // important de mettre sliderData pour charger les bonnes données dans l'animation


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

  // Fonction de navigaiton rapide dots
  const fastNavigateToSlide = (targetIndex) => {
    stopAutoplay(); // Arrête l'autplay

    const currentIndex = currentIndexRef.current; // Récupère l'index actuel de la slide active.
    const steps = targetIndex - currentIndex; // Calcule le nombre de slides à parcourir pour atteindre la cible.

    if (steps === 0) return; // Pas d'animation si on clique sur le dot actif

    const direction = steps > 0 ? 1 : -1; // Détermine la direction de la navigation :

    const totalSteps = Math.abs(steps); // Calcule le nombre total de transitions nécessaires (valeur absolue de `steps`)
    const intermediateDuration = 0; // Durée de chaque transition intermédiaire

    let currentStep = 0; // Initialise un compteur pour suivre les étapes intermédiaires.

    // Gère navigation circulaire des slides
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

  // Fonction scroll next chevron bas
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#news");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="slider-frame">
      {/* chargement image */}
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className="slider-slide"
          ref={(el) => (slidesRef.current[index] = el)}
        >
          <img src={slide.image}
          alt={slide.name}
          className="slider-img"
          />
          {/* `Infos slide */}
          <p
            ref={(el) => (imageInfoRefs.current[index] = el)}
            className="slider-image-info"
          >
            <span className="slider-image-name">{slide.title}</span>
            <br />
            <span className="slider-image-description">
              {slide.description}
            </span>
          </p>
        </div>
      ))}
      {/* Boutons de navigation */}
      <button
        onClick={handlePrev}
        data-hover-detect="true"
        className="slider-navigation-button prev-button"
        aria-label="Previous image"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={handleNext}
        data-hover-detect="true"
        className="slider-navigation-button next-button"
        aria-label="Next image"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Dots de navigation */}
      <div className="slider-dots-container">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            data-hover-detect="true"
            className={`slider-dot ${
              activeDotIndex === index ? "active" : "passive"
            }`}
            onClick={() => fastNavigateToSlide(index)}
          ></div>
        ))}
      </div>

      {/* Bouton descente */}
      <div className="slider-down-button-container">
        <button
          data-hover-detect="true"
          className="slider-down-button"
          onClick={scrollToNextSection}
        >
          <img src={downChevron} alt="down-chevron" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
