import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./Test.scss";

const slideData = [
  { title: "Slide 1", color: "#24478f" },
  { title: "Slide 2", color: "#cc0000" },
  { title: "Slide 3", color: "#663300" },
  { title: "Slide 4", color: "#006600" },
  { title: "Slide 5", color: "#cc5200" },
  { title: "Slide 6", color: "#6b00b3" },
];

const Test = () => {
  const slidesRef = useRef([]); // Références pour les slides
  const currentIndexRef = useRef(0); // Référence mutable pour l'index courant
  const autoplayRef = useRef(null); // Référence pour l'autoplay
  const isAnimatingRef = useRef(false); // Verrou pour les animations
  const slideDuration = 0.75; // Durée de transition (en secondes)
  const autoplayInterval = 3000; // Intervalle d'autoplay (en ms)
  const totalSlides = slideData.length;

  useEffect(() => {
    // Initialise les positions des slides
    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, { xPercent: i * 100 });
    });

    // Démarre l'autoplay
    startAutoplay();

    return () => stopAutoplay(); // Nettoie l'autoplay lors du démontage
  }, []);

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      gotoSlide(1); // Passe à la slide suivante automatiquement
    }, autoplayInterval);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = null;
  };

  const gotoSlide = (steps) => {
    if (isAnimatingRef.current) return; // Si une animation est en cours, on sort
    isAnimatingRef.current = true; // Verrouille pendant l'animation

    const currentIndex = currentIndexRef.current; // Index actuel
    const targetIndex = (currentIndex + steps + totalSlides) % totalSlides; // Calcul de l'index cible

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

    // Met à jour l'index courant
    currentIndexRef.current = targetIndex;
  };

  const handleNext = () => {
    stopAutoplay(); // Arrête temporairement l'autoplay
    gotoSlide(1); // Avance d'une slide
    startAutoplay(); // Redémarre l'autoplay
  };

  const handlePrev = () => {
    stopAutoplay(); // Arrête temporairement l'autoplay
    gotoSlide(-1); // Recule d'une slide
    startAutoplay(); // Redémarre l'autoplay
  };

  return (
    <div className="wrapper">
      <div className="slider-test">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className="slide-test"
            style={{ backgroundColor: slide.color }}
            ref={(el) => (slidesRef.current[index] = el)}
          >
            {slide.title}
          </div>
        ))}
      </div>
      <div className="buttons-test">
        <button id="prev" onClick={handlePrev}>
          Previous
        </button>
        <button id="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Test;
