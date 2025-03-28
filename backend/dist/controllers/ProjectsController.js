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
const Projects_1 = __importDefault(require("../models/Projects")); // Import du modèle de données
// GET /api/projects
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Projects_1.default.find();
        console.log("📦 Projects fetched:", projects);
        if (projects.length === 0) {
            res.status(200).json({ message: "Project list is actually empty" });
            return;
        }
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(500).json({ message: "Error during projects research", error });
    }
});
// GET /api/projects/:id
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield Projects_1.default.findById(req.params.id);
        if (!project) {
            res.status(404).json({ message: "Project not found" });
            return;
        }
        res.status(200).json(project);
    }
    catch (error) {
        res.status(500).json({ message: "Error during project research", error });
    }
});
// POST /api/projects
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { slug, mainImage, title, loc, grade, description1, description2, tech, tags, meta, layout, } = req.body;
        // 🧪 Vérification des champs obligatoires
        if (!slug ||
            !mainImage ||
            !title ||
            !loc ||
            !grade ||
            !description1 ||
            !description2 ||
            !tech ||
            !tech.type ||
            !tech.loc ||
            !tech.sup ||
            !tech.mo ||
            !tech.inter ||
            !tech.avance ||
            !tags ||
            !Array.isArray(tags) ||
            tags.length === 0 ||
            !meta ||
            !layout ||
            !layout.images ||
            !Array.isArray(layout.images) ||
            layout.images.length === 0) {
            res.status(400).json({ message: "PLease fill every form fields and make sure to provide at least one tag and one image" });
            return;
        }
        // 🔢 Auto-incrément ID
        const lastProject = yield Projects_1.default.findOne().sort({ id: -1 });
        const newId = lastProject ? lastProject.id + 1 : 1;
        // ✅ Création du document
        const newProject = yield Projects_1.default.create({
            id: newId,
            slug,
            mainImage,
            title,
            loc,
            grade,
            description1,
            description2,
            tech,
            tags,
            meta,
            layout,
        });
        res.status(201).json(newProject);
    }
    catch (error) {
        res.status(500).json({ message: "Error during project creation", error });
    }
});
// PUT /api/projects/:id
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { slug, mainImage, title, loc, grade, description1, description2, tech, tags, meta, layout, } = req.body; // 🧪 Vérification des champs obligatoires
        const Updatedproject = yield Projects_1.default.findByIdAndUpdate(id, {
            slug,
            mainImage,
            title,
            loc,
            grade,
            description1,
            description2,
            tech,
            tags,
            meta,
            layout,
        }, { new: true, runValidators: true });
        if (!Updatedproject) {
            res.status(404).json({ message: "Project not found" });
            return;
        }
        res.status(200).json(Updatedproject);
    }
    catch (error) {
        res.status(500).json({ message: "Error during project update", error });
    }
});
//DELETE /api/projects/:id
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const project = yield Projects_1.default.findByIdAndDelete(req.params.id);
        if (!project) {
            res.status(404).json({ message: "Project not found" });
            return;
        }
        res.status(200).json({ message: "Project deleted" });
    }
    catch (error) {
        res.status(500).json({ message: "Error during project deletion", error });
    }
});
exports.default = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
};
