import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Missions.css";

gsap.registerPlugin(ScrollTrigger);

export default function Missions() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) {
      console.error("titleRef.current is null. The reference is not attached.");
      return;
    }

    // Animation pour le titre
    gsap.fromTo(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animation pour les items de la grille
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".row");

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50, // Position initiale (en-dessous)
          },
          {
            opacity: 1,
            y: 0, // Position finale (alignée normalement)
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%", // Début de l'animation
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div id="missions" className="missions-container">
      <div className="missions-secTitle">
        <h3 ref={titleRef} className="missions-title">
          MISSIONS
        </h3>
      </div>
      <div className="missions-intro">
        <p>
          Chaque projet est une rencontre unique entre vos aspirations, les
          exigences du lieu, et notre vision créative.
          <p></p> Nous vous accompagnons à chaque étape, de l’esquisse initiale
          à la réalisation finale, avec une attention particulière portée aux
          détails et à l’harmonie de chaque espace.
        </p>
      </div>

      <div className="missions-secContent grid" ref={gridRef}>
        <div className="missions-row">
          <h3>I. Réflexion & Analyse</h3>
        </div>
        <div className="missions-row">
          <h3>II. Réflexion & Analyse</h3>
        </div>
        <div className="missions-row">
          <h3>III. Réflexion & Analyse</h3>
        </div>
      </div>
    </div>
  );
}
