import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  root: '.', // Définit la racine du projet
  publicDir: 'public', // Dossier pour les assets publics
  build: {
    outDir: 'dist', // Assure-toi que le build sort bien dans "dist"
    emptyOutDir: true, // Supprime le contenu du dossier avant de builder
    rollupOptions: {
      input: 'index.html' // Assure que Vite trouve bien l'index
    }
  },
  server: {
    port: 5000, // Définit le port du serveur de dev sur 5000
    strictPort: true
  }
});

