import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "./About.css";
const portrait = "/images/welcome/Cassandre.jpg";

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

  const [index, setIndex] = useState(0); // Index du mot courant
  const wordRef = useRef(null); // Réf

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

  return (
    <div id="about" className="about-container">
      <div className="secTitle">
        <h3 className="title">A PROPOS</h3>
      </div>
      <div className="infos-container">
        <div className="about-grid-item">
          <div className="picture">
            <img src={portrait} alt="" />
          </div>
        </div>

        <div className="about-grid-item">
          <div className="presentation-text">
            <div className="presentation-text-high">
              <p>
                Architecte indépendante de 32 ans, je suis diplômée de l’École
                d’Architecture de Rouen, où j’ai pu approfondir mes
                connaissances sur l’architecture italienne lors d’une année
                d’étude à Rome.
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
                <span className="line2">N'héitez pas à me contacter pour </span>
                <span className="line2">
                  votre projet {article}{" "}
                  <span ref={wordRef} className="line3">
                    {words[index]}
                  </span>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="about-grid-item">
          <div className="CV">
            <div className="date">
              <span className="year">2024 - </span>
              <span className="description">
                Création de mon agence (Rennes)
              </span>
            </div>
            <div className="date">
              <span className="year">2021 - </span>
              <span className="description">
                Chatillon Architecture (Paris)
              </span>
            </div>
            <div className="date">
              <span className="year">2018 - </span>
              <span className="description">
                Dubuisson Architecture (Paris)
              </span>
            </div>
            <div className="date">
              <span className="year">2017 - </span>
              <span className="description">Architecte HMONP</span>
            </div>
            <div className="date">
              <span className="year">2016 - </span>
              <span className="description">
                Diplôme d'Architecte - ENSAM Rouen
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*

        <div className="text1">
          <p>

          </p>
        </div>

        <div className="text1">

        </div>
        <div className="CV">
          <p>2017</p>
          <p>2018</p>

        </div> */}
    </div>
  );
}
