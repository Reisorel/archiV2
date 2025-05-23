"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Slider_model_1 = __importDefault(require("../models/Slider.model"));
// GET /api/sliders
const getAllSliders = async (req, res) => {
    try {
        const sliders = await Slider_model_1.default.find();
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
};
// GET /api/sliders/:id
const getSliderById = async (req, res) => {
    try {
        const slider = await Slider_model_1.default.findById(req.params.id);
        if (!slider) {
            res.status(404).json({ message: 'Slider not found' });
            return;
        }
        res.status(200).json(slider);
    }
    catch (error) {
        res.status(500).json({ message: 'Error during slider research', error });
    }
};
// POST /api/sliders
const createSlider = async (req, res) => {
    try {
        const { image, title, description } = req.body;
        if (!image || !title || !description) {
            res.status(400).json({ message: 'Please fill all fields' });
            return;
        }
        // Trouve le dernier id utilisé
        const lastSlider = await Slider_model_1.default.findOne().sort({ id: -1 });
        const newId = lastSlider ? lastSlider.id + 1 : 1;
        // Crée avec le nouvel ID
        const newSlider = await Slider_model_1.default.create({ id: newId, image, title, description });
        res.status(201).json(newSlider);
    }
    catch (error) {
        res.status(500).json({ message: 'Error during slider creation', error });
    }
};
// PUT /api/sliders/:id
const updateSlider = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, title, description } = req.body;
        const updatedSlider = await Slider_model_1.default.findByIdAndUpdate(id, { image, title, description }, { new: true, runValidators: true });
        if (!updatedSlider) {
            res.status(404).json({ message: 'Slider not found' });
            return;
        }
        res.status(200).json(updatedSlider);
    }
    catch (error) {
        res.status(500).json({ message: 'Error during slider update', error });
    }
};
// DELETE /api/sliders/:id
const deleteSlider = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSlider = await Slider_model_1.default.findByIdAndDelete(id);
        if (!deletedSlider) {
            res.status(404).json({ message: 'Slider not found' });
            return;
        }
        res.status(200).json({ message: 'Slider deleted successfully', deletedSlider });
    }
    catch (error) {
        res.status(500).json({ message: 'Error during slider deletion', error });
    }
};
exports.default = {
    getAllSliders,
    getSliderById,
    createSlider,
    updateSlider,
    deleteSlider,
};
