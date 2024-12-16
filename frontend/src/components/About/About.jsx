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
      <div className="main-infos">
        <div className="picture">
          <img src={portrait} alt="" />
        </div>
        <div className="text">
          <h1>CASSANDRE MARION</h1>
          <span className="line1">ARCHITECTE DIPLOMEE D'ETAT.</span>
          <span className="line2">J'interviens depuis 2016 sur tous</span>
          <span className="line2">
            vos projets {article}{" "}
            <span ref={wordRef} className="line3">
              {words[index]}
            </span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
