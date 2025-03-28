import { Request, Response } from "express"; // Fonctionnalité TS qui permet de typer les paramètres de la fonction
import ProjectModel from "../models/Projects"; // Import du modèle de données

// GET /api/projects
const getAllProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await ProjectModel.find();
    console.log("📦 Projects fetched:", projects);

    if (projects.length === 0) {
      res.status(200).json({ message: "Project list is actually empty" });
      return;
    }

    res.status(200).json(projects);
  } catch (error: any) {
    res.status(500).json({ message: "Error during projects research", error });
  }
};

// GET /api/projects/:id
const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await ProjectModel.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
      return;
    }

    res.status(200).json(project);
  } catch (error: any) {
    res.status(500).json({ message: "Error during project research", error });
  }
}
  // POST /api/projects
  const createProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
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
      } = req.body;

      // 🧪 Vérification des champs obligatoires
      if (
        !slug ||
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
        layout.images.length === 0
      ) {
        res.status(400).json({ message: "PLease fill every form fields and make sure to provide at least one tag and one image"});
        return;
      }

      // 🔢 Auto-incrément ID
      const lastProject = await ProjectModel.findOne().sort({ id: -1 });
      const newId = lastProject ? lastProject.id + 1 : 1;

      // ✅ Création du document
      const newProject = await ProjectModel.create({
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
    } catch (error: any) {
      res.status(500).json({ message: "Error during project creation", error });
    }
  };

// PUT /api/projects/:id
const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const {
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
    } = req.body; // 🧪 Vérification des champs obligatoires

    const Updatedproject = await ProjectModel.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true, runValidators: true }
    );

    if (!Updatedproject) {
      res.status(404).json({ message: "Project not found" });
      return;
    }

    res.status(200).json(Updatedproject);
  } catch (error: any) {
    res.status(500).json({ message: "Error during project update", error });
  }
};

//DELETE /api/projects/:id
const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findByIdAndDelete(req.params.id);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
      return;
    }

    res.status(200).json({ message: "Project deleted" });
  } catch (error: any) {
    res.status(500).json({ message: "Error during project deletion", error });
  }
}

export default {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
}
