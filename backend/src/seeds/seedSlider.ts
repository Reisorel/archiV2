// backend/seeds/seedSliders.ts
import Slider from '../models/Slider.model';

const seedSliders = async (): Promise<void> => {
  await Slider.deleteMany();

  const sliders = [
    {
      id: 1,
      title: "APPARTEMENT PARISIEN",
      description: "Cuisine",
      image:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741272007/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-01_roqjsn.webp",
    },
    {
      id: 2,
      title: "APPARTEMENT PARISIEN",
      description: "Chambre",
      image:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741272007/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-02_jdkpd1.webp",
    },
    {
      id: 3,
      title: "APPARTEMENT PARISIEN",
      description: "Salle d'eau",
      image:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742233387/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-03_nxtqyn.webp",
    },
    {
      id: 4,
      title: "APPARTEMENT PARISIEN",
      description: "Salle d'eau",
      image:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742233429/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-04_anxsch.webp",
    },
  ];

  await Slider.insertMany(sliders, { ordered: true });
  console.log(`✅ Sliders seeded with ${sliders.length} slides`);
};

export default seedSliders;
