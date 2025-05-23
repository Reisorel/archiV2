"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Gère la xonneciotn à la base de données MongoDB
const mongoose_1 = __importDefault(require("mongoose"));
const env_config_1 = require("./env.config"); // ✅ Correct
// Configuration mongoose
mongoose_1.default.set('strictQuery', true);
// Fonction de connexion à la base de données
const connectDB = async () => {
    const uri = env_config_1.ENV.NODE_ENV === 'production' ? env_config_1.ENV.MONGO_URI_PROD : env_config_1.ENV.MONGO_URI_DEV;
    try {
        await mongoose_1.default.connect(uri);
        console.log(`✅ MongoDB connected in ${env_config_1.ENV.NODE_ENV} mode`);
        console.log(`📦 Using URI: ${uri.includes('mongodb+srv') ? 'MongoDB Atlas (cloud)' : 'Localhost (127.0.0.1)'}`);
    }
    catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1);
    }
};
exports.default = connectDB;
