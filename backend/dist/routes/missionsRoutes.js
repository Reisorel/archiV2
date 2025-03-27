"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MissionsController_1 = __importDefault(require("../controllers/MissionsController"));
const router = (0, express_1.Router)();
router.get('/', MissionsController_1.default.getAllMission);
router.get('/:id', MissionsController_1.default.getMissionById);
router.post('/', MissionsController_1.default.createMission);
router.put('/:id', MissionsController_1.default.updateMission);
router.delete('/:id', MissionsController_1.default.deleteMission);
exports.default = router;
