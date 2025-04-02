"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Connexion à la base de données MongoDB
// Typage : fonction async qui ne retourne rien (Promise<void>)
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const uri = process.env.NODE_ENV === 'production'
        ? process.env.MONGO_URI_PROD
        : process.env.MONGO_URI_DEV;
    if (!uri) {
        console.error('❌ MongoDB URI not found in .env');
        process.exit(1);
    }
    try {
        yield mongoose_1.default.connect(uri);
        console.log(`✅ MongoDB connected in ${process.env.NODE_ENV} mode`);
        console.log(`📦 Using URI: ${uri.includes('mongodb+srv') ? 'MongoDB Atlas (cloud)' : 'Localhost (127.0.0.1)'}`);
    }
    catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1);
    }
});
exports.default = connectDB;
