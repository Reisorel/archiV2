import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db';
import adminRoutes from './routes/indexRoutes';

dotenv.config(); // Charge .env

const app: Express = express(); // Crée une application Express
connectDB(); // Connexion à MongoDB

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ⬇️ Route API admin centralisée ici
app.use('/api/admin', adminRoutes);

// ⬇️ Sert le frontend compilé (Vite/React)
app.use(express.static(path.resolve(__dirname, "../../frontend/dist")));

// ⬇️ Catch-all route frontend
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../../frontend/dist", "index.html"));
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
