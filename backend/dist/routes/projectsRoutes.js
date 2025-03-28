"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectsController_1 = __importDefault(require("../controllers/ProjectsController"));
const router = (0, express_1.Router)();
router.get('/', ProjectsController_1.default.getAllProjects);
router.get('/:id', ProjectsController_1.default.getProjectById);
router.post('/', ProjectsController_1.default.createProject);
router.put('/:id', ProjectsController_1.default.updateProject);
router.delete('/:id', ProjectsController_1.default.deleteProject);
exports.default = router;
