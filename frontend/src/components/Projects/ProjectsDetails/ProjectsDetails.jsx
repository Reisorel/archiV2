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
    <div className="projectDetails-container">
      <div className="content">
        <h1>{projet.title}</h1>
        <div className="projectDetails-presentation-text">
          <p>{projet.description}</p>
        </div>
        <div className="projectDetails-imageDiv">
          <img src={projet.imgSrc} alt={projet.title} />
        </div>
      </div>
    </div>
  );
}
