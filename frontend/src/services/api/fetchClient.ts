const baseURL = import.meta.env.VITE_API_URL;
console.log("API URL utilisé : ", baseURL);

async function fetchClient(endpoint: string, options: RequestInit = {}) {
  // Construction de l'URL complète
  const url = `${baseURL}/api${endpoint}`;

  // Exécution de la requête
  const response = await fetch(url, options);

  // Gestion des erreurs
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  // Parsing des données
  const data = await response.json();
  return data;
}

export default fetchClient;
