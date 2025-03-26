require("dotenv").config();
import mongoose from 'mongoose';
import connectDB from './config/db';
import Slider from './models/Slider';

const seedSliders = async () => {
  try {
    await connectDB();

    await Slider.deleteMany();

    const sliders = [
      {
        title: "APPARTEMENT PARISIEN",
        description: "Cuisine",
        image:
          "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741272007/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-01_roqjsn.webp",
      },
    ];

    await Slider.insertMany(sliders);
    console.log("✅ Sliders imported successfully");
    process.exit();
  } catch (error : any) {
    console.error("❌ Error importing sliders", error);
    process.exit(1);
  }
};

seedSliders();
