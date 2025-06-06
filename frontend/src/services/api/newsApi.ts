import fetchClient from './fetchClient';

// Définition du type News pour le typage TypeScript
interface News {
  id: number;
  slug: string;
  title: string;
  location: string;
  grade: string;
  description: string;
  image: string;
}

export const newsApi = {
  // GET - Récupérer toutes les news
  getAll: async (): Promise<News[]> => {
    return await fetchClient('/news');
  },

  // GET - Récupérer une news spécifique
  getById: async (id: string): Promise<News> => {
    return await fetchClient(`/news/${id}`);
  },

  // POST - Créer une nouvelle news
  create: async (newsData: News): Promise<News> => {
    // L'ID personnalisé est inclus dans les données
    return await fetchClient('/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newsData),
    });
  },

  // PUT - Mettre à jour une news existante
  update: async (id: string, newsData: Partial<News>): Promise<News> => {
    return await fetchClient(`/news/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newsData),
    });
  },

  // DELETE - Supprimer une news
  delete: async (id: string): Promise<void> => {
    return await fetchClient(`/news/${id}`, {
      method: 'DELETE',
    });
  }
};
