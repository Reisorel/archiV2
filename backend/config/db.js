// backend/config.js/db.js

const mongoose = require ('mongoose')

const connectDB = async () => {

  const uri =
    process.env.NODE_ENV === 'production'
      ? process.env.MONGO_URI_PROD
      : process.env.MONGO_URI_DEV;

  try {
    await mongoose.connect(uri);
    console.log(`✅ MongoDB connection success for ${process.env.NODE_ENV}`);
  } catch (error) {
    console.error('❌ MongoDB connection failure', error.message);
    process.exit(1); // Quitte le serveur en cas d'échec
  }
};

module.exports = connectDB;
