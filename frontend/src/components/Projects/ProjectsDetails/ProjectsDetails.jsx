import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";

import "./ProjectsDetails.css";
import Modal from "./Modal/Modal";
import { Helmet } from "react-helmet-async";

export default function ProjectsDetails() {

  const [projectsData, setProjectsData] = useState([]); // État pour stocker les données des projets
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null); // Index de l'image courante

  const titleRef = useRef(null); // Ref titre
  const techRef = useRef(null); // Ref tech
  const leftArrowRef = useRef(null); // Ref left arrow
  const rightArrowRef = useRef(null); // Ref right arrow

  const { slug } = useParams();

  useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch(
            "http://localhost:3000/api/admin/projects"
          );
          const data = await response.json();
          setProjectsData(data);
        } catch (error) {
          console.error("Erreur lors du fetch des news:", error);
        }
      };
      fetchProjects();
    }, []);

  // Récupération données projet courant
  const projet = projectsData.find((proj) => proj.slug === slug);

  // Scroll vers le haut
  useEffect(() => {
    gsap.to(window, {
      scrollTo: 100,
      duration: 1, // Durée en secondes
      ease: "power3.out",
    });
  }, [slug]);

  // Animation titre
  useEffect(() => {
    if (!projet) return;
    if (!titleRef.current) return;
    gsap.killTweensOf(titleRef.current);

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
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
  }, [slug, projet]); // Rejoue l'animation chaque fois que `slug` change

  // Animation items tech
  useEffect(() => {
    if (!projet) return;
    const techItems = gsap.utils.toArray(".projectDetails-tech-list li");

    gsap.killTweensOf(techItems);

    gsap.fromTo(
      techItems,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projectDetails-1-tech",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [slug, projet]); // 🔥 Rejoue à chaque changement de `slug`

  // Animation translation chevron
  const handleArrowClick = (arrowRef, direction) => {
    if (!arrowRef.current || gsap.isTweening(arrowRef.current)) return; // Empêche les clics pendant l'animation

    gsap.killTweensOf(arrowRef.current); // Stoppe toute animation en cours
    gsap.set(arrowRef.current, { x: 0 }); // Remet à zéro AVANT l'animation
    gsap.to(arrowRef.current, { clearProps: "all" }); // Supprime toutes les propriétés CSS GSAP

    gsap.fromTo(
      arrowRef.current,
      { x: 0 },
      {
        x: direction,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.set(arrowRef.current, { x: 0 });
        },
      }
    );
  };

  // Récupération données flèches navigation
  const currentIndex = projectsData.findIndex((proj) => proj.slug === slug);

  if (currentIndex === -1) {
    return <h2>Projet introuvable</h2>;
  }

  const projectCount = projectsData.length;
  const prevIndex = (currentIndex - 1 + projectCount) % projectCount;
  const nextIndex = (currentIndex + 1) % projectCount;

  const prevProject = projectsData[prevIndex];
  const nextProject = projectsData[nextIndex];

  // Fonction pour ouvrir la modale
  const openModal = (index) => {
    if (typeof index !== "number" || isNaN(index)) {
      return;
    }
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.dispatchEvent(
      new CustomEvent("modalStateChange", { detail: true })
    );
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
    setIsModalOpen(false);
    document.dispatchEvent(
      new CustomEvent("modalStateChange", { detail: false })
    );
  };

  if (projectsData.length === 0) {
    return <h2>Chargement des projets...</h2>;
  }

  if (!projet) {
    return <h2>Projet introuvable</h2>;
  }

  const { layout } = projet;
  console.log(layout);

  return (
    <>
      <Helmet>
        <title>{`Découvrez les détails du projet ${projet.title}, situé à ${projet.loc}, réalisé par Cassandre Marion.`}</title>
        <meta name="description" content={projet.meta} />
      </Helmet>
      <div className="projectDetails-framer">
        <div id="projectDetails" className="projectDetails-container">
          <div
            className="projectDetails-nav-arrows-div"
            data-hover-detect="true"
          >
            {/* Projet précédent */}
            <Link
              to={`/projects/${prevProject.slug}`}
              className="projectDetails-nav-arrows"
              onClick={() => handleArrowClick(leftArrowRef, -50)}
            >
              <i ref={leftArrowRef} className="fa-solid fa-chevron-left"></i>
              <h2 className="sub-2">{prevProject.title}</h2>
            </Link>

            {/* Projet suivant */}
            <Link
              to={`/projects/${nextProject.slug}`}
              className="projectDetails-nav-arrows"
              onClick={() => handleArrowClick(rightArrowRef, 50)}
            >
              <h2 className="sub-2">{nextProject.title}</h2>
              <i ref={rightArrowRef} className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>

          <div className="projectDetails-1">
            <div className="projectDetails-1-imageDiv">
              <img src={projet.mainImage} alt={projet.title} />
            </div>
            <div className="projectDetails-1-infos">
              <div className="projecDetails-1-title">
                <h2 className="title" ref={titleRef}>
                  {projet.title}
                </h2>
                <p>{projet.loc}</p>
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
                        <span className="projectDetails-icon-text">
                          <i className="fas fa-tools"></i>{" "}
                          <strong>Type :</strong>{" "}
                        </span>
                        <span className="project-type">{projet.tech.type}</span>
                      </li>
                      <li>
                        <span className="projectDetails-icon-text">
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          <strong>Localisation :</strong>{" "}
                        </span>

                        <span className="project-type">{projet.tech.techLoc}</span>
                      </li>
                      <li>
                        <span className="projectDetails-icon-text">
                          <i className="fas fa-ruler-combined"></i>{" "}
                          <strong>Superficie :</strong>{" "}
                        </span>
                        <span className="project-type">{projet.tech.sup}</span>
                      </li>
                    </div>
                    <div className="projectDetails-tech-list-right">
                      <li>
                        <span className="projectDetails-icon-text">
                          <i className="fas fa-user-tie"></i>{" "}
                          <strong>Maîtrise d’ouvrage :</strong>{" "}
                        </span>

                        <span className="project-type">{projet.tech.mo}</span>
                      </li>
                      <li>
                        <span className="projectDetails-icon-text">
                          <i className="fas fa-lightbulb"></i>{" "}
                          <strong>Intervention :</strong>{" "}
                        </span>
                        <span className="project-type">{projet.tech.inter}</span>
                      </li>
                      <li>
                        <span className="projectDetails-icon-text">
                          <i className="fas fa-check-circle"></i>{" "}
                          <strong>Avancement :</strong>{" "}
                        </span>
                        <span className="project-type">{projet.tech.avance}</span>
                      </li>
                    </div>
                  </ul>

                  <div className="tags-div">
                    {projet.tags && projet.tags.length > 0 && (
                      <div className="tags-div-left">
                        <p className="keyword-index">Mots-clés:</p>
                        <ul>
                          {projet.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ProjectDetails-2-framer">
            <div className="projectDetails-2">
              {layout.images.map((image, index) => (
                <div
                  key={index}
                  className="ProjectDetail-2-col"
                  style={{
                    gridColumn: image.gridColumn,
                    gridRow: image.gridRow,
                  }}
                  onClick={() => openModal(index)}
                >
                  <div className="ProjectDetail-2-col-imgDiv">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="ProjectImage"
                    />
                  </div>
                </div>
              ))}

              {/* Composant Modale */}
              <Modal
                isOpen={isModalOpen}
                images={layout.images} // Passe toutes les images
                currentImageIndex={currentImageIndex} // Passe l'index courant
                onClose={closeModal} // Callback pour fermer
                onNavigate={(newIndex) => setCurrentImageIndex(newIndex)} // Callback pour naviguer
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
