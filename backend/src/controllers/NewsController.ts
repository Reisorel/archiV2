import { Request, Response } from "express"; // Fonctionnalité TS qui permet de typer les paramètres de la fonction
import News from "../models/News.model";

// GET /api/news
const getAllNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const news = await News.find();
    console.log("📦 News fetched:", news);

    if (news.length === 0) {
      res.status(200).json({ message: "News list is actually empty" });
      return;
    }

    res.status(200).json(news);
  } catch (error: any) {
    res.status(500).json({ message: "Error during news research", error });
  }
};

// GET /api/news/:id
const getNewsById = async (req: Request, res: Response): Promise<void> => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      res.status(404).json({ message: "News not found" });
      return;
    }

    res.status(200).json(news);
  } catch (error: any) {
    res.status(500).json({ message: "Error during news research", error });
  }
};

// POST /api/news
const createNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, slug, location, grade, description, image } = req.body;

    if (!title || !slug || !location || !grade || !description || !
      image) {
      res.status(400).json({ message: "Please fill all fields" });
      return;
    }

    // Trouve le dernier id utilisé
    const lastNews = await News.findOne().sort({ id: -1 });
    const newId = lastNews ? lastNews.id + 1 : 1;

    // Crée avec le nouvel ID
    const newNews = await News.create({ id: newId, slug, title, location, grade, description, image });

    res.status(201).json(newNews);
  } catch (error: any) {
    res.status(500).json({ message: "Error during news creation", error });
  }
};

// PUT /api/news/:id
const updateNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, slug, location, grade, description, image } = req.body;

    const updatedNews = await News.findByIdAndUpdate(
      id,
      { title, slug, location, grade, description, image },
      { new: true, runValidators: true }
    );

    if (!updatedNews) {
      res.status(404).json({ message: "News not found" });
      return;
    }

    res.status(200).json(updatedNews);
  } catch (error: any) {
    res.status(500).json({ message: "Error during news update", error });
  }
};

// DELETE /api/news/:id
const deleteNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    if (!deletedNews) {
      res.status(404).json({ message: "News not found" });
      return;
    }

    res.status(200).json({ message: "News deleted", deletedNews });
  } catch (error: any) {
    res.status(500).json({ message: "Error during news deletion", error });
  }
};

export default {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
};
