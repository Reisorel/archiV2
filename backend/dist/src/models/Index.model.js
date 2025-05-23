"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Slider = exports.Projects = exports.News = exports.Missions = void 0;
// Export par défaut des modèles
var Missions_model_1 = require("./Missions.model");
Object.defineProperty(exports, "Missions", { enumerable: true, get: function () { return __importDefault(Missions_model_1).default; } });
var News_model_1 = require("./News.model");
Object.defineProperty(exports, "News", { enumerable: true, get: function () { return __importDefault(News_model_1).default; } });
var Projects_model_1 = require("./Projects.model");
Object.defineProperty(exports, "Projects", { enumerable: true, get: function () { return __importDefault(Projects_model_1).default; } });
var Slider_model_1 = require("./Slider.model");
Object.defineProperty(exports, "Slider", { enumerable: true, get: function () { return __importDefault(Slider_model_1).default; } });
var User_model_1 = require("./User.model");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return __importDefault(User_model_1).default; } });
