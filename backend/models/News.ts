import mongoose, { Schema, Document } from "mongoose";

// 1️⃣ Déclaration de l'interface TypeScript
// convention "I" pour les interfaces
export interface INews extends Document {
  id: number;
  slug: string;
  title: string;
  location: string;
  grade: string;
  description: string;
  image: string;
}

// 2️⃣ Schéma avec typage explicite
const newsSchema: Schema<INews> = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    grade: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // createdAt et updatedAt
  }
);

// 3️⃣ Export du modèle
const News = mongoose.model<INews>("News", newsSchema);
export default News;
