import { Router } from 'express';
import SliderRoutes from './sliderRoutes'; // avec un s minuscule si ton fichier s'appelle bien sliderRoutes.ts

const router = Router();

router.use('/sliders', SliderRoutes); // monte le sous-router

export default router;
