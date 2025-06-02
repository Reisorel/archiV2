import mongoose, { Schema, Document } from 'mongoose';


// Déclaration de l'interface TypeScript
// convention "I" pour les interfaces
export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  passwordHash: string;
  role: 'admin' | 'client';
  createdAt: Date;
  updatedAt: Date;
}

// Schéma avec typage explicite
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Le nom est requis'],
      trim: true
    },
    email: {
      type: String,
      required: [true, "L'email est requis"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Format email invalide']
    },
    passwordHash: {
      type: String,
      required: [true, 'Le mot de passe est requis']
    },
    role: {
      type: String,
      enum: ['admin', 'client'],
      default: 'client'
    }
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', userSchema);
export default User;
