"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const app_1 = __importDefault(require("./src/app"));
const db_config_1 = __importDefault(require("./src/config/db.config"));
const env_config_1 = __importDefault(require("./src/config/env.config"));
// Fonction pour démarrer le serveur
const startServer = async () => {
    try {
        // Connexion à MongoDB
        await (0, db_config_1.default)();
        // Démarrage du serveur Express
        app_1.default.listen(env_config_1.default.PORT, () => {
            // Précise mode dev ou prod
            console.log(`✅ Serveur en mode ${env_config_1.default.NODE_ENV}`);
            console.log(`✅ Serveur en écoute sur le port ${env_config_1.default.PORT}`);
            console.log(`🌐 Adresse de l'API: http://localhost:${env_config_1.default.PORT}`);
        });
    }
    catch (error) {
        console.error('❌ Erreur au démarrage du serveur:', error);
        process.exit(1);
    }
};
exports.startServer = startServer;
// Lancement du serveur si ce fichier est exécuté directement
(0, exports.startServer)();
