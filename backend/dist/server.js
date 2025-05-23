"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
// Démarre le serveur Express
const app_1 = __importDefault(require("./src/app"));
const db_config_1 = __importDefault(require("./src/config/db.config"));
const env_config_1 = require("./src/config/env.config"); // ✅ Correct
// Fonction pour démarrer le serveur
const startServer = async () => {
    try {
        // Connexion à MongoDB
        await (0, db_config_1.default)();
        // Démarrage du serveur Express
        app_1.default.listen(env_config_1.ENV.PORT, () => {
            // Précise mode dev ou prod / port / adresse de l'API
            console.log(`✅ Serveur en mode ${env_config_1.ENV.NODE_ENV}`);
            console.log(`✅ Serveur en écoute sur le port ${env_config_1.ENV.PORT}`);
            console.log(`🌐 Adresse de l'API: http://localhost:${env_config_1.ENV.PORT}`);
        });
    }
    catch (error) {
        console.error("❌ Erreur au démarrage du serveur:", error);
        process.exit(1);
    }
};
exports.startServer = startServer;
// Démarre le serveur
(0, exports.startServer)();
