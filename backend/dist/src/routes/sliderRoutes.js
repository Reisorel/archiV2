"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SliderController_1 = __importDefault(require("../controllers/SliderController"));
const router = (0, express_1.Router)();
router.get('/', SliderController_1.default.getAllSliders);
router.get('/:id', SliderController_1.default.getSliderById);
router.post('/', SliderController_1.default.createSlider);
router.put('/:id', SliderController_1.default.updateSlider);
router.delete('/:id', SliderController_1.default.deleteSlider);
exports.default = router;
