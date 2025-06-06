import fetchClient from './fetchClient';

// Définition du type Mission pour le typage TypeScript
interface Mission {
  id: number;
  image: string;
  description: string;
}

export const missionsApi = {
  // GET - Récupérer toutes les missions
  getAll: async (): Promise<Mission[]> => {
    return await fetchClient('/missions');
  },

  // GET - Récupérer une mission spécifique
  getById: async (id: string): Promise<Mission> => {
    return await fetchClient(`/missions/${id}`);
  },

  // POST - Créer une nouvelle mission
  // Remarque: dans le controller, l'id est auto-généré côté serveur
  // mais on garde l'interface complète comme demandé
  create: async (missionData: Mission): Promise<Mission> => {
    return await fetchClient('/missions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(missionData),
    });
  },

  // PUT - Mettre à jour une mission existante
  update: async (id: string, missionData: Partial<Mission>): Promise<Mission> => {
    return await fetchClient(`/missions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(missionData),
    });
  },

  // DELETE - Supprimer une mission
  delete: async (id: string): Promise<void> => {
    return await fetchClient(`/missions/${id}`, {
      method: 'DELETE',
    });
  }
};
