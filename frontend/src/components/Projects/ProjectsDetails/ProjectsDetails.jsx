import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";
import Modal from "./Modal/Modal";
import { projectsData } from "./Data/ProjectData";
import "./ProjectsDetails.css";

export default function ProjectsDetails() {
  const titleRef = useRef(null); // Animation titre
  const techRef = useRef(null); // Animation domaines

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
  }, []);

  //Animation domaines
  useEffect(() => {
    // Sélectionne tous les éléments <li> dans les deux colonnes
    const techItems = gsap.utils.toArray(".projectDetails-tech-list li");

    // Animation GSAP task
    gsap.fromTo(
      techItems,
      { x: 50, opacity: 0 }, // Départ hors écran à droite, invisible
      {
        x: 0, // Arrivée à la position normale
        opacity: 1, // Apparition complète
        duration: 3, // Durée d'apparition de chaque élément
        ease: "power3.out", // Effet fluide
        stagger: 0.2, // Intervalle progressif entre chaque élément
        scrollTrigger: {
          trigger: ".projectDetails-1-tech", // Déclenchement lorsque la section entre dans la vue
          start: "top 80%", // Commence quand le haut de la section est à 80% de l'écran
          toggleActions: "play none none none", // Joue une seule fois
        },
      }
    );
  }, []);

  const { slug } = useParams();
  const projet = projectsData.find((proj) => proj.slug === slug);
  const { layout } = projet;

  // États pour la modale
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  if (!projet) {
    return <h2>Projet introuvable</h2>;
  }

  return (
    <div className="projectDetails-framer">
      <div id="projectDetails" className="projectDetails-container">
        <div className="projectDetails-1">
          <div className="projectDetails-1-imageDiv">
            <img src={projet.imgSrc} alt={projet.title} />
          </div>
          <div className="projectDetails-1-infos">
            <div className="projecDetails-1-title">
              <h2 className="sub-2" ref={titleRef}>
                {projet.title}
              </h2>
              <p>{projet.location}</p>
            </div>
            <div className="projectDetails-1-text">
              <div className="projectDetails-1-description">
                <p>{projet.description1}</p>
                <p>{projet.description2}</p>
              </div>
              <div className="projectDetails-1-tech">
                <ul ref={techRef} className="projectDetails-tech-list">
                  <div className="projectDetails-tech-list-left">
                    <li>
                      <i className="fas fa-tools"></i> <strong>Type :</strong>{" "}
                      {projet.type}
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>{" "}
                      <strong>Localisation :</strong> {projet.loc}
                    </li>
                    <li>
                      <i className="fas fa-ruler-combined"></i>{" "}
                      <strong>Superficie :</strong> {projet.sup}
                    </li>
                  </div>
                  <div className="projectDetails-tech-list-right">
                    <li>
                      <i className="fas fa-user-tie"></i>{" "}
                      <strong>Maîtrise d’ouvrage :</strong> {projet.mo}
                    </li>
                    <li>
                      <i className="fas fa-lightbulb"></i>{" "}
                      <strong>Intervention :</strong> {projet.inter}
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>{" "}
                      <strong>Avancement :</strong> {projet.avance}
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="projectDetails-2"
          style={{
            display: "grid",
            gridTemplateColumns: layout.gridTemplateColumns,
            gridTemplateRows: layout.gridTemplateRows,
            gap: layout.gap,
          }}
        >
          {layout.images.map((image, index) => (
            <div
              key={index}
              className="ProjectDetail-2-col"
              style={{
                gridColumn: image.gridColumn,
                gridRow: image.gridRow,
              }}
              onClick={() => openModal(image.src)} // Ouvre la modale avec l'image cliquée
            >
              <div
                className="ProjectDetail-2-col-imgDiv"
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}

          {/* Composant Modale */}
          <Modal
            isOpen={isModalOpen}
            imageSrc={selectedImage}
            onClose={closeModal}
          />
        </div>
      </div>
    </div>
  );
}
