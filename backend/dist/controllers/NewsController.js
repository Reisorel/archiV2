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
const News_1 = __importDefault(require("../models/News"));
// GET /api/news
const getAllNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const news = yield News_1.default.find();
        console.log("📦 News fetched:", news);
        if (news.length === 0) {
            res.status(200).json({ message: "News list is actually empty" });
            return;
        }
        res.status(200).json(news);
    }
    catch (error) {
        res.status(500).json({ message: "Error during news research", error });
    }
});
// GET /api/news/:id
const getNewsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const news = yield News_1.default.findById(req.params.id);
        if (!news) {
            res.status(404).json({ message: "News not found" });
            return;
        }
        res.status(200).json(news);
    }
    catch (error) {
        res.status(500).json({ message: "Error during news research", error });
    }
});
// POST /api/news
const createNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, slug, location, grade, description, image } = req.body;
        if (!title || !slug || !location || !grade || !description || !image) {
            res.status(400).json({ message: "Please fill all fields" });
            return;
        }
        // Trouve le dernier id utilisé
        const lastNews = yield News_1.default.findOne().sort({ id: -1 });
        const newId = lastNews ? lastNews.id + 1 : 1;
        // Crée avec le nouvel ID
        const newNews = yield News_1.default.create({ id: newId, slug, title, location, grade, description, image });
        res.status(201).json(newNews);
    }
    catch (error) {
        res.status(500).json({ message: "Error during news creation", error });
    }
});
// PUT /api/news/:id
const updateNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, slug, location, grade, description, image } = req.body;
        const updatedNews = yield News_1.default.findByIdAndUpdate(id, { title, slug, location, grade, description, image }, { new: true, runValidators: true });
        if (!updatedNews) {
            res.status(404).json({ message: "News not found" });
            return;
        }
        res.status(200).json(updatedNews);
    }
    catch (error) {
        res.status(500).json({ message: "Error during news update", error });
    }
});
// DELETE /api/news/:id
const deleteNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedNews = yield News_1.default.findByIdAndDelete(req.params.id);
        if (!deletedNews) {
            res.status(404).json({ message: "News not found" });
            return;
        }
        res.status(200).json({ message: "News deleted", deletedNews });
    }
    catch (error) {
        res.status(500).json({ message: "Error during news deletion", error });
    }
});
exports.default = {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews,
};
