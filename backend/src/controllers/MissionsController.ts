import { Request, Response } from "express";
import Missions from "../models/Missions";

// GET /api/missions
const getAllMission = async (req: Request, res: Response): Promise<void> => {
  try {
    const missions = await Missions.find();
    console.log("📦 Missions fetched:", missions);

    if (missions.length === 0) {
      res.status(200).json({ message: "Missions list is actually empty" });
      return;
    }

    res.status(200).json(missions);
  } catch (error: any) {
    res.status(500).json({ message: "Error during missions research", error });
  }
};

// GET /api/missions/:id
const getMissionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const mission = await Missions.findById(req.params.id);
    if (!mission) {
      res.status(404).json({ message: "Mission not found" });
      return;
    }

    res.status(200).json(mission);
  } catch (error: any) {
    res.status(500).json({ message: "Error during mission research", error });
  }
};

// POST /api/missions
const createMission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { image, description } = req.body;

    if (!image || !description) {
      res.status(400).json({ message: "Please fill all fields" });
      return;
    }

    //Trouver le dernier id utilisé
    const lastMission = await Missions.findOne().sort({ id: -1 });
    const newId = lastMission ? lastMission.id + 1 : 1;

    // Créer avec le nouvel ID
    const newMission = await Missions.create({ id: newId, image, description });

    res.status(201).json(newMission);
  } catch (error: any) {
    res.status(500).json({ message: "Error during mission creation", error });
  }
};

// PUT /api/missions/:id
const updateMission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { image, description } = req.body;

    if (!image || !description) {
      res.status(400).json({ message: "Please fill all fields" });
      return;
    }

    const mission = await Missions.findByIdAndUpdate(
      req.params.id,
      { image, description },
      { new: true }
    );

    if (!mission) {
      res.status(404).json({ message: "Mission not found" });
      return;
    }

    res.status(200).json(mission);
  } catch (error: any) {
    res.status(500).json({ message: "Error during mission update", error });
  }
};

// DELETE /api/missions/:id
const deleteMission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const mission = await Missions.findByIdAndDelete(req.params.id);
    if (!mission) {
      res.status(404).json({ message: "Mission not found" });
      return;
    }

    res.status(200).json({ message: "Mission deleted" });
  } catch (error: any) {
    res.status(500).json({ message: "Error during mission deletion", error });
  }
};

export default {
  getAllMission,
  getMissionById,
  createMission,
  updateMission,
  deleteMission,
};
