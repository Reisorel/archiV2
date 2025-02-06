import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { missionsData } from "./Data/MissionsData";

import downChevron from "../../assets/icons/down-arrow-black.svg";
import "./Missions.css";

gsap.registerPlugin(ScrollTrigger);

export default function Missions() {
  const titleRef = useRef(null); // Animation titre
  const gridRef = useRef(null); // Animation menus déroulants
  const textRef = useRef(null); // Animation texte gauche

  // Aninmation texte central
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50, // Position initiale en bas
      },
      {
        opacity: 1,
        y: 0, // Arrivée normale
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%", // L'animation démarre quand 90% de la div est visible
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  //Animation tasks
  useEffect(() => {
    // Sélectionne tous les éléments <li> dans les deux colonnes
    const taskItems = gsap.utils.toArray(".missions-task-list-div li");

    // Animation GSAP task
    gsap.fromTo(
      taskItems,
      { x: 50, opacity: 0 }, // Départ hors écran à droite, invisible
      {
        x: 0, // Arrivée à la position normale
        opacity: 1, // Apparition complète
        duration: 3, // Durée d'apparition de chaque élément
        ease: "power3.out", // Effet fluide
        stagger: 0.2, // Intervalle progressif entre chaque élément
        scrollTrigger: {
          trigger: ".missions-intro-grid2", // Déclenchement lorsque la section entre dans la vue
          start: "top 80%", // Commence quand le haut de la section est à 80% de l'écran
          toggleActions: "play none none none", // Joue une seule fois
        },
      }
    );
  }, []);

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
    // Attends que le DOM se mette à jour avant de rafraîchir GSAP
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300); // Petit délai pour laisser les animations terminer
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
        <h1 ref={titleRef} className="title">
          MISSIONS
        </h1>
      </div>
      <div ref={gridRef} className="missions-intro">
        <div ref={textRef} className="missions-intro-grid">
          <div className="missions-intro-grid1">
            <div className="missions-intro-text-div">
              <p>
                Je réalise des projets architecturaux, allant du logement
                individuel à la commande publique, en accompagnant mes clients
                sur toutes les étapes, du concept initial à la livraison finale.
              </p>
              <p>
                J’interviens sur toutes les phases de projet pour des
                constructions neuves, des extensions ou réhabilitations en
                passant par la rénovation énergétique.
              </p>
              <p>
                Chaque projet est unique. Je m'engage à concevoir des espaces
                qui allient esthétique, fonctionnalité et durabilité, tout en
                répondant aux besoins spécifiques de mes clients.
              </p>
              <p>
                Mon objectif : transformer vos idées en réalisations concrètes
                qui reflètent vos vision et votre ambition.
              </p>
            </div>
          </div>
          <div className="missions-intro-grid2">
            <div className="missions-task-list-div">
              <div className="missions-task-list-left">
                <li>
                  <i className="fas fa-home"></i>
                  Neuf
                </li>
                <li>
                  <i className="fas fa-tools"></i>Réhabilitation
                </li>
                <li>
                  <i className="fas fa-expand-arrows-alt"></i>
                  Extension
                </li>
                <li>
                  <i className="fas fa-leaf"></i>
                  Rénovation énergétique
                </li>
                <li>
                  <i className="fas fa-paint-roller"></i>
                  Architecture d’intérieur
                </li>
              </div>
              <div className="missions-task-list-right">
                <li>
                  <i className="fas fa-house-user"></i>
                  Maison individuelle
                </li>
                <li>
                  <i className="fas fa-building"></i>
                  Habitat collectif
                </li>
                <li>
                  <i className="fas fa-store"></i>
                  Commerces
                </li>
                <li>
                  <i className="fas fa-briefcase"></i>
                  Bureaux
                </li>
                <li>
                  <i className="fas fa-school"></i>
                  Equipements publics
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="missions-secContent" ref={gridRef}>
        <div className="missions-row">
          <div
            className="missions-accordion-header"
            onClick={() => toggleAccordion(1)}
          >
            <h2 id="subtitle" className="sub-2">
              I. CONCEPTION ARCHITECTURALE
            </h2>

            <img
              src={downChevron}
              alt="Chevron icon"
              className={`missions-chevron-icon ${
                isAccordionOpen === 1 ? "rotate" : ""
              }`}
            />
          </div>
          <div
            className={`missions-accordion-content grid ${
              isAccordionOpen === 1 ? "visible" : "hidden"
            } `}
          >
            <div className="missions-accordion-content-text">
              <h2 className="sub-2">OBJECTIF :</h2>
              <div className="missions-paragraph-group">
                <p>
                  Tout commence ici ! La mission de conception constitue le
                  socle de tout projet d'architecture. C’est à ce stade que les
                  éléments de réflexion de votre projet se concrétisent en
                  projections, plans et matériaux.{" "}
                </p>
                <p>
                  {" "}
                  <strong>
                    Mon rôle dans cette phase est de vous aider à traduire vos
                    besoins et aspirations en un projet clair, fonctionnel et
                    esthétique.
                  </strong>
                </p>
                <p>
                  Nous travaillons avec vous pour que chaque espace soit conçu
                  et pensé sur mesure afin de répondre à vos usages futurs
                  spécifiques, tout en respectant son environnement et la
                  réglementation en vigueur..
                </p>
              </div>
              <h2 className="sub-2">PHASES :</h2>
              <h3 className="sub-3">
                <i className="fa-solid fa-pencil"></i>
                L'ESQUISSE
              </h3>
              <div className="missions-paragraph-group">
                <p>
                  Sur la base d'un programme défini ensemble, l’architecte
                  établit d'abord un relevé des éléments existants (terrain,
                  bâti…) pour en documenter graphiquement les caractéristiques.
                  Ce relevé sert ensuite de base pour la réalisation d’une
                  esquisse conforme à ce programme.
                </p>
                <p>
                  L’esquisse d’architecture produite inclut notamment la
                  formalisation des éléments suivants :
                  <ul>
                    <li>L’implantation et l’adaptation au terrain</li>
                    <li>L’orientation</li>
                    <li>Les différents accès</li>
                    <li>
                      L’enveloppe extérieure et ses ouvertures principales
                    </li>
                    <li>
                      L’organisation des espaces, leurs liaisons, les solutions
                      d’amélioration de l’existant.
                    </li>
                  </ul>
                </p>
              </div>
              <h3 className="sub-3">
                <i className="fa-solid fa-ruler"></i>
                L'AVANT-PROJET
              </h3>
              <div className="missions-paragraph-group">
                <p>
                  La phase d’avant-projet vise à préciser les dimensions de
                  l’ouvrage, son aspect. L’architecte présente également les
                  solutions retenues, détermines les surfaces de tous les
                  éléments du programme et établit la notice descriptive
                  précisant la nature des matériaux extérieurs/intérieurs.
                </p>
                <p>
                  Enfin une estimation chiffrée du coût prévisionnel des travaux
                  à venir est réalisée.
                </p>
              </div>
              <h3 className="sub-3">
                <i className="fa-solid fa-house-circle-check"></i>
                L'AUTORISATION D'URBANISME
              </h3>{" "}
              <div className="missions-paragraph-group">
                <p>
                  Lors de cette phase, l’architecte prend en charge les actions
                  réglementaires et administratives à réaliser lors du projet.
                  Cette phase couvre l’ensemble des dépôts de documents liés aux
                  autorisations d’urbanisme (déclaration préalable, permis de
                  construire, etc.)
                </p>
                <p>
                  A cet effet, l’architecte élabore et collecte des pièces
                  nécessaires à la réalisation du dossier de demande
                  d’autorisation d’urbanisme suivant la réglementation en
                  vigueur.
                </p>
              </div>
              <h3 className="sub-3">
                <i className="fa-solid fa-compass-drafting"></i>
                LA CONCEPTION FINALE ET DETAILLEE
              </h3>{" "}
              <div className="missions-paragraph-group">
                <p>
                  La conception finale et détaillée permet de valider la nature
                  et les caractéristiques des matériaux, des procédés
                  constructifs et équipements intérieurs retenus.
                </p>
                <p>
                  L’architecte, après avoir vérifié les conditions de leur mise
                  en œuvre et l’incidence financière qui en découle, précise par
                  des plans, coupes, et élévations les formes des différents
                  éléments de la construction
                </p>
                <p>
                  L’architecte établit l’ensemble des spécifications détaillées
                  des ouvrages sous la forme d’un Cahier des Clauses Techniques
                  Particulières (CCTP). L’architecte établit un coût
                  prévisionnel des travaux, par corps d’état et détermine le
                  calendrier prévisible du déroulement de l’opération.
                </p>
                <p>
                  Pour clore la phase de conception, l’architecte assiste son
                  client dans l’arbitrage des prestations afin de respecter le
                  budget travaux.
                </p>
              </div>
              <h3 className="sub-3">
                <i className="fa-solid fa-comments"></i>
                LA CONSULTATION DES ENTREPRISES ET L'ANALYSE DES OFFRES
              </h3>{" "}
              <div className="missions-paragraph-group">
                <p>
                  L’architecte rassemble les éléments du projet permettant aux
                  entrepreneurs consultés d’établir leurs offres quantifiées.
                </p>
                <p>
                  L’architecte procède à l’analyse comparative des offres des
                  entreprises, établit son rapport, propose au client une liste
                  d’entreprises qui pourraient être retenues
                </p>
              </div>
            </div>

            <div className="missions-accordion-content-image">
              <div className="missions-image-large">
                <img
                  src={missionsData[0].imgSrc}
                  alt={missionsData[0].description}
                />
              </div>
              <div className="missions-image-small-container">
                <div className="missions-image-small">
                  <img
                    src={missionsData[1].imgSrc}
                    alt={missionsData[1].description}
                  />
                </div>
                <div className="missions-image-small">
                  <img
                    src={missionsData[2].imgSrc}
                    alt={missionsData[2].description}
                  />
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
              II. REALISATION ET SUIVI DE CHANTIER
            </h2>
            <img
              src={downChevron}
              alt="Chevron icon"
              className={`missions-chevron-icon ${
                isAccordionOpen === 2 ? "rotate" : ""
              }`}
            />
          </div>
          <div
            className={`missions-accordion-content grid ${
              isAccordionOpen === 2 ? "visible" : "hidden"
            } `}
          >
            <div className="missions-accordion-content-text">
              <h2 className="sub-2">OBJECTIF :</h2>
              <div className="missions-paragraph-group">
                <p>
                  La mission de réalisation et suivi de chantier consiste en la
                  mise en
                </p>
                <p>
                  Chaque espace est pensé, conçu et formalisé sur mesure pour
                  répondre à vos usages spécifiques, tout en dialoguant
                  harmonieusement avec son environnement.
                </p>
              </div>

              <h2 className="sub-2">PHASES :</h2>
              <h3 className="sub-3">
                <i className="fa-solid fa-file-signature"></i>
                ASSISTANCE A LA SIGNATURE DES TRAVAUX
              </h3>
              <div className="missions-paragraph-group">
                <p>
                  Sur la base d'un programme défini ensemble, l’architecte
                  établit d'abord un relevé des éléments existants (terrain,
                  bâti…) pour en documenter graphiquement les caractéristiques.
                  Ce relevé sert ensuite de base pour la réalisation d’une
                  esquisse conforme à ce programme.
                </p>
                <p>
                  L’esquisse d’architecture produite inclut notamment la
                  formalisation des éléments suivants :
                </p>
              </div>
              <h3 className="sub-3">
                <i className="fa-solid fa-handshake"></i>
                PREPARATION DE CHANTIER
              </h3>
              <div className="missions-paragraph-group">
                <p>
                  Sur la base d'un programme défini ensemble, l’architecte
                  établit d'abord un relevé des éléments existants (terrain,
                  bâti…) pour en documenter graphiquement les caractéristiques.
                  Ce relevé sert ensuite de base pour la réalisation d’une
                  esquisse conforme à ce programme.
                </p>
                <p>
                  L’esquisse d’architecture produite inclut notamment la
                  formalisation des éléments suivants :
                </p>
              </div>
              <h3 className="sub-3">
                <i className="fa-solid fa-stamp"></i>
                VISAS DE TRAVAUX
              </h3>
              <div className="missions-paragraph-group">
                <p>
                  Sur la base d'un programme défini ensemble, l’architecte
                  établit d'abord un relevé des éléments existants (terrain,
                  bâti…) pour en documenter graphiquement les caractéristiques.
                  Ce relevé sert ensuite de base pour la réalisation d’une
                  esquisse conforme à ce programme.
                </p>
                <p>
                  L’esquisse d’architecture produite inclut notamment la
                  formalisation des éléments suivants :
                </p>
              </div>
              <h3 className="sub-3">
                <i className="fa-solid fa-helmet-safety"></i>
                DIRECTION DE L'EXECUTION DES TRAVAUX
              </h3>
              <div className="missions-paragraph-group">
                <p>
                  Sur la base d'un programme défini ensemble, l’architecte
                  établit d'abord un relevé des éléments existants (terrain,
                  bâti…) pour en documenter graphiquement les caractéristiques.
                  Ce relevé sert ensuite de base pour la réalisation d’une
                  esquisse conforme à ce programme.
                </p>
                <p>
                  L’esquisse d’architecture produite inclut notamment la
                  formalisation des éléments suivants :
                </p>
              </div>
              <h3 className="sub-3">
              <i className="fa-solid fa-file-invoice"></i>
                SUIVI ADMINISTRATIF ET PAIEMENTS
              </h3>
              <div className="missions-paragraph-group">
                <p>
                  Sur la base d'un programme défini ensemble, l’architecte
                  établit d'abord un relevé des éléments existants (terrain,
                  bâti…) pour en documenter graphiquement les caractéristiques.
                  Ce relevé sert ensuite de base pour la réalisation d’une
                  esquisse conforme à ce programme.
                </p>
                <p>
                  L’esquisse d’architecture produite inclut notamment la
                  formalisation des éléments suivants :
                </p>
              </div>
              <h3 className="sub-3">
              <i className="fa-solid fa-key"></i>
                ASSISTANCE AUX OPERATIONS DE RECEPTION DE L'OUVRAGE
              </h3>
              <div className="missions-paragraph-group">
                <p>
                  Sur la base d'un programme défini ensemble, l’architecte
                  établit d'abord un relevé des éléments existants (terrain,
                  bâti…) pour en documenter graphiquement les caractéristiques.
                  Ce relevé sert ensuite de base pour la réalisation d’une
                  esquisse conforme à ce programme.
                </p>
                <p>
                  L’esquisse d’architecture produite inclut notamment la
                  formalisation des éléments suivants :
                </p>
              </div>
            </div>

            <div className="missions-accordion-content-image">
              <div className="missions-image-large">
                <img
                  src={missionsData[3].imgSrc}
                  alt={missionsData[3].description}
                />
              </div>
              <div className="missions-image-small-container">
                <div className="missions-image-small">
                  <img
                    src={missionsData[4].imgSrc}
                    alt={missionsData[4].description}
                  />
                </div>
                <div className="missions-image-small">
                  <img
                    src={missionsData[5].imgSrc}
                    alt={missionsData[5].description}
                  />
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
              III. PERIMETRE DES PRESTATIONS
            </h2>
            <img
              src={downChevron}
              alt="Chevron icon"
              className={`missions-chevron-icon ${
                isAccordionOpen === 3 ? "rotate" : ""
              }`}
            />
          </div>
          <div
            className={`missions-accordion-content grid ${
              isAccordionOpen === 3 ? "visible" : "hidden"
            } `}
          >
            <div className="missions-accordion-content-text">
              <h2 className="sub-2">OBJECTIF :</h2>
              <div className="missions-paragraph-group">
                <p>
                  Vous pouvez aussi choisir des petites prestation individuelles
                </p>
                <p>
                  Missions plus précises permettant de se concentrer sur une
                  tâche précise.
                </p>
              </div>

              <h2 className="sub-2">EXEMPLE</h2>
              <ul>
                <li>
                  <h3 className="sub-3">LA VISITE CONSEIL</h3>
                </li>
                <div className="missions-paragraph-group">
                  <p>
                    Cette mission est indépendante des missions détaillées
                    ci-avant. Elle peut être réalisée seule et sans suite.
                  </p>
                  <p>
                    Elle permet de formaliser le programme et attentes du
                    client. A l’issue de la visite, l’architecte élabore un
                    rapport qui comprend le programme validé et une analyse des
                    contraintes urbanistiques et financières de l’opération.
                  </p>
                </div>
                <li>
                  <h3 className="sub-3">LA MISSION PARTIELLE</h3>
                </li>
                <div className="missions-paragraph-group">
                  <p>La mission partielle couvre</p>
                  <ul>
                    <li>la phase esquisse</li>
                    <li>la phase avant-projet</li>
                    <li>la phase autorisation d’urbanisme</li>
                  </ul>
                  <p>
                    Cette mission s’arrête à l’autorisation d’urbanisme. Les
                    plans remis ne sont pas destinés à la réalisation.
                  </p>
                  <p>C’est au client de choisir les entreprises.</p>
                </div>
                <li>
                  <h3 className="sub-3">LA MISSION PARTIELLE ETENDUE</h3>
                </li>
                <div className="missions-paragraph-group">
                  <p>
                    La mission partielle étendue couvre les éléments de la
                    mission partielle en ajoutant{" "}
                  </p>
                  <ul>
                    <li>La phase de conception finale et détaillée</li>
                    <li>La consultation et l'analyse des offres</li>
                  </ul>
                  <p>
                    Cette mission inclut le dossier PRO/DCE, un document
                    technique très complet qui regroupe l’ensemble des éléments
                    nécessaires pour solliciter des devis auprès des entreprises
                  </p>
                </div>
                <li>
                  <h3 className="sub-3">LA MISSION COMPLETE</h3>
                </li>
                <div className="missions-paragraph-group">
                  <p>
                    La mission complète couvre l'ensemble des prestation de
                    conception architecturale et réalisaiton / suivi de
                    chantiers couverts dans les parties I et II.
                  </p>
                </div>
              </ul>
            </div>

            <div className="missions-accordion-content-image">
              <div className="missions-image-large">
                <img
                  src={missionsData[6].imgSrc}
                  alt={missionsData[6].description}
                />
              </div>
              <div className="missions-image-small-container">
                <div className="missions-image-small">
                  <img
                    src={missionsData[7].imgSrc}
                    alt={missionsData[7].description}
                  />
                </div>
                <div className="missions-image-small">
                  <img
                    src={missionsData[8].imgSrc}
                    alt={missionsData[8].description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
