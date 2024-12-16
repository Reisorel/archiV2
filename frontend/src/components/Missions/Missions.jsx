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
          const items = gridRef.current.querySelectorAll(".col");

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
      <div className="secTitle">
        <h3 ref={titleRef} className="title">MISSIONS</h3>
      </div>

      <div className="secContent grid" ref={gridRef}>
      <div className="col">Texte colonne 1</div>
      <div className="col">Texte colonne 2</div>
      <div className="col">Texte colonne 3</div>
      <div className="col">Texte colonne 4</div>
      </div>
    </div>
  );
}
