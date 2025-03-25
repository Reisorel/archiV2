const express = require("express");
const cors = require("cors"); // Assurez-vous d'importer cors
const bodyParser = require("body-parser"); // Assurez-vous d'importer body-parser
const path = require("path"); // Assurez-vous d'importer path
const app = express();
require("dotenv").config(); // charge le .env
const connectDB = require("./config/db");
connectDB(); // connecte MongoDB

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Définit le dossier contenant les fichiers compilés du frontend à servir comme fichiers statiques
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Route principale pour servir l'application frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
