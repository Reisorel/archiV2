import "./ProjectsDetails.css";
import projectsData from "./ProjectData";
import { useParams } from "react-router-dom";

export default function ProjectsDetails() {
  const { slug } = useParams();
  const projet = projectsData.find((proj) => proj.slug === slug);

  if (!projet) {
    return <h2>Projet introuvable</h2>;
  }

  console.log("Chemin de l'image :", projet.imgSrc);

  return (
    <div id="projectDetails" className="projectDetails-container">
      <div className="projectDetails-1">
        {/* Colonne 1 : Image principale */}
        <div className="projectDetails-1-imageDiv">
          <img src={projet.imgSrc} alt={projet.title} />
        </div>
        <div className="projectDetails-1-infos">
          <div className="projecDetails-1-title">
            <h2>{projet.title}</h2>
            <p>{projet.location}</p>
          </div>
          <div className="projectDetails-1-text">
            <div className="projectDetails-1-description">
              <p>{projet.description1}</p>
              <p>{projet.description2}</p>
            </div>
            <div className="projectDetails-1-tech">
              <ul className="project-tech-list">
                <div className="tech-list-left">
                <li>
                  <i className="fas fa-tools"></i> <strong>Type :</strong>{" "}
                  Réhabilitation & Modernisation
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>Localisation :</strong> Rennes
                </li>
                <li>
                  <i className="fas fa-ruler-combined"></i>{" "}
                  <strong>Superficie :</strong> 120 m²
                </li>

                </div>
                <div className="tect-list-right">
                <li>
                  <i className="fas fa-user-tie"></i>{" "}
                  <strong>Maîtrise d’ouvrage :</strong> Commande privée
                </li>
                <li>
                  <i className="fas fa-lightbulb"></i>{" "}
                  <strong>Intervention :</strong> De l’étude à la concrétisation
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>{" "}
                  <strong>Avancement :</strong> Projet finalisé
                </li>

                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*
      <div className="content">
        <h1>{projet.title}</h1>
        <div className="projectDetails-presentation-text">
          <p>{projet.description}</p>
        </div>
        <div className="projectDetails-imageDiv">
          <img src={projet.imgSrc} alt={projet.title} />
        </div>
      </div> */}
    </div>
  );
}
