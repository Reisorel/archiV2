// Centralise et valide les variables d'environnement
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// Valider les variables d'environnement nécessaires
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT: process.env.PORT || 3000,
  MONGO_URI_PROD: process.env.MONGO_URI_PROD || '',
  MONGO_URI_DEV: process.env.MONGO_URI_DEV || '',
  JWT_SECRET: process.env.JWT_SECRET || 'votre_clé_secrète_par_défaut',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d'
};

// Ajoutez des logs pour vérifier les variables
console.log('NODE_ENV:', ENV.NODE_ENV);
console.log('MONGO_URI_PROD:', ENV.MONGO_URI_PROD);
console.log('MONGO_URI_DEV:', ENV.MONGO_URI_DEV);
console.log('JWT_SECRET:', ENV.JWT_SECRET);

if (ENV.NODE_ENV === 'production' && !ENV.MONGO_URI_PROD) {
  console.error('❌ Missing required MongoDB URI for production');
  process.exit(1);
}

if (ENV.NODE_ENV !== 'production' && (!ENV.MONGO_URI_PROD || !ENV.MONGO_URI_DEV)) {
  console.error('❌ Missing required MongoDB URIs for development');
  process.exit(1);
}
