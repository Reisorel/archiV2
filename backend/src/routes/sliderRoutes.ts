import { Router } from 'express';
import SliderController from '../controllers/SliderController';

const router = Router();

router.get('/', SliderController.getAllSliders);
router.get('/:id', SliderController.getSliderById);
router.post('/', SliderController.createSlider);
router.put('/:id', SliderController.updateSlider);
router.delete('/:id', SliderController.deleteSlider);

export default router;
