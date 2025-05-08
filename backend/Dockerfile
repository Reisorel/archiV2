FROM node:24-alpine
# Création du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers du projet
COPY . .

# Compilation du TypeScript
RUN npm run build

# Exposer le port sur lequel l'application s'exécute
EXPOSE 3000

# Définir la variable d'environnement
ENV NODE_ENV=production

# Commande pour démarrer l'application
CMD ["node", "dist/server.js"]
