import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import downChevron from "../../assets/icons/down-arrow-black.svg";
import "./Missions.css";

const img1 = "images/missions/reflexion-1.jpg";
const img2 = "images/missions/plan-2.jpg";
const img3 = "images/missions/urbain-2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Missions() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  // initialisation état menu accordéon
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

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
          toggleActions: "play none none none",
        },
      }
    );

    // Animation pour les items de la grille
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".missions-row");

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

  return (
    <div id="missions" className="missions-container">
      <div className="missions-secTitle">
        <h3 ref={titleRef} className="missions-title">
          MISSIONS
        </h3>
      </div>
      <div className="missions-intro">
        <p>
          Chaque projet est une rencontre unique entre vos aspirations, les
          exigences du lieu, et notre vision créative.
        </p>
        <p>
          Nous vous accompagnons à chaque étape, de l’esquisse initiale à la
          réalisation finale, avec une attention particulière portée aux détails
          et à l’harmonie de chaque espace.
        </p>
      </div>

      <div className="missions-secContent grid" ref={gridRef}>
        <div className="missions-row">
          <div className="missions-accordion-header" onClick={toggleAccordion}>
            <h2>I. REFLEXION ET ANALYSE</h2>
            <img
              src={downChevron}
              alt="Chevron icon"
              className={`chevron-icon ${isAccordionOpen ? "rotate" : ""}`}
            />
          </div>
          <div
            className={`accordion-content grid ${
              isAccordionOpen ? "visible" : "hidden"
            } `}
          >
            <div className="accordion-content-text">
              <h3>OBJECTIF :</h3>
              <p>
                La phase de réflexion et d’analyse est le socle de tout projet
                architectural réussi. Forte de 10 ans d’expérience en agence, je
                mets à profit une expertise approfondie pour poser des bases
                solides à chaque projet.
              </p>
              <p>
                Cette étape permet d’anticiper les contraintes, d’explorer les
                possibilités et de définir une direction claire et sur mesure,
                toujours en dialogue avec mes clients.
              </p>
              <h3>ETAPES :</h3>
              <ul>
                <li>
                  <h4>Études de faisabilité</h4>
                  <p>
                    Avant de dessiner la première esquisse, j’analyse en
                    profondeur la faisabilité du projet. Cette étape consiste à
                    :
                  </p>
                  <ul>
                    <li>
                      Identifier les contraintes techniques (structure, accès,
                      orientation, réseaux).
                    </li>
                    <li>
                      Respecter les réglementations en vigueur (urbanisme,
                      normes de sécurité, performance énergétique)
                    </li>
                    <li>
                      Évaluer les aspects financiers pour garantir que le projet
                      s’inscrit dans votre budget, tout en optimisant les choix
                      techniques et esthétiques.
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Diagnostics du lieu</h4>
                  <p>
                    Chaque projet s’inscrit dans un contexte unique, qu’il
                    s’agisse d’une construction neuve, d’une rénovation ou d’une
                    réhabilitation. Lors de cette phase :
                  </p>
                  <ul>
                    <li>
                      Exploration des interactions entre l’architecture, le
                      paysage, la lumière et les usages afin de garantir une
                      intégration harmonieuse.
                    </li>
                    <li>
                      Réalisation des relevés précis sur site pour mieux
                      comprendre les potentialités et les contraintes
                      spécifiques du lieu.
                    </li>
                    <li>
                      Prise en compte l’histoire et l’identité du site pour
                      concevoir un projet respectueux de son environnement et
                      des attentes des parties prenantes.
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Conseils personnalisés</h4>
                  <p>
                    En tant qu’indépendante, je privilégie une approche humaine
                    et personnalisée. Chaque client et chaque projet étant
                    unique, je m’attache à :
                  </p>
                  <ul>
                    <li>
                      Vous écouter pour comprendre vos besoins, vos envies et
                      votre mode de vie ou de travail.
                    </li>
                    <li>
                      Vous guider dans les choix stratégiques : priorisation des
                      espaces, sélection des matériaux, et optimisation des
                      fonctionnalités.
                    </li>
                    <li>
                      Vous proposer une vision claire et inspirante qui reflète
                      vos aspirations tout en respectant les contraintes
                      identifiées.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="accordion-content-image">
              <div className="image-large">
                <img src={img1} alt="" />
              </div>
              <div className="image-small-container">
                <div className="image-small">
                  <img src={img2} alt="" />
                </div>
                <div className="image-small">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
