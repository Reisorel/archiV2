import { Router } from 'express';
import SliderRoutes from './sliderRoutes';
import NewsRoutes from './newsRoutes';
import MissionRoutes from './missionsRoutes';

const router = Router();

router.use('/sliders', SliderRoutes); // monte le sous-router pour /sliders
router.use('/news', NewsRoutes); // monte le sous-router pour /news
router.use('/missions', MissionRoutes); // monte le sous-router pour /missions

export default router;
