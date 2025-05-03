// CustomCursor.tsx
import { useEffect, FC } from 'react';
import gsap from 'gsap';
import './Cursor.css';

const CustomCursor: FC = () => {
  useEffect(() => {
    // 1. Création des éléments avec typage explicite
    const cursor: HTMLDivElement = document.createElement('div');
    const cursorInner: HTMLDivElement = document.createElement('div');

    cursor.classList.add('custom-cursor');
    cursorInner.classList.add('custom-cursor-inner');

    document.body.appendChild(cursor);
    document.body.appendChild(cursorInner);

    // 2. Typage de l'événement souris
    const moveCursor = (e: MouseEvent): void => {
      // GSAP accepte des éléments natifs, pas besoin de cast supplémentaire
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', moveCursor);

    // 3. Effet clic avec typage des callbacks
    const handleMouseDown = (): void => {
      gsap.to(cursor, { scale: 0.8, duration: 0.1 });
      gsap.to(cursorInner, {
        scale: 1.2,
        duration: 0.1,
        opacity: 0.5,
      });
    };

    const handleMouseUp = (): void => {
      gsap.to(cursor, { scale: 1, duration: 0.1, opacity: 1 });
      gsap.to(cursorInner, {
        scale: 1,
        duration: 0.1,
        opacity: 1,
      });
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // 4. Animation hover sur les liens : querySelectorAll renvoie NodeListOf<Element>
    const links: NodeListOf<Element> = document.querySelectorAll("[data-hover-detect='true']");

    const handleMouseOver = (): void => {
      gsap.to(cursor, {
        backgroundColor: 'transparent',
        opacity: 0.3,
        scale: 1.1,
      });
      gsap.to(cursorInner, {
        backgroundColor: 'black',
        opacity: 0.3,
        scale: 1,
        duration: 0.1,
      });
    };

    const handleMouseLeave = (): void => {
      gsap.to(cursor, {
        backgroundColor: 'transparent',
        opacity: 1,
        scale: 1.0,
      });
      gsap.to(cursorInner, {
        backgroundColor: 'black',
        opacity: 1,
        scale: 1.0,
        duration: 0.1,
      });
    };

    links.forEach((link) => {
      // On s'assure que link est un EventTarget valide
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    // 5. Cleanup avec typage des retours
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
