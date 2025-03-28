import mongoose, {Schema, Document} from 'mongoose';

// 1️⃣ Déclaration de l'interface TypeScript
// convention "I" pour les interfaces
// Séparation en 3 interfaces : IImageLayout, ITechInfo et IProject
interface IImageLayout {
  src: string;
  alt: string;
  gridColumn: string;
  gridRow: string;
}

interface ITechInfo {
  type: string;
  techLoc: string;
  sup: string;
  mo: string;
  inter: string;
  avance: string;
}

interface IProject extends Document {
  id: number;
  slug: string;
  mainImage: string; // image principale
  title: string;
  loc: string;
  grade: string;
  description1: string;
  description2: string;
  tech: ITechInfo; // ← propre et clair ici
  tags: string[];
  meta: string;
  layout: {
    images: IImageLayout[];
  };
}

// 2️⃣ Schéma avec typage explicite
const projectSchema: Schema<IProject> = new Schema(
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
    loc: {
      type: String,
      required: true,
      trim: true,
    },
    grade: {
      type: String,
      required: true, // ← obligatoire
      trim: true,
    },
    description1: { // ← description1 et description2
      type: String,
      required: true,
      trim: true,
    },
    description2: {
      type: String,
      required: true,
      trim: true,
    },
    tech: {
      type: {
        type: String,
        required: true,
      },
      techLoc: {
        type: String,
        required: true,
      },
      sup: {
        type: String,
        required: true,
      },
      mo: {
        type: String,
        required: true,
      },
      inter: {
        type: String,
        required: true,
      },
      avance: {
        type: String,
        required: true,
      },
    },
    tags: {
      type: [String],
      required: true,
    },
    meta: {
      type: String,
      required: true,
      trim: true,
    },
    layout: {
      images: [
        {
          src: {
            type: String,
            required: true,
          },
          alt: {
            type: String,
            required: true,
          },
          gridColumn: {
            type: String,
            required: true,
          },
          gridRow: {
            type: String,
            required: true,
          },
        },
      ],
    }
  },
  {
    timestamps: true, // createdAt et updatedAt
  }
)


// 3️⃣ Export du modèle
const Project = mongoose.model<IProject>("Project", projectSchema);
export default Project;
