import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Test.css";

export default function Test() {
  const boxRef = useRef(null); // Référence directe à l'élément DOM

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { x: -400, opacity: 0 }, // Position de départ
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Position finale
    );
  }, []);

  return (
    <div className="test-container">
      {/* <div ref={boxRef} className="box green"></div> */}
    </div>
  );
}
