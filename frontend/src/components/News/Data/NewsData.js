/ /// NewsData.js

const slider1 = "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741272007/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-01_roqjsn.webp";

const slider2 = "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741272007/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-02_jdkpd1.webp";

const slider3 = "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742233387/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-03_nxtqyn.webp"

const slider4 = "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742233429/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-04_anxsch.webp"

export const sliderData = [
  {
    id: 1,
    name: "APPARTEMENT PARISIEN",
    description: "Cuisine",
    src: slider1,
  },
  {
    id: 2,
    name: "APPARTEMENT PARISIEN",
    description: "Chambre",
    src: slider2,
  },
  {
    id: 3,
    name: "APPARTEMENT PARISIEN",
    description: "Salle d'eau",
    src: slider3,
  },
  {
    id: 4,
    name: "APPARTEMENT PARISIEN",
    description: "Chambre",
    src: slider4,
  },
];

const new1 = "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276470/Cassandre_Marion_Architecture/Pages/3.News/axo-appartement-paris-01_tztdgz.jpg";

const new2 = "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276470/Cassandre_Marion_Architecture/Pages/3.News/axo-maison-mer-bernieres01_ol6dwp.jpg";

const new3 = "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276471/Cassandre_Marion_Architecture/Pages/3.News/axo-maison-campagne-01_kctazy.jpg";

const new4 = "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276470/Cassandre_Marion_Architecture/Pages/3.News/axo-maison-ville-01_x7fdhb.jpg";

const new5 = "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_auto,q_auto/v1741276470/Cassandre_Marion_Architecture/Pages/3.News/axo-ferme-breville-01_pvodek.jpg";


export const newsData = [
  {
    id: 1,
    slug: "appartement-parisien",
    imgSrc: new1,
    title: "APPARTEMENT PARISIEN",
    location: "PARIS 7ème",
    grade: "Rénovation",
    description: "Projet livré",
  },
  {
    id: 2,
    slug: "maison-a-la-mer",
    imgSrc: new2,
    title: "MAISON A LA MER",
    location: "BERNIERES-SUR-MER",
    grade: "Agrandissement",
    description: "Extension et permis de construire",
  },
  {
    id: 3,
    slug: "maison-de-campagne",
    imgSrc: new3,
    title: "MAISON DE CAMPAGNE",
    location: "SAINT-ROMANS-LES-MELES",
    grade: "Agrandissement",
    description: "Restructuration et permis de construire",
  },
  {
    id: 4,
    slug: "maison-de-ville",
    imgSrc: new4,
    title: "MAISON DE VILLE",
    location: "ROMILIE",
    grade: "Rénovation",
    description: "Etude de faisabilité",
  },
  {
    id: 5,
    slug: "corps-de-ferme",
    imgSrc: new5,
    title: "CORPS DE FERME NORMAND",
    location: "ESCOVILLE",
    grade: "Extension",
    description: "Rénovation et suivi de chantier",
  },
];
