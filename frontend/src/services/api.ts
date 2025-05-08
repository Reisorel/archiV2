// src/services/api.ts

const baseURL = import.meta.env.VITE_API_URL;
console.log("API URL utilisé : ", baseURL);

// fetch des données backend pour le slider
export async function getSlides() {
  const response = await fetch(`${baseURL}/api/admin/sliders`);
  if (!response.ok) {
    throw new Error('Failed to fetch slides');
  }
  const data = await response.json();
  return data;
}

// fetch des données backend pour les news
export async function getNews() {
  const response = await fetch(`${baseURL}/api/admin/news`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const data = await response.json();
  return data;
}

// fetch des données backend pour les missions
export async function getMissions() {
  const response = await fetch(`${baseURL}/api/admin/missions`);
  if (!response.ok) {
    throw new Error('Failed to fetch missions');
  }
  const data = await response.json();
  return data;
}
// fetch des données backend pour les projets
export async function getProjects() {
  const response = await fetch(`${baseURL}/api/admin/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const data = await response.json();
  return data;
}
