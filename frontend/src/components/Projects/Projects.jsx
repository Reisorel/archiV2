import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Projects.css";

const project1 = "images/news/Appartement1.jpg";
const project2 = "images/news/Ferme1.jpg";
const project3 = "images/news/Campagne1.jpg";
const project4 = "images/news/Appartement2.jpg";
const project5 = "images/news/Chambre1.jpg";

const data = [
  {
    id: 1,
    imgSrc: project1,
    title: "APPARTEMENT PARISIEN",
    location: "Paris 7ème",
    grade: "Rénovation",
    description: "Une bien belle rénov !",
  },
  {
    id: 2,
    imgSrc: project2,
    title: "CORPS DE FERME",
    location: "Calvados",
    grade: "Extension",
    description: "Belle ferme",
  },
  {
    id: 3,
    imgSrc: project3,
    title: "MAISON DE BORD DE MER",
    location: "Calvados",
    grade: "Agrandissement",
    description: "Belle maison à Bernières",
  },
  {
    id: 4,
    imgSrc: project4,
    title: "APPARTEMENT DE VILLE",
    location: "Paris 7ème",
    grade: "Rénovation",
    description: "Photo cuisine",
  },
  {
    id: 5,
    imgSrc: project5,
    title: "CHAMBRE",
    location: "Loire-Atlantique",
    grade: "Agrandissement",
    description: "Dessin chambre",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-secTitle">
        <h3 className="projects-title">PROJETS</h3>
      </div>

      <div className="secContent-projects-grid">
        {data.map(({ id, imgSrc, title }) => (
          <div key={id} className="projects-row">
            <div className="project-name">
              <h2>{title}</h2>
              </div>
            <div className="projects-imageDiv">
              <img src={imgSrc} alt={title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
