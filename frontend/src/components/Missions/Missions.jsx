import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import downChevron from "../../assets/icons/down-arrow-black.svg";
import "./Missions.css";

const img1 = "images/missions/reflexion-1.jpg";
const img2 = "images/missions/plan-2.jpg";
const img3 = "images/missions/urbain-2.jpg";

const img4 = "images/missions/4planscrayons.jpg";
const img5 = "images/missions/5ordi.jpg";
const img6 = "images/missions/6verticalhouse.jpg";

const img7 = "images/missions/7construction.jpg";
const img8 = "images/missions/8escalier.jpg";
const img9 = "images/missions/9maison.jpg";

// icons

gsap.registerPlugin(ScrollTrigger);

export default function Missions() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  // initialisation état menu accordéon
  const [isAccordionOpen, setIsAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsAccordionOpen(isAccordionOpen === index ? null : index);

    if (isAccordionOpen !== index) {
      document.getElementById("subtitle")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
          toggleActions: "play reverse play reverse",
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
        <h1
        ref={titleRef}
        className="title">
          MISSIONS
        </h1>
      </div>
      <div
      ref={gridRef}
      className="missions-intro">
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
          <div
            className="missions-accordion-header"
            onClick={() => toggleAccordion(1)}
          >
            <h2 id="subtitle" className="sub-2">
              I. REFLEXION ET ANALYSE
            </h2>

            <img
              src={downChevron}
              alt="Chevron icon"
              className={`chevron-icon ${
                isAccordionOpen === 1 ? "rotate" : ""
              }`}
            />
          </div>
          <div
            className={`accordion-content grid ${
              isAccordionOpen === 1 ? "visible" : "hidden"
            } `}
          >
            <div className="accordion-content-text">
              <h2 className="sub-2">OBJECTIF :</h2>
              <div className="paragraph-group">
                <p>
                  La phase de conception est essentielle dans le processus
                  architectural : c’est à cette étape que la réflexion se
                  concrétise. Mon objectif est de traduire vos besoins et
                  aspirations en un projet clair, fonctionnel et esthétique
                </p>
                <br></br>
                <p>
                  Chaque espace est conçu et pensé sur mesure pour répondre à
                  vos usages spécifiques, tout en dialoguant harmonieusement
                  avec son environnement.
                </p>
              </div>

              <h2 className="sub-2">ETAPES :</h2>
              <ul>
                <li>
                  <h3 className="sub-3">ETUDES DE FAISABILITE</h3>
                  <div className="paragraph-group">
                    <p>
                      Avant de dessiner la première esquisse, j’analyse en
                      profondeur la faisabilité du projet.
                    </p>
                  </div>
                  <ul>
                    <li>
                      Identification des contraintes techniques (structure,
                      accès, orientation, réseaux).
                    </li>
                    <li>
                      Respect des réglementations en vigueur (urbanisme, normes
                      de sécurité, performance énergétique)
                    </li>
                    <li>
                      Évaluation des aspects financiers pour garantir que le
                      projet s’inscrit dans votre budget, tout en optimisant les
                      choix techniques et esthétiques.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="sub-3">DIAGNOSTIC DU LIEU</h3>
                  <div className="paragraph-group">
                    <p>
                      Etude contextualisée du site, ses spécificités et son
                      environnement.
                    </p>
                  </div>
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
                  <h3 className="sub-3">CONSEILS PERSONNALISES</h3>{" "}
                  <div className="paragraph-group">
                    <p>
                      En tant qu’indépendante, je privilégie une approche
                      humaine et personnalisée.
                    </p>
                    <p>
                      Chaque client et chaque projet étant unique, je m’attache
                      à :
                    </p>
                  </div>
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
        <div className="missions-row">
          <div
            className="missions-accordion-header"
            onClick={() => toggleAccordion(2)}
          >
            <h2 id="subtitle" className="sub-2">
              II. DESIGN ET CONCEPTION
            </h2>
            <img
              src={downChevron}
              alt="Chevron icon"
              className={`chevron-icon ${
                isAccordionOpen === 2 ? "rotate" : ""
              }`}
            />
          </div>
          <div
            className={`accordion-content grid ${
              isAccordionOpen === 2 ? "visible" : "hidden"
            } `}
          >
            <div className="accordion-content-text">
              <h2 className="sub-2">OBJECTIF :</h2>
              <div className="paragraph-group">
                <p>
                  La phase de conception constitue le socle du projet
                  d'architecte : c’est à cette étape que la réflexion se
                  concrétise. Mon objectif est de traduire vos besoins et
                  aspirations en un projet clair, fonctionnel et esthétique.
                </p>
                <p>
                  Chaque espace est pensé, conçu et formalisé sur mesure pour
                  répondre à vos usages spécifiques, tout en dialoguant
                  harmonieusement avec son environnement.
                </p>
              </div>

              <h2 className="sub-2">ETAPES :</h2>
              <ul>
                <li>
                  <h3 className="sub-3">CONCEPTION ARCHITECTURALE</h3>
                  <div className="paragraph-group">
                    <p>
                      Imaginer et concevoir des espaces uniques, durables et
                      adaptés à vos usages :
                    </p>
                  </div>
                  <ul>
                    <li>
                      Je traduis vos besoins en solutions architecturales
                      personnalisées, alliant créativité et rigueur technique.
                    </li>
                    <li>
                      Chaque projet est conçu pour optimiser les espaces, la
                      lumière et les circulations, en garantissant un confort
                      optimal.
                    </li>
                    <li>
                      Intégration systématique d'une réflexion sur la durabilité
                      et l’impact environnemental, avec des choix responsables
                      en termes de matériaux et d’implantation.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="sub-3">AMENAGEMENT INTERIEUR</h3>
                  <div className="paragraph-group">
                    <p>
                      L’intérieur d’un espace est aussi important que sa
                      structure. Chaque détail est étudié pour créer un
                      environnement harmonieux et accueillant :
                    </p>
                  </div>
                  <ul>
                    <li>
                      Travail sur les volumes et les proportions pour maximiser
                      l’usage et le confort.
                    </li>
                    <li>
                      Sélection soignée des matériaux, textures et couleurs pour
                      refléter vos goûts et vos besoins, toujours en respect du
                      budget définit.
                    </li>
                    <li>
                      Mise en valeur des ouvertures et de la lumière naturelle
                      pour créer des espaces lumineux et agréables à vivre.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="sub-3">ESQUISSE ET RENDUS 3D</h3>
                  <div className="paragraph-group">
                    <p>
                      Formalisation tangible et profesionnelle du projet afin
                      d'illustrer chaque détail de votre futur espace avant sa
                      mise en œuvre :
                    </p>
                  </div>
                  <ul>
                    <li>
                      Réalisation d'esquisses claires et des rendus 3D détaillés
                      pour illustrer les propositions.
                    </li>
                    <li>
                      Ces visualisations permettent d’explorer différentes
                      options et de prendre des décisions en toute sérénité.
                    </li>
                    <li>
                      Les maquettes numériques offrent une vue réaliste du
                      projet, facilitant les ajustements et l’alignement avec
                      vos attentes.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="accordion-content-image">
              <div className="image-large">
                <img src={img4} alt="" />
              </div>
              <div className="image-small-container">
                <div className="image-small">
                  <img src={img5} alt="" />
                </div>
                <div className="image-small">
                  <img src={img6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="missions-row">
          <div
            className="missions-accordion-header"
            onClick={() => toggleAccordion(3)}
          >
            <h2 id="subtitle" className="sub-2">
              III. REALISATION ET SUIVI
            </h2>
            <img
              src={downChevron}
              alt="Chevron icon"
              className={`chevron-icon ${
                isAccordionOpen === 3 ? "rotate" : ""
              }`}
            />
          </div>
          <div
            className={`accordion-content grid ${
              isAccordionOpen === 3 ? "visible" : "hidden"
            } `}
          >
            <div className="accordion-content-text">
              <h2 className="sub-2">OBJECTIF :</h2>
              <div className="paragraph-group">
                <p>
                  La phase de réalisation marque le passage du projet à sa
                  concrétisation. Mon rôle est de m’assurer que chaque étape
                  respecte la vision définie, les contraintes techniques et les
                  attentes initiales.
                </p>
                <p>
                  À travers un suivi rigoureux, je veille à ce que les travaux
                  soient exécutés dans les règles de l’art, tout en restant
                  disponible pour ajuster les détails si nécessaire.
                </p>
              </div>

              <h2 className="sub-2">ETAPES :</h2>
              <ul>
                <li>
                  <h3 className="sub-3">DEMARCHES ADMINISTRATIVES</h3>
                  <div className="paragraph-group">
                    <p>
                      La gestion des autorisations et des obligations légales
                      est une étape essentielle pour assurer la conformité du
                      projet :
                    </p>
                  </div>
                  <ul>
                    <li>
                      Constitution et dépôt des dossiers administratifs, tels
                      que les permis de construire et les déclarations
                      préalables.
                    </li>
                    <li>
                      Veille à la conformité avec les normes locales d'urbanisme
                      et de sécurité.
                    </li>
                    <li>
                      Coordination avec les parties prenantes institutionnelles
                      pour garantir l'acceptation des dossiers sans retard.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="sub-3">COORDINATION ET SUIVI DES TRAVAUX</h3>
                  <div className="paragraph-group">
                    <p>
                      Une supervision active et un dialogue constant avec les
                      entreprises du bâtiment pour s'assurer d'une exécution
                      fluide et rapide :
                    </p>
                  </div>
                  <ul>
                    <li>
                      Sélection d’artisans et prestataires qualifiés, adaptés à
                      la spécificité du projet.
                    </li>
                    <li>
                      Suivi du calendrier des travaux pour garantir le respect
                      des délais.
                    </li>
                    <li>
                      Vérification de la conformité avec les plans et le cahier
                      des charges.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="sub-3">CCONTRÔLE DES LIVRAISONS</h3>
                  <div className="paragraph-group">
                    <p>
                      La phase de contrôle et de livraison est l’aboutissement
                      de votre projet architectural.
                    </p>
                    <p>
                      Mon objectif est de garantir que la réalisation respecte
                      scrupuleusement la vision définie, en assurant un haut
                      niveau de qualité pour chaque détail.
                    </p>
                  </div>
                  <ul>
                    <li>
                      Inspections régulières pour vérifier la conformité des
                      travaux avec les plans, résoudre les imprévus et garantir
                      des finitions impeccables.
                    </li>
                    <li>
                      Validation du bon fonctionnement des installations
                      techniques (électricité, plomberie, ventilation) et
                      ajustements finaux.
                    </li>
                    <li>
                      Remise officielle de l’espace, accompagné d’une prise en
                      main personnalisée et, si nécessaire, d’un suivi
                      post-livraison.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="accordion-content-image">
              <div className="image-large">
                <img src={img7} alt="" />
              </div>
              <div className="image-small-container">
                <div className="image-small">
                  <img src={img8} alt="" />
                </div>
                <div className="image-small">
                  <img src={img9} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
