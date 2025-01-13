import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import du plugin
import "./About.css";

const portrait = "/images/about/Cassandre.jpg";

export default function About() {
  const words = [
    "rénovation 🛠️",
    "construction 🔨",
    "destruction 💣",
    "maison individuelle🏠",
    "appartement 🏢",
    "permis de constuire 📜",
    "maitrise d'oeuvre 👷‍♀️",
    "maison à la mer 🌊",
  ];

  const titleRef = useRef(null); // Animation titre
  const pictureRef = useRef(null); // Animation image
  const textRef = useRef(null); // Animation texte

  const [index, setIndex] = useState(0); // Index du mot courant
  const wordRef = useRef(null); // Index du mot courant

  const cvRef = useRef(null); // Animation date

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current, // Déclencheur global
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Animation du titre
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    // Animation de l'image qui arrive de la gauche
    tl.fromTo(
      pictureRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=1" // Démarre légèrement avant la fin de l'animation du titre
    );
  }, []);

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

  //Animation parapraphe changeant
  useEffect(() => {
    const interval = setInterval(() => {
      // Animation de sortie du mot
      gsap.to(wordRef.current, {
        opacity: 0,
        y: -20, // Décale légèrement vers le haut
        duration: 0.5,
        onComplete: () => {
          // Met à jour le mot
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          // Animation d'entrée du nouveau mot
          gsap.fromTo(
            wordRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          );
        },
      });
    }, 3000); // Change de mot toutes les 3 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, []);

  // Prération opérateur ternaire pour changement d'article.
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const article = vowels.includes(words[index][0].toLowerCase())
    ? "d' "
    : "de ";

  // Animation dates
  useEffect(() => {
    const dates = gsap.utils.toArray(".date").reverse(); // Récupère les éléments dans l'ordre inverse

    gsap.fromTo(
      dates,
      { x: 100, opacity: 0 }, // Départ (hors écran à droite, invisible)
      {
        x: 0, // Position normale
        opacity: 1,
        duration: 3, // Durée de chaque apparition
        ease: "power3.out",
        stagger: 0.2, // Délai progressif entre chaque élément
        scrollTrigger: {
          trigger: cvRef.current, // Déclencheur = Conteneur CV
          start: "top 90%", // Déclenchement quand la section entre dans l’écran
          toggleActions: "play none none none", // Joue une seule fois
        },
      }
    );
  }, []);

  return (
    <div id="about" className="about-container">
      <div className="secTitle">
        <h1 ref={titleRef} className="title">
          A PROPOS
        </h1>
      </div>
      <div className="infos-container">
        <div className="about-grid-item">
          <div ref={pictureRef} className="picture">
            <img src={portrait} alt="" />
          </div>
        </div>

        <div className="about-grid-item">
          <div ref={textRef} className="presentation-text">
            <div className="presentation-text-high">
              <p>
                Architecte indépendante de 32 ans, je suis diplômée de l’École
                d’Architecture de Rouen, où j’ai pu approfondir mes
                connaissances lors d’une année d’étude à Rome.
              </p>
              <p>
                Habilitée à exercer en mon nom propre depuis 2017, je mets à
                profit dix ans d’expérience en agences parisiennes. J’ai
                travaillé sur des projets publics et privés, allant de la
                réhabilitation d’appartements haussmanniens à la conception
                d’immeubles, en passant par la réalisation de complexes
                nautiques municipaux. Je mêle ainsi architecture contemporaine
                et patrimoniale
              </p>
              <p>
                De retour à l'Ouest, je conçois des lieux sur-mesure,
                fonctionnels et inspirants, en phase avec vos besoins et votre
                histoire.
              </p>
            </div>
            <div className="presentation-text-low">
              <p>
                <span className="line2">
                  N'hésitez pas à me contacter pour discuter ensemble de{" "}
                </span>
                <span className="line2">
                  votre projet {article}{" "}
                  <span ref={wordRef} className="line2">
                    {words[index]}
                  </span>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
        ref={cvRef}
        className="about-grid-item">
          <div className="CV">
            <div className="date">
              <span className="year">2024.</span>
              <span className="description">
                Création de mon agence (Rennes)
              </span>
            </div>
            <div className="date">
              <span className="year">2021.</span>
              <span className="description">
                Chatillon Architecture (Paris)
              </span>
            </div>
            <div className="date">
              <span className="year">2018.</span>
              <span className="description">
                Dubuisson Architecture (Paris)
              </span>
            </div>
            <div className="date">
              <span className="year">2017.</span>
              <span className="description">Architecte HMONP</span>
            </div>
            <div className="date">
              <span className="year">2016.</span>
              <span className="description">
                Diplôme d'Architecte - ENSAM Rouen
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
