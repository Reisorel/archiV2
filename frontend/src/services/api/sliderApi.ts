import fetchClient from './fetchClient';

// Définition du type Slider pour le typage TypeScript
interface Slider {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const sliderApi = {
  // GET - Récupérer tous les sliders
  getAll: async (): Promise<Slider[]> => {
    return await fetchClient('/sliders');
  },

  // GET - Récupérer un slider spécifique
  getById: async (id: string): Promise<Slider> => {
    return await fetchClient(`/sliders/${id}`);
  },

  // POST - Créer un nouveau slider
  create: async (sliderData: Slider): Promise<Slider> => {
    return await fetchClient('/sliders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sliderData),
    });
  },

  // PUT - Mettre à jour un slider existant
  update: async (id: string, sliderData: Partial<Slider>): Promise<Slider> => {
    return await fetchClient(`/sliders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sliderData),
    });
  },

  // DELETE - Supprimer un slider
  delete: async (id: string): Promise<void> => {
    return await fetchClient(`/sliders/${id}`, {
      method: 'DELETE',
    });
  }
};
