import { Router } from 'express';
import SliderRoutes from './sliderRoutes';
import NewsRoutes from './newsRoutes';
import MissionRoutes from './missionsRoutes';
import ProjectRoutes from './projectsRoutes';
import debugRoutes from './debugRoutes';

const router = Router();

router.use('/sliders', SliderRoutes); // monte le sous-router pour /sliders
router.use('/news', NewsRoutes); // monte le sous-router pour /news
router.use('/missions', MissionRoutes); // monte le sous-router pour /missions
router.use('/projects', ProjectRoutes); // monte le sous-router pour /projects

router.use('/debug', debugRoutes); // 👈 accessible à /api/debug/infos


export default router;
