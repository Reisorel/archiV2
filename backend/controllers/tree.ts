import mongooosese, { Schema, Document } from 'mongoose';

// Interface TypeScript
export interface ITree extends Document {
  name: string;
  species: string;
  age: number;
  height: number;
  location: string;
  plantedDate: Date;
  lastPrunedDate: Date;
  healthStatus: string;
  notes: string;
  imageUrl: string;
}

// Schéma de l'arbre
const treeSchema: Schema = new Schema<ITree>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  location: { type: String, required: true },
  plantedDate: { type: Date, required: true },
  lastPrunedDate: { type: Date, required: true },
  healthStatus: { type: String, required: true },
  notes: { type: String, required: false },
  imageUrl: { type: String, required: false }
});

// Modèle de l'arbre
const Tree = mongooosese.model<ITree>('Tree', treeSchema);
// Exportation du modèle
export default Tree;
