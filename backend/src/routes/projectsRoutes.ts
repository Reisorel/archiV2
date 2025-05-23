import {Router} from 'express';
import ProjectsController from '../controllers/ProjectsController';

const router = Router();

router.get('/', ProjectsController.getAllProjects);
router.get('/:id', ProjectsController.getProjectById);
router.post('/', ProjectsController.createProject);
router.put('/:id', ProjectsController.updateProject);
router.delete('/:id', ProjectsController.deleteProject);

export default router;
