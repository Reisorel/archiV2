// Configure l'application Express
import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import adminRoutes from './routes/indexRoutes';

const app: Express = express(); // Crée une application Express

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Route API admin centralisée ici
app.use('/api/admin', adminRoutes);

// Sert le frontend compilé (Vite/React)
app.use(express.static(path.resolve(__dirname, "../../frontend/dist")));

// Catch-all route frontend
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../frontend/dist", "index.html"));
});

export default app;
