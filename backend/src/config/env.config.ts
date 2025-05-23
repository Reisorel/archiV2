// Centralise et valide les variables d'environnement
import dotenv from 'dotenv';
dotenv.config();

// Valider les variables d'environnement nécessaires
const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  MONGO_URI_PROD: process.env.MONGO_URI_PROD || '',
  MONGO_URI_DEV: process.env.MONGO_URI_DEV || '',
};

if (!ENV.MONGO_URI_PROD || !ENV.MONGO_URI_DEV) {
  console.error('❌ Missing required MongoDB URIs in .env file');
  process.exit(1);
}

export default ENV;
