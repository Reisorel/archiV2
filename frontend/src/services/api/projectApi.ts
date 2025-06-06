import fetchClient from './fetchClient';

// Définition des interfaces pour le typage TypeScript
interface ImageLayout {
  src: string;
  alt: string;
  gridColumn: string;
  gridRow: string;
}

interface TechInfo {
  type: string;
  techLoc: string;
  sup: string;
  mo: string;
  inter: string;
  avance: string;
}

interface Project {
  id: number;
  slug: string;
  mainImage: string;
  title: string;
  loc: string;
  grade: string;
  description1: string;
  description2: string;
  tech: TechInfo;
  tags: string[];
  meta: string;
  layout: {
    images: ImageLayout[];
  };
}

export const projectApi = {
  // GET - Récupérer tous les projets
  getAll: async (): Promise<Project[]> => {
    return await fetchClient('/projects');
  },

  // GET - Récupérer un projet spécifique
  getById: async (id: string): Promise<Project> => {
    return await fetchClient(`/projects/${id}`);
  },

  // GET - Récupérer un projet par son slug
  getBySlug: async (slug: string): Promise<Project> => {
    return await fetchClient(`/projects/slug/${slug}`);
  },

  // POST - Créer un nouveau projet
  create: async (projectData: Project): Promise<Project> => {
    // Notez que l'ID est conservé selon votre demande
    return await fetchClient('/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
  },

  // PUT - Mettre à jour un projet existant
  update: async (id: string, projectData: Partial<Project>): Promise<Project> => {
    return await fetchClient(`/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
  },

  // DELETE - Supprimer un projet
  delete: async (id: string): Promise<void> => {
    return await fetchClient(`/projects/${id}`, {
      method: 'DELETE',
    });
  }
};
