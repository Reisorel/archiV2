// Gère la xonneciotn à la base de données MongoDB
import mongoose from 'mongoose';
import { ENV } from './env.config'; // ✅ Correct

// Configuration mongoose
mongoose.set('strictQuery', true);

// Fonction de connexion à la base de données
const connectDB = async (): Promise<void> => {
  const uri = ENV.NODE_ENV === 'production' ? ENV.MONGO_URI_PROD : ENV.MONGO_URI_DEV;

  try {
    await mongoose.connect(uri);
    console.log(`✅ MongoDB connected in ${ENV.NODE_ENV} mode`);
    console.log(`📦 Using URI: ${uri.includes('mongodb+srv') ? 'MongoDB Atlas (cloud)' : 'Localhost (127.0.0.1)'}`);
  } catch (error: any) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
