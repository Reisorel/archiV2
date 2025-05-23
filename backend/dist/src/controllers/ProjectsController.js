"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Projects_1 = __importDefault(require("../models/Projects")); // Import du modèle de données
// GET /api/projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await Projects_1.default.find();
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
};
// GET /api/projects/:id
const getProjectById = async (req, res) => {
    try {
        const project = await Projects_1.default.findById(req.params.id);
        if (!project) {
            res.status(404).json({ message: "Project not found" });
            return;
        }
        res.status(200).json(project);
    }
    catch (error) {
        res.status(500).json({ message: "Error during project research", error });
    }
};
// POST /api/projects
const createProject = async (req, res) => {
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
            !tech.techLoc ||
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
            res
                .status(400)
                .json({
                message: "PLease fill every form fields and make sure to provide at least one tag and one image",
            });
            return;
        }
        // 🔢 Auto-incrément ID
        const lastProject = await Projects_1.default.findOne().sort({ id: -1 });
        const newId = lastProject ? lastProject.id + 1 : 1;
        // ✅ Création du document
        const newProject = await Projects_1.default.create({
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
};
// PUT /api/projects/:id
const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        // 🔍 Refus d'un body vide
        if (Object.keys(req.body).length === 0) {
            res.status(400).json({ message: "Le body est vide. Fournis au moins un champ à mettre à jour." });
            return;
        }
        // 🧪 Vérification : tous les champs envoyés doivent être valides
        for (const [key, value] of Object.entries(req.body)) {
            const isEmpty = value === undefined ||
                value === null ||
                (typeof value === "string" && value.trim() === "") ||
                (Array.isArray(value) && value.length === 0);
            if (isEmpty) {
                res.status(400).json({ message: `Le champ '${key}' ne peut pas être vide.` });
                return;
            }
            // Validation spécifique pour "tech"
            if (key === "tech" && typeof value === "object" && value !== null) {
                const { type, techLoc, sup, mo, inter, avance } = value;
                if (!type || !techLoc || !sup || !mo || !inter || !avance) {
                    res.status(400).json({ message: "Tous les champs de 'tech' doivent être remplis." });
                    return;
                }
            }
            // Validation spécifique pour "layout"
            if (key === "layout" && typeof value === "object" && value !== null) {
                const layout = value;
                if (!layout.images || !Array.isArray(layout.images) || layout.images.length === 0) {
                    res.status(400).json({ message: "Le champ 'layout.images' doit contenir au moins une image." });
                    return;
                }
            }
        }
        // ✅ Mise à jour partielle uniquement des champs fournis
        const updatedProject = await Projects_1.default.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true });
        if (!updatedProject) {
            res.status(404).json({ message: "Projet introuvable" });
            return;
        }
        res.status(200).json({
            message: `Projet '${updatedProject.title}' mis à jour avec succès.`,
            updatedProject
        });
    }
    catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour du projet", error });
    }
};
//DELETE /api/projects/:id
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Projects_1.default.findByIdAndDelete(req.params.id);
        if (!project) {
            res.status(404).json({ message: "Project not found" });
            return;
        }
        res
            .status(200)
            .json({
            message: `Project "${project.title}" (id: ${project._id}) deleted successfully`,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error during project deletion", error });
    }
};
exports.default = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
};
