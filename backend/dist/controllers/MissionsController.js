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
const Missions_1 = __importDefault(require("../models/Missions"));
// GET /api/missions
const getAllMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const missions = yield Missions_1.default.find();
        console.log("📦 Missions fetched:", missions);
        if (missions.length === 0) {
            res.status(200).json({ message: "Missions list is actually empty" });
            return;
        }
        res.status(200).json(missions);
    }
    catch (error) {
        res.status(500).json({ message: "Error during missions research", error });
    }
});
// GET /api/missions/:id
const getMissionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mission = yield Missions_1.default.findById(req.params.id);
        if (!mission) {
            res.status(404).json({ message: "Mission not found" });
            return;
        }
        res.status(200).json(mission);
    }
    catch (error) {
        res.status(500).json({ message: "Error during mission research", error });
    }
});
// POST /api/missions
const createMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image, description } = req.body;
        if (!image || !description) {
            res.status(400).json({ message: "Please fill all fields" });
            return;
        }
        //Trouver le dernier id utilisé
        const lastMission = yield Missions_1.default.findOne().sort({ id: -1 });
        const newId = lastMission ? lastMission.id + 1 : 1;
        // Créer avec le nouvel ID
        const newMission = yield Missions_1.default.create({ id: newId, image, description });
        res.status(201).json(newMission);
    }
    catch (error) {
        res.status(500).json({ message: "Error during mission creation", error });
    }
});
// PUT /api/missions/:id
const updateMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { image, description } = req.body;
        if (!image || !description) {
            res.status(400).json({ message: "Please fill all fields" });
            return;
        }
        const mission = yield Missions_1.default.findByIdAndUpdate(req.params.id, { image, description }, { new: true });
        if (!mission) {
            res.status(404).json({ message: "Mission not found" });
            return;
        }
        res.status(200).json(mission);
    }
    catch (error) {
        res.status(500).json({ message: "Error during mission update", error });
    }
});
// DELETE /api/missions/:id
const deleteMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const mission = yield Missions_1.default.findByIdAndDelete(req.params.id);
        if (!mission) {
            res.status(404).json({ message: "Mission not found" });
            return;
        }
        res.status(200).json({ message: "Mission deleted" });
    }
    catch (error) {
        res.status(500).json({ message: "Error during mission deletion", error });
    }
});
exports.default = {
    getAllMission,
    getMissionById,
    createMission,
    updateMission,
    deleteMission,
};
