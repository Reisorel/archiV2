"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sliderRoutes_1 = __importDefault(require("./sliderRoutes")); // avec un s minuscule si ton fichier s'appelle bien sliderRoutes.ts
const router = (0, express_1.Router)();
router.use('/sliders', sliderRoutes_1.default); // monte le sous-router
exports.default = router;
