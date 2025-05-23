import { Router } from 'express';
import SliderRoutes from './sliderRoutes';
import NewsRoutes from './newsRoutes';
import MissionRoutes from './missionsRoutes';
import ProjectRoutes from './projectsRoutes';
import debugRoutes from './debugRoutes';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';

const router = Router();

console.log('[LOG] Chargement des routes principales');

router.use('/sliders', (req, res, next) => {
  console.log('[LOG] Route /sliders appelée');
  next();
}, SliderRoutes);

router.use('/news', (req, res, next) => {
  console.log('[LOG] Route /news appelée');
  next();
}, NewsRoutes);

router.use('/missions', (req, res, next) => {
  console.log('[LOG] Route /missions appelée');
  next();
}, MissionRoutes);

router.use('/projects', (req, res, next) => {
  console.log('[LOG] Route /projects appelée');
  next();
}, ProjectRoutes);

router.use('/debug', (req, res, next) => {
  console.log('[LOG] Route /debug appelée');
  next();
}, debugRoutes);

router.use('/auth', (req, res, next) => {
  console.log('[LOG] Route /auth appelée');
  next();
}, authRoutes);

router.use('/users', (req, res, next) => {
  console.log('[LOG] Route /users appelée');
  next();
}, userRoutes);

console.log('[LOG] Toutes les routes principales ont été montées');

export default router;
