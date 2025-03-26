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
const Slider_1 = __importDefault(require("../models/Slider"));
// GET /api/sliders
const getAllSliders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sliders = yield Slider_1.default.find();
        console.log("📦 Sliders fetched:", sliders);
        if (sliders.length === 0) {
            res.status(200).json({ message: 'Slider list is actually empty' });
            return;
        }
        res.status(200).json(sliders);
    }
    catch (error) {
        res.status(500).json({ message: 'Error during sliders research', error });
    }
});
// GET /api/sliders/:id
const getSliderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const slider = yield Slider_1.default.findById(req.params.id);
        if (!slider) {
            res.status(404).json({ message: 'Slider not found' });
            return;
        }
        res.status(200).json(slider);
    }
    catch (error) {
        res.status(500).json({ message: 'Error during slider research', error });
    }
});
// POST /api/sliders
const createSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image, title, description } = req.body;
        if (!image || !title || !description) {
            res.status(400).json({ message: 'Please fill all fields' });
            return;
        }
        const newSlider = yield Slider_1.default.create({ image, title, description });
        res.status(201).json(newSlider);
    }
    catch (error) {
        res.status(500).json({ message: 'Error during slider creation', error });
    }
});
// PUT /api/sliders/:id
const updateSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { image, title, description } = req.body;
        const updatedSlider = yield Slider_1.default.findByIdAndUpdate(id, { image, title, description }, { new: true, runValidators: true });
        if (!updatedSlider) {
            res.status(404).json({ message: 'Slider not found' });
            return;
        }
        res.status(200).json(updatedSlider);
    }
    catch (error) {
        res.status(500).json({ message: 'Error during slider update', error });
    }
});
// DELETE /api/sliders/:id
const deleteSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedSlider = yield Slider_1.default.findByIdAndDelete(id);
        if (!deletedSlider) {
            res.status(404).json({ message: 'Slider not found' });
            return;
        }
        res.status(200).json({ message: 'Slider deleted successfully', deletedSlider });
    }
    catch (error) {
        res.status(500).json({ message: 'Error during slider deletion', error });
    }
});
exports.default = {
    getAllSliders,
    getSliderById,
    createSlider,
    updateSlider,
    deleteSlider,
};
