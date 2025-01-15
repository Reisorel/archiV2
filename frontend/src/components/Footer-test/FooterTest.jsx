import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FooterTest.scss";

gsap.registerPlugin(ScrollTrigger);

const FooterTest = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (footer) {
      console.log("Footer détecté :", footer); // Vérifie que la ref est bien trouvée

      const scrollTrigger = ScrollTrigger.create({
        trigger: footer,
        pin: true,
        start: "bottom bottom",
        end: "+=100%",
      });

      return () => {
        scrollTrigger.kill(); // Nettoyage de l'animation lors du démontage
      };
    }
  }, []);

  return (
      <div ref={footerRef} className="footer">
        <div className="footer-content">
          <div className="footer-paragraph">
            <h1>This is a nice paragraph numero uno</h1>
            <p>This si the content</p>
            <h1>This is a nice paragraph</h1>
          </div>
          <div className="footer-paragraph">
            <h1>This is a nice paragraph</h1>
            <p>This si the content</p>
            <h1>This is a nice paragraph</h1>
          </div>
          <div className="footer-paragraph">
            <h1>This is a nice paragraph</h1>
            <p>This is the content</p>
            <h1>This is a nice paragraph</h1>
          </div>
        </div>
      </div>
  );
};

export default FooterTest;
