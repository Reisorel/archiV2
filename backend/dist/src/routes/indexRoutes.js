"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sliderRoutes_1 = __importDefault(require("./sliderRoutes"));
const newsRoutes_1 = __importDefault(require("./newsRoutes"));
const missionsRoutes_1 = __importDefault(require("./missionsRoutes"));
const projectsRoutes_1 = __importDefault(require("./projectsRoutes"));
const debugRoutes_1 = __importDefault(require("./debugRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const router = (0, express_1.Router)();
console.log('[LOG] Chargement des routes principales');
router.use('/sliders', (req, res, next) => {
    console.log('[LOG] Route /sliders appelée');
    next();
}, sliderRoutes_1.default);
router.use('/news', (req, res, next) => {
    console.log('[LOG] Route /news appelée');
    next();
}, newsRoutes_1.default);
router.use('/missions', (req, res, next) => {
    console.log('[LOG] Route /missions appelée');
    next();
}, missionsRoutes_1.default);
router.use('/projects', (req, res, next) => {
    console.log('[LOG] Route /projects appelée');
    next();
}, projectsRoutes_1.default);
router.use('/debug', (req, res, next) => {
    console.log('[LOG] Route /debug appelée');
    next();
}, debugRoutes_1.default);
router.use('/auth', (req, res, next) => {
    console.log('[LOG] Route /auth appelée');
    next();
}, authRoutes_1.default);
router.use('/users', (req, res, next) => {
    console.log('[LOG] Route /users appelée');
    next();
}, userRoutes_1.default);
console.log('[LOG] Toutes les routes principales ont été montées');
exports.default = router;
