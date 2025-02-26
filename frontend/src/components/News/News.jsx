import React, { useEffect, useRef } from "react";
import "./News.css";
import { useNavigate } from "react-router-dom"; // Import du hook useNavigate
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { newsData } from "./Data/NewsData";

gsap.registerPlugin(ScrollTrigger);

export default function News() {
  const navigate = useNavigate(); 
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
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  const handleNavigate = (slug) => {
    navigate(`/projects/${slug}`); // Navigue vers la route du projet
    window.scrollTo({
      top: 0, // Scroll en haut de la page
      left: 0,
      behavior: "smooth", // Animation de défilement fluide
    });
  };

  return (
    <div id="news" className="news-container">
      <div className="news-secTitle">
        <h1 ref={titleRef} className="title">
          ACTUALITE
        </h1>
      </div>

      <div ref={gridRef} className="news-secContent grid">
        {newsData.map(({ id, imgSrc, title, slug, description, location }) => {
          return (
            <div
              key={id}
              className="news-singleNew"
              onClick={() => handleNavigate(slug)} // Navigation au clic
            >
              <div className="news-imageDiv">
                <img src={imgSrc} alt={title} />
                  <div className="news-hoverContent">
                    <div className="hoverContent-container">
                      <h2 className="sub-2">{title}</h2>
                      <p>{description}</p>
                      <p>{location}</p>
                    </div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
