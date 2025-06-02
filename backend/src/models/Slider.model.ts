import mongoose, { Schema, Document } from 'mongoose';

// Déclaration de l'interface TypeScript
export interface ISlider extends Document {
  id: number;
  image: string;
  title: string;
  description: string;
}

// Schéma avec typage explicite
const sliderSchema: Schema<ISlider> = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // createdAt et updatedAt
  }
);

// Export du modèle
const Slider = mongoose.model<ISlider>('Slider', sliderSchema);
export default Slider;
