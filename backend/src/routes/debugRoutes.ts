import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/infos', (req, res) => {
  const nodeEnv = process.env.NODE_ENV;
  const uri = nodeEnv === 'production' ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV;

  const dbName = mongoose.connection.name;
  const now = new Date().toISOString();
  const isConnected = mongoose.connection.readyState === 1;

  res.json({
    env: nodeEnv,
    mongoUri: uri?.includes('mongodb+srv') ? 'MongoDB Atlas (cloud)' : 'Localhost',
    dbName,
    mongoConnected: isConnected,
    serverTime: now
  });
});

export default router;
