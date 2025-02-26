import React, { useEffect, useCallback, useRef } from "react";
import { gsap } from "gsap"; // AJOUT
import { Draggable } from "gsap/Draggable"; // AJOUT
import "./Modal.css";

gsap.registerPlugin(Draggable); // AJOUT

export default function Modal({
  isOpen,
  images,
  currentImageIndex,
  onClose,
  onNavigate,
}) {
  const totalImages = images.length;
  const imageRef = useRef(null); // AJOUT : Référence pour l’image

  // useCallback pour mémoriser `handleNext` et `handlePrev`
  const handleNext = useCallback(() => {
    if (typeof currentImageIndex !== "number" || isNaN(currentImageIndex))
      return;
    const newIndex = (currentImageIndex + 1) % totalImages;
    onNavigate(newIndex);
  }, [currentImageIndex, onNavigate]);

  const handlePrev = useCallback(() => {
    if (typeof currentImageIndex !== "number" || isNaN(currentImageIndex))
      return;
    const newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    onNavigate(newIndex);
  }, [currentImageIndex, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault(); // Empêche le scroll horizontal
      }

      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  // AJOUT : Gestion du swipe tactile avec Draggable
  useEffect(() => {
    if (!isOpen || !imageRef.current) return;

    const draggableInstance = Draggable.create(imageRef.current, {
      type: "x", // Swipe horizontal
      inertia: true, // Effet d'inertie
      onDragEnd: function () {
        if (this.getDirection() === "left") {
          handleNext(); // Passe à l’image suivante
        } else if (this.getDirection() === "right") {
          handlePrev(); // Passe à l’image précédente
        }
      },
    });

    return () => {
      // Nettoyage du Draggable lorsqu’on ferme la modale
      draggableInstance[0].kill();
    };
  }, [isOpen, handleNext, handlePrev]);

  if (!isOpen) return null;

  const currentImage = images[currentImageIndex];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Fermer la modale"
        >
          <i className="fas fa-times"></i>
        </button>

        <button className="modal-arrow left-arrow" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </button>

        {currentImage ? (
          <img
            key={currentImageIndex}
            ref={imageRef} // AJOUT : Référence pour GSAP
            src={currentImage.src}
            alt={currentImage.alt}
            className="show"
          />
        ) : (
          <p>Image non disponible</p>
        )}

        <button className="modal-arrow right-arrow" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
