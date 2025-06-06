"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/seeds/index.ts
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // ← Charge le fichier .env
const db_config_1 = __importDefault(require("../config/db.config"));
const seedSlider_1 = __importDefault(require("./seedSlider"));
const seedNews_1 = __importDefault(require("./seedNews"));
const seedMissions_1 = __importDefault(require("./seedMissions"));
const seedProjects_1 = __importDefault(require("./seedProjects"));
const runSeeds = async () => {
    try {
        await (0, db_config_1.default)();
        console.log('📡 Connected to DB');
        await (0, seedSlider_1.default)();
        await (0, seedNews_1.default)();
        await (0, seedMissions_1.default)();
        await (0, seedProjects_1.default)();
        console.log('🌱 All seeds done');
        process.exit();
    }
    catch (error) {
        console.error('❌ Error during seeding', error);
        process.exit(1);
    }
};
runSeeds();
