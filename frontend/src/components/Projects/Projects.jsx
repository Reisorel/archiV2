import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Projects.css";
import projectsData from "./ProjectsDetails/ProjectData";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages

  return (
    <div className="projects-container">
      <div id="projects" className="projects-secTitle">
        <h3 className="projects-title">PROJETS</h3>
      </div>

      <div className="secContent-projects-grid">
        {projectsData.map((projet) => (
          <div key={projet.id} className="projects-row">
            <div className="project-name">
              <h2>{projet.title}</h2>
            </div>
            <div
              className="projects-imageDiv"
              onClick={() => navigate(`/projects/${projet.slug}`)}
            >
              <img src={projet.imgSrc} alt={projet.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
