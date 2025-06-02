"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Configure l'application Express
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const error_middleware_1 = require("./middlewares/error.middleware");
const app = (0, express_1.default)(); // Crée une application Express
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// Route API admin centralisée ici
app.use('/api', indexRoutes_1.default);
// Route racine de l'API
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API archi V2 🏄🏻‍♂️' });
});
// // Sert le frontend compilé (Vite/React)
// app.use(express.static(path.resolve(__dirname, "../../frontend/dist")));
// // Catch-all route frontend
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../../frontend/dist", "index.html"));
// });
// Middleware 404 et gestion d'erreurs
app.use(error_middleware_1.notFoundHandler);
app.use(error_middleware_1.errorHandler);
exports.default = app;
