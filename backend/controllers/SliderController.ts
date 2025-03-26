import { Request, Response } from 'express';
import Slider from '../models/Slider';

// GET /api/sliders
const getAllSliders = async (req: Request, res: Response): Promise<void> => {
  try {
    const sliders = await Slider.find();
    console.log("📦 Sliders fetched:", sliders);


    if (sliders.length === 0) {
      res.status(200).json({ message: 'Slider list is actually empty' });
      return;
    }

    res.status(200).json(sliders);
  } catch (error: any) {
    res.status(500).json({ message: 'Error during sliders research', error });
  }
};

// GET /api/sliders/:id
const getSliderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) {
      res.status(404).json({ message: 'Slider not found' });
      return;
    }

    res.status(200).json(slider);
  } catch (error: any) {
    res.status(500).json({ message: 'Error during slider research', error });
  }
};

// POST /api/sliders
const createSlider = async (req: Request, res: Response): Promise<void> => {
  try {
    const { image, title, description } = req.body;

    if (!image || !title || !description) {
      res.status(400).json({ message: 'Please fill all fields' });
      return;
    }

    const newSlider = await Slider.create({ image, title, description });
    res.status(201).json(newSlider);
  } catch (error: any) {
    res.status(500).json({ message: 'Error during slider creation', error });
  }
};

// PUT /api/sliders/:id
const updateSlider = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { image, title, description } = req.body;

    const updatedSlider = await Slider.findByIdAndUpdate(
      id,
      { image, title, description },
      { new: true, runValidators: true }
    );

    if (!updatedSlider) {
      res.status(404).json({ message: 'Slider not found' });
      return;
    }

    res.status(200).json(updatedSlider);
  } catch (error: any) {
    res.status(500).json({ message: 'Error during slider update', error });
  }
};

// DELETE /api/sliders/:id
const deleteSlider = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedSlider = await Slider.findByIdAndDelete(id);
    if (!deletedSlider) {
      res.status(404).json({ message: 'Slider not found' });
      return;
    }

    res.status(200).json({ message: 'Slider deleted successfully', deletedSlider });
  } catch (error: any) {
    res.status(500).json({ message: 'Error during slider deletion', error });
  }
};

export default {
  getAllSliders,
  getSliderById,
  createSlider,
  updateSlider,
  deleteSlider,
};
