import { Router } from 'express';
import SliderRoutes from './sliderRoutes';
import NewsRoutes from './newsRoutes';

const router = Router();

router.use('/sliders', SliderRoutes); // monte le sous-router pour /sliders
router.use('/news', NewsRoutes); // monte le sous-router pour /news

export default router;
