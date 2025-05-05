import {useState, useEffect, useRef, FC} from 'react';
import {useNavigate} from 'react-router-dom';
import gsap from 'gsap';

import './Projects.scss';

interface ProjectData {
  id: string;
  slug: string;
  title: string;
  mainImage: string;
}

const Projects: FC = () => {
  const [projectsData, setProjectsData] = useState<ProjectData[]>([]); // État pour stocker les données des projets
  const navigate = useNavigate(); // Hook pour naviguer entre les pages
  const titleRef = useRef<HTMLHeadingElement>(null); // Ref titre
  const gridRef = useRef<HTMLDivElement>(null); // Ref items grille

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/admin/projects"
        );
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Erreur lors du fetch des news:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (projectsData.length === 0) return;

    // Animation titre
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
      const items = gridRef.current.querySelectorAll(".projects-row");

      items.forEach((item) => {
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
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, [projectsData]);

  return (
    <div className="projects-framer">
      <div className="projects-container">
        <div id="projects" className="projects-secTitle">
          <h3 className="title" ref={titleRef}>
            PROJETS
          </h3>
        </div>

        <div ref={gridRef} className="projects-secContent-grid">
          {projectsData.map((projet) => (
            <div
              key={projet.id}
              className="projects-row"
              onClick={() => {
                navigate(`/projects/${projet.slug}`);
                window.scrollTo(0, 0);
              }}
            >
              <div className="project-name">
                <h2 className="sub-2">{projet.title}</h2>
              </div>
              <div className="projects-imageDiv">
                <img src={projet.mainImage} alt={projet.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
