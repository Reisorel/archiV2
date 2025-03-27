"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sliderRoutes_1 = __importDefault(require("./sliderRoutes"));
const newsRoutes_1 = __importDefault(require("./newsRoutes"));
const router = (0, express_1.Router)();
router.use('/sliders', sliderRoutes_1.default); // monte le sous-router pour /sliders
router.use('/news', newsRoutes_1.default); // monte le sous-router pour /news
exports.default = router;
