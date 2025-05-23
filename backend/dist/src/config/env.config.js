"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Centralise et valide les variables d'environnement
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
exports.default = ENV;
