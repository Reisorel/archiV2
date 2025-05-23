import { Router } from 'express';
import * as authController from '../controllers/AuthController';

const router = Router();

// Route de debug pour vérifier si le routeur est chargé
router.get('/debug', (req, res) => {
  console.log('[DEBUG] Route /auth/debug appelée');
  res.json({ message: 'Route de debug pour authRoutes fonctionne correctement' });
});

// Route pour l'inscription
router.post('/register', (req, res, next) => {
  console.log('[DEBUG] Route /auth/register appelée');
  next();
}, authController.register);

// Route pour la connexion
router.post('/login', (req, res, next) => {
  console.log('[DEBUG] Route /auth/login appelée');
  next();
}, authController.login);

export default router;
