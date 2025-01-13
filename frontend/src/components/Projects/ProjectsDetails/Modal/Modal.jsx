import React from "react";
import "./Modal.css";

export default function Modal({ isOpen, imageSrc, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
        <i className="fas fa-times close-btn" onClick={onClose}></i>
        </span>
        <img src={imageSrc} alt="Large View" onClick={onClose} /> {/* Clic ferme la modale */}
      </div>
    </div>
  );
}
