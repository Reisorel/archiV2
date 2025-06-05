"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User_model_1 = __importDefault(require("../models/User.model"));
const password_utils_1 = require("../utils/password.utils");
const db_config_1 = __importDefault(require("../config/db.config"));
const logger_utils_1 = __importDefault(require("../utils/logger.utils"));
const dotenv_1 = __importDefault(require("dotenv"));
// Charger les variables d'environnement
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
const createAdminUser = async () => {
    try {
        // Utiliser la fonction de connexion existante
        await (0, db_config_1.default)();
        logger_utils_1.default.info('Connexion à MongoDB établie pour le seeding');
        // Vérifier si un admin existe déjà
        const adminExists = await User_model_1.default.findOne({ role: 'admin' });
        if (adminExists) {
            logger_utils_1.default.info('Un administrateur existe déjà, pas besoin d\'en créer un nouveau');
            return;
        }
        // Créer l'admin
        const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
        const passwordHash = await (0, password_utils_1.hashPassword)(adminPassword);
        const admin = await User_model_1.default.create({
            name: 'Admin',
            email: process.env.ADMIN_EMAIL || 'admin@example.com',
            passwordHash,
            role: 'admin'
        });
        logger_utils_1.default.info(`Administrateur créé avec succès: ${admin.email}`);
    }
    catch (error) {
        // Modification ici : vérifier le type de l'erreur avant de l'utiliser
        if (error instanceof Error) {
            logger_utils_1.default.error('Erreur lors de la création de l\'administrateur:', error);
        }
        else {
            logger_utils_1.default.error('Erreur lors de la création de l\'administrateur:', new Error(String(error)));
        }
    }
    finally {
        // Fermer la connexion
        await mongoose_1.default.disconnect();
        logger_utils_1.default.info('Connexion à MongoDB fermée');
    }
};
// Exécuter le script
createAdminUser();
