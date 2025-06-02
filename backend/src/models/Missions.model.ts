import mongoose, { Schema, Document } from "mongoose";

// Déclaration de l'interface TypeScript
// convention "I" pour les interfaces
export interface IMissions extends Document {
  id: number;
  image: string;
  description: string;
}

// Schéma avec typage explicite
const missionsSchema: Schema<IMissions> = new Schema(
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
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // createdAt et updatedAt}
  }
);

// Export du modèle
const News = mongoose.model<IMissions>("Mission", missionsSchema);
export default News;
