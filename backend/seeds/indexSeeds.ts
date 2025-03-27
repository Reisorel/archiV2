// backend/seeds/index.ts
import dotenv from 'dotenv';
dotenv.config(); // ← Charge le fichier .env

import connectDB from '../config/db';
import seedSlider from './seedSlider';
import seedNews from './seedNews';
import seedMissions from './seedMissions';


const runSeeds = async () => {
  try {
    await connectDB();
    console.log('📡 Connected to DB');

    await seedSlider();
    await seedNews();
    await seedMissions();

    console.log('🌱 All seeds done');
    process.exit();
  } catch (error) {
    console.error('❌ Error during seeding', error);
    process.exit(1);
  }
};

runSeeds();
