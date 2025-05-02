"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Connexion à la base de données MongoDB
// Typage : fonction async qui ne retourne rien (Promise<void>)
const connectDB = async () => {
    const uri = process.env.NODE_ENV === 'production'
        ? process.env.MONGO_URI_PROD
        : process.env.MONGO_URI_DEV;
    if (!uri) {
        console.error('❌ MongoDB URI not found in .env');
        process.exit(1);
    }
    try {
        await mongoose_1.default.connect(uri);
        console.log(`✅ MongoDB connected in ${process.env.NODE_ENV} mode`);
        console.log(`📦 Using URI: ${uri.includes('mongodb+srv') ? 'MongoDB Atlas (cloud)' : 'Localhost (127.0.0.1)'}`);
    }
    catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1);
    }
};
exports.default = connectDB;
