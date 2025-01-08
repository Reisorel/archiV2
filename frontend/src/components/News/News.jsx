import React, { useEffect, useRef } from "react";
import "./News.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const new1 = "images/news/Appartement1.jpg";
const new2 = "images/news/Ferme1.jpg";
const new3 = "images/news/Campagne1.jpg";
const new4 = "images/news/Appartement2.jpg";
const new5 = "images/news/Chambre1.jpg";

const Data = [
  {
    id: 1,
    imgSrc: new1,
    title: "Appartement de ville",
    location: "Paris 7ème",
    grade: "Rénovation",
    description: "Une bien belle rénov !",
  },
  {
    id: 2,
    imgSrc: new2,
    title: "Corps de ferme",
    location: "Calvados",
    grade: "Extension",
    description: "Belle ferme",
  },
  {
    id: 3,
    imgSrc: new3,
    title: "Maison de bord de mer",
    location: "Calvados",
    grade: "Agrandissement",
    description: "Belle maison à Bernières",
  },
  {
    id: 4,
    imgSrc: new4,
    title: "Appartement de ville",
    location: "Paris 7ème",
    grade: "Rénovation",
    description: "Photo cuisine",
  },
  {
    id: 5,
    imgSrc: new5,
    title: "Chambre",
    location: "Loire-Atlantique",
    grade: "Agrandissement",
    description: "Dessin chambre",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function News() {
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
          const items = gridRef.current.querySelectorAll(".news-singleNew");

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
    <div id="news" className="news-container">
      <div className="news-secTitle">
        <h3 ref={titleRef} className="news-title">ACTUALITE</h3>
      </div>

      <div ref={gridRef} className="news-secContent grid">
        {Data.map(({ id, imgSrc, title }) => {
          return (
            <div key={id} className="news-singleNew">
              <div className="news-imageDiv">
                <img src={imgSrc} alt={title} />
                <div className="news-hoverContent">{title}</div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
