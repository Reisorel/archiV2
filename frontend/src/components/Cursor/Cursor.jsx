import { useEffect } from 'react';
import gsap from 'gsap';
import './Cursor.css';

const CustomCursor = () => {
  useEffect(() => {
    // Création des éléments
    const cursor = document.createElement('div');
    const cursorInner = document.createElement('div');

    cursor.classList.add('custom-cursor');
    cursorInner.classList.add('custom-cursor-inner');

    document.body.appendChild(cursor);
    document.body.appendChild(cursorInner);

    // Déplacement du curseur
    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2, ease: 'power2.out' });
      gsap.to(cursorInner, { x: e.clientX, y: e.clientY, duration: 0.2, ease: 'power2.out' });
    };

    document.addEventListener('mousemove', moveCursor);

    // Effet clic
    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.1 });
      gsap.to(cursorInner, { scale: 1.2, duration: 0.1, opacity: 0.5 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.1, opacity: 1 });
      gsap.to(cursorInner, { scale: 1, duration: 0.1, opacity: 1 });
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Animation hover sur les liens
    const links = document.querySelectorAll("[data-hover-detect='true']");
    const handleMouseOver = () => {
      gsap.to(cursor, { backgroundColor: 'transparent', opacity: 0.3, scale: 1.1 });
      gsap.to(cursorInner, { backgroundColor: 'black', opacity: 0.3, scale: 1, duration: 0.1 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { backgroundColor: 'transparent', opacity: 1, scale: 1.0 });
      gsap.to(cursorInner, { backgroundColor: 'black', opacity: 1, scale: 1.0, duration: 0.1 });
    };

    links.forEach((link) => {
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    // Nettoyage des événements et suppression des éléments au démontage
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      links.forEach((link) => {
        link.removeEventListener('mouseover', handleMouseOver);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });

      document.body.removeChild(cursor);
      document.body.removeChild(cursorInner);
    };
  }, []);

  return null;
};

export default CustomCursor;
