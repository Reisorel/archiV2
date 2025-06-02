// Centralise et valide les variables d'environnement
import dotenv from 'dotenv';
dotenv.config();

// Valider les variables d'environnement nécessaires
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  MONGO_URI_PROD: process.env.MONGO_URI_PROD || '',
  MONGO_URI_DEV: process.env.MONGO_URI_DEV || '',
  JWT_SECRET: process.env.JWT_SECRET || 'votre_clé_secrète_par_défaut',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d'
};

if (!ENV.MONGO_URI_PROD || !ENV.MONGO_URI_DEV) {
  console.error('❌ Missing required MongoDB URIs in .env file');
  process.exit(1);
}
