import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Helmet } from "react-helmet-async";

import "./Projects.css";
import { projectsData } from "./ProjectsDetails/Data/ProjectData";

export default function Projects() {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages
  const titleRef = useRef(null); // Ref titre
  const gridRef = useRef(null); // Ref items grille

  useEffect(() => {
    // Animation titre
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
      const items = gridRef.current.querySelectorAll(".projects-row");

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
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Galerie projets - Cassandre Marion architecture</title>
        <meta
          name="description"
          content="Découvrez les projets d’architecture de Cassandre Marion : maisons, appartements, constructions, extensions, permis de construire  et réhabilitations."
        />
      </Helmet>
      <div className="projects-framer">
        <div className="projects-container">
          <div id="projects" className="projects-secTitle">
            <h3 className="title" ref={titleRef}>
              PROJETS
            </h3>
          </div>

          <div ref={gridRef} className="projects-secContent-grid">
            {projectsData.map((projet) => (
              <div
                key={projet.id}
                className="projects-row"
                onClick={() => {
                  navigate(`/projects/${projet.slug}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="project-name">
                  <h2 className="sub-2">{projet.title}</h2>
                </div>
                <div className="projects-imageDiv">
                  <img src={projet.imgSrc} alt={projet.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
