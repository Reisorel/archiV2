import { Router } from 'express';
import MissionController from '../controllers/MissionsController';

const router = Router();

router.get('/', MissionController.getAllMission);
router.get('/:id', MissionController.getMissionById);
router.post('/', MissionController.createMission);
router.put('/:id', MissionController.updateMission);
router.delete('/:id', MissionController.deleteMission);

export default router;
