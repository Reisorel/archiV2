// backend/seeds/seedNews.ts
import News from "../models/News";

const seedNews = async (): Promise<void> => {
  await News.deleteMany();

  const news = [
    {
      id: 1,
      slug: "appartement-parisien",
      title: "APPARTEMENT PARISIEN",
      location: "PARIS 7ème",
      grade: "Rénovation",
      description: "Projet livré",
      image:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276470/Cassandre_Marion_Architecture/Pages/3.News/axo-appartement-paris-01_tztdgz.jpg",
    },
    {
      id: 2,
      slug: "maison-a-la-mer",
      title: "MAISON A LA MER",
      location: "BERNIERES-SUR-MER",
      grade: "Agrandissement",
      description: "Extension et permis de construire",
      image:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276470/Cassandre_Marion_Architecture/Pages/3.News/axo-maison-mer-bernieres01_ol6dwp.jpg",
    },
    {
      id: 3,
      slug: "maison-de-campagne",
      title: "MAISON DE CAMPAGNE",
      location: "SAINT-ROMANS-LES-MELES",
      grade: "Agrandissement",
      description: "Restructuration et permis de construire",
      image:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276471/Cassandre_Marion_Architecture/Pages/3.News/axo-maison-campagne-01_kctazy.jpg",
    },
    {
      id: 4,
      slug: "maison-de-ville",
      title: "MAISON DE VILLE",
      location: "Bretagne",
      grade: "Rénovation",
      description: "Etude de faisabilité",
      image:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276470/Cassandre_Marion_Architecture/Pages/3.News/axo-ferme-breville-01_pvodek.jpg",
    },
    {
      id: 5,
      slug: "maison-de-ville",
      title: "MAISON DE VILLE",
      location: "Bretagne",
      grade: "Rénovation",
      description: "Etude de faisabilité",
      image:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276470/Cassandre_Marion_Architecture/Pages/3.News/axo-ferme-breville-01_pvodek.jpg",
    },
  ];

  await News.insertMany(news);
  console.log(`✅ News seeded with ${news.length} articles`);
};

export default seedNews;
