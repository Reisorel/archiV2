// Configure l'application Express
import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes/indexRoutes';
import { notFoundHandler, errorHandler } from './middlewares/error.middleware';

const app: Express = express(); // Crée une application Express

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Route API admin centralisée ici
app.use('/api', routes);

// Route racine de l'API
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API archi V2 🏄🏻‍♂️' });
});


// Middleware 404 et gestion d'erreurs
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
