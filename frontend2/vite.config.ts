import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
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
    fs: {
      // Garde cette partie spécifique à frontend2
      allow: [
        '.',
        path.resolve(__dirname, '../node_modules')
      ]
    },
    port: 5000, // Définit le port du serveur de dev sur 5000
    strictPort: true
  }
})
