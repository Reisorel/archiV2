import mongoose from 'mongoose';

// Connexion à la base de données MongoDB
// Typage : fonction async qui ne retourne rien (Promise<void>)
const connectDB = async (): Promise<void> => {
  const uri =
    process.env.NODE_ENV === 'production'
      ? process.env.MONGO_URI_PROD
      : process.env.MONGO_URI_DEV;

  if (!uri) {
    console.error('❌ MongoDB URI not found in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log(`✅ MongoDB connection successful for ${process.env.NODE_ENV}`);
  } catch (error: any) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
