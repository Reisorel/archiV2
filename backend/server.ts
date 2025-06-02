// Démarre le serveur Express
import app from "./src/app";
import connectDB from "./src/config/db.config";
import { ENV } from './src/config/env.config'; // ✅ Correct

// Fonction pour démarrer le serveur
export const startServer = async (): Promise<void> => {
  try {
    // Connexion à MongoDB
    await connectDB();

    // Log des variables d'environnement
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('MONGO_URI_PROD:', process.env.MONGO_URI_PROD);
    console.log('MONGO_URI_DEV:', process.env.MONGO_URI_DEV);

    // Démarrage du serveur Express
    app.listen(ENV.PORT, () => {
      // Précise mode dev ou prod / port / adresse de l'API
      console.log(`✅ Serveur en mode ${ENV.NODE_ENV}`);
      console.log(`✅ Serveur en écoute sur le port ${ENV.PORT}`);
      console.log(`🌐 Adresse de l'API: http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    console.error("❌ Erreur au démarrage du serveur:", error);
    process.exit(1);
  }
};

// Démarre le serveur
startServer();
