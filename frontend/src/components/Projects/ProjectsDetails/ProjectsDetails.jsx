import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal/Modal";
import "./ProjectsDetails.css";
import { projectsData, galleryProjects } from "./ProjectData";

export default function ProjectsDetails() {
  const { slug } = useParams();
  const projet = projectsData.find((proj) => proj.slug === slug);
  const gallery = galleryProjects.find((g) => g.gallerySlug === "gallery1");

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
    <div id="projectDetails" className="projectDetails-container">
      <div className="projectDetails-1">
        <div className="projectDetails-1-imageDiv">
          <img src={projet.imgSrc} alt={projet.title} />
        </div>
        <div className="projectDetails-1-infos">
          <div className="projecDetails-1-title">
            <h2 className="sub-2">{projet.title}</h2>
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
                <div className="tech-list-right">
                  <li>
                    <i className="fas fa-user-tie"></i>{" "}
                    <strong>Maîtrise d’ouvrage :</strong> Commande privée
                  </li>
                  <li>
                    <i className="fas fa-lightbulb"></i>{" "}
                    <strong>Intervention :</strong> De l’étude à la
                    concrétisation
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

      <div className="projectDetails-2">
        <div className="ProjectDetail-2-col">
          <div className="ProjectDetail-2-col" onClick={() => openModal(gallery.house1)} >
            <img src={gallery.house1} alt={"house1"} />
          </div>
        </div>
        <div className="ProjectDetail-2-col" onClick={() => openModal(gallery.house2)}>
          <img src={gallery.house2} alt={"house2"} />
        </div>
        <div className="ProjectDetail-2-col" onClick={() => openModal(gallery.house3)}>
          <img src={gallery.house3} alt={"house3"} />
        </div>
        <div className="ProjectDetail-2-col" onClick={() => openModal(gallery.house4)}>
          <img src={gallery.house4} alt={"house4"} />
        </div>
        <div className="ProjectDetail-2-col" onClick={() => openModal(gallery.house5)}>
          <img src={gallery.house5} alt={"house5"} />
        </div>
        <div className="ProjectDetail-2-col" onClick={() => openModal(gallery.house6)}>
          <img src={gallery.house6} alt={"house6"} />
        </div>
        <div className="ProjectDetail-2-col" onClick={() => openModal(gallery.house7)}>
          <img src={gallery.house7} alt={"house7"} />
        </div>
        <div className="ProjectDetail-2-col" onClick={() => openModal(gallery.house8)}>
          <img src={gallery.house8} alt={"house8"} />
        </div>
        <div className="ProjectDetail-2-col" onClick={() => openModal(gallery.house9)}>
          <img src={gallery.house9} alt={"house9"} />
        </div>
        {/* Composant Modale */}
        <Modal
          isOpen={isModalOpen}
          imageSrc={selectedImage}
          onClose={closeModal}
        />
      </div>
    </div>
  );
}
