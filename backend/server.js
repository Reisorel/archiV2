const express = require("express");
const cors = require("cors"); // Assurez-vous d'importer cors
const bodyParser = require("body-parser"); // Assurez-vous d'importer body-parser
const path = require("path"); // Assurez-vous d'importer path

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Définit le dossier contenant les fichiers compilés du frontend à servir comme fichiers statiques
app.use(express.static(path.join(__dirname, "../Frontend/dist")));

// Route principale pour servir l'application frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist", "index.html"));
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
