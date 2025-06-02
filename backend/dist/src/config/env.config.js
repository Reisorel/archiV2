"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
// Centralise et valide les variables d'environnement
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
// Valider les variables d'environnement nécessaires
exports.ENV = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT: process.env.PORT || 3000,
    MONGO_URI_PROD: process.env.MONGO_URI_PROD || '',
    MONGO_URI_DEV: process.env.MONGO_URI_DEV || '',
    JWT_SECRET: process.env.JWT_SECRET || 'votre_clé_secrète_par_défaut',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d'
};
// Ajoutez des logs pour vérifier les variables
console.log('NODE_ENV:', exports.ENV.NODE_ENV);
console.log('MONGO_URI_PROD:', exports.ENV.MONGO_URI_PROD);
console.log('MONGO_URI_DEV:', exports.ENV.MONGO_URI_DEV);
console.log('JWT_SECRET:', exports.ENV.JWT_SECRET);
if (exports.ENV.NODE_ENV === 'production' && !exports.ENV.MONGO_URI_PROD) {
    console.error('❌ Missing required MongoDB URI for production');
    process.exit(1);
}
if (exports.ENV.NODE_ENV !== 'production' && (!exports.ENV.MONGO_URI_PROD || !exports.ENV.MONGO_URI_DEV)) {
    console.error('❌ Missing required MongoDB URIs for development');
    process.exit(1);
}
