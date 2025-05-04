import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Élargir la liste des répertoires autorisés pour inclure les polices de Font Awesome
      allow: [
        // Répertoire de travail actuel
        '.',
        // Chemin vers le répertoire de node_modules parent
        path.resolve(__dirname, '../node_modules')
      ]
    }
  }
})
