"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NewsController_1 = __importDefault(require("../controllers/NewsController"));
const router = (0, express_1.Router)();
router.get('/', NewsController_1.default.getAllNews);
router.get('/:id', NewsController_1.default.getNewsById);
router.post('/', NewsController_1.default.createNews);
router.put('/:id', NewsController_1.default.updateNews);
router.delete('/:id', NewsController_1.default.deleteNews);
exports.default = router;
