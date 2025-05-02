"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router();
router.get('/infos', (req, res) => {
    const nodeEnv = process.env.NODE_ENV;
    const uri = nodeEnv === 'production' ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV;
    const dbName = mongoose_1.default.connection.name;
    const now = new Date().toISOString();
    const isConnected = mongoose_1.default.connection.readyState === 1;
    res.json({
        env: nodeEnv,
        mongoUri: uri?.includes('mongodb+srv') ? 'MongoDB Atlas (cloud)' : 'Localhost',
        dbName,
        mongoConnected: isConnected,
        serverTime: now
    });
});
exports.default = router;
