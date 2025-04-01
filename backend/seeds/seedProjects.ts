// backend/seeds/seedProjects.ts
import Projects from "../models/Projects";

const seedProjects = async (): Promise<void> => {
  await Projects.deleteMany();

  const projects = [
    {
      id: 1,
      slug: "appartement-parisien",
      mainImage:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741279227/Cassandre_Marion_Architecture/Pages/7.Projects/appartement-paris-01_hcvtka.webp",
      title: "APPARTEMENT PARISIEN",
      loc: "Paris 7ème",
      grade: "Rénovation",
      description1:
        "Situé sur la rive gauche de Paris, cet appartement a bénéficié d’une rénovation complète, alliant élégance et fonctionnalité. L’intervention a permis de restructurer les espaces en valorisant la lumière naturelle et en optimisant le confort thermique. Les agencements sur mesure sont en bois d’Oukoumé et intègrent la cuisine ainsi que du mobilier de rangement dans l’espace séjour et salle à manger.",
      description2:
        "Des revêtements muraux en bouleau habillent la chambre et se prolongent dans les pièces intimes telles que le dressing et la salle de bain. Une attention particulière a été portée au traitement de la lumière, aux matériaux et aux détails de finition.",
      tech: {
        type: "rénovation",
        techLoc: "Paris 5ème",
        sup: "90 m²",
        mo: "privée",
        inter: "mission complète",
        avance: "livré août 2024",
      },
      tags: ["bois", "rénovation", "Paris", "intérieur", "menuiserie"],
      meta: "Rénovation complète d’un appartement rive gauche à Paris : lumière naturelle, confort thermique, bois d’Oukoumé, finitions soignées, élégance fonctionnelle.",
      layout: {
        images: [
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280129/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-cuisine-01_as7vzc.webp",
            alt: "Salon1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280119/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-cuisine-02_gwjjt0.webp",
            alt: "Cuisine-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280120/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-cuisine-03_grac2h.webp",
            alt: "Cuisine-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280120/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-cuisine04_vreuru.webp",
            alt: "Couloir-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280126/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-sdb-01_e1zlm2.webp",
            alt: "Salle-de-bain-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280129/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-sdb-02_fh7a9i.webp",
            alt: "Salle-de-bain-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280123/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-salon-01_qs2hiv.webp",
            alt: "Salon-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280125/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-chambre-01_a2m0iv.webp",
            alt: "Chambre-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280130/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-chambre-02_hhq9sr.webp",
            alt: "Chambre-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280119/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-cuisine-02_gwjjt0.webp",
            alt: "cuisine-3",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280124/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-chambre-03_keonng.webp",
            alt: "Chambre-3",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741280131/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-bois-01_qsfn36.webp",
            alt: "Salle-de-bain-3",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742222704/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-14_qhdhga.webp",
            alt: "Chambre-4",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742222705/Cassandre_Marion_Architecture/Pages/8.Projects_details/01-appartement-paris/appartement-paris-13_fahfmy.webp",
            alt: "Plan-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
        ],
      },
    },
    {
      id: 2,
      slug: "maison-a-la-mer",
      mainImage:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741279228/Cassandre_Marion_Architecture/Pages/7.Projects/maison-mer-01_ygtot7.webp",
      title: "MAISON A LA MER",
      loc: "Calvados",
      grade: "Agrandissement",
      description1:
        "Nichée sur la côte Normande, la maison existante est conservée et réhabilitée dans son enveloppe et ses installations techniques. Le projet prévoit de concevoir une extension qui reprend le langage de la maison existante dans son volume. Pour mieux établir la liaison avec la maison existante, un espace en simple rez-de-chaussée connecte les deux volumes. Ce dernier, au caractère plus contemporain, révèle au mieux les formes architecturales plus traditionnelles de la maison existante et du reste de l’extension. L’orientation du bâti et le dessin des façades sont conçus pour répondre à l’environnement paysagé et climatique du site.",
      description2:
        "Les façades Sud et Sud-Ouest sont largement ouvertes et prolongées par des terrasses. En été, l’arbre imposant situé devant la façade Sud apporte une protection naturelle en agissant comme pare-soleil. En hiver, les grandes ouvertures permettent de capter un maximum de soleil. Le rythme de ces façades rappelle, dans un esprit contemporain, les maisons à colombages présentes dans la ville. Une grande ouverture sur la façade Sud-Ouest cadre la vue sur le jardin. ",
      tech: {
        type: "rénovation et extension",
        techLoc: "Bernières-Sur-Mer",
        sup: "130 m²",
        mo: "privée",
        inter: "conception",
        avance: "En cours",
      },
      tags: [
        "bois",
        "extérieur",
        "Normandie",
        "maison",
        "extension",
        "terrasse",
        "Caen",
      ],
      meta: "Réhabilitation et extension d’une maison en Normandie, intégrant volumes traditionnels et contemporain, grandes ouvertures, terrasses, et lien paysager optimal.",
      layout: {
        images: [
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792304/Cassandre_Marion_Architecture/Pages/8.Projects_details/02-maison-mer/maison-mer-01_id13vw.webp",
            alt: "Cuisine-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792306/Cassandre_Marion_Architecture/Pages/8.Projects_details/02-maison-mer/maison-mer-02_xtfty7.webp",
            alt: "Salon-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792305/Cassandre_Marion_Architecture/Pages/8.Projects_details/02-maison-mer/maison-mer-03_cqsdhd.webp",
            alt: "Salon-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792304/Cassandre_Marion_Architecture/Pages/8.Projects_details/02-maison-mer/maison-mer-04_upmewf.webp",
            alt: "Salon-3",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792301/Cassandre_Marion_Architecture/Pages/8.Projects_details/02-maison-mer/maison-mer-05_fvdbio.webp",
            alt: "Axo-1",
            gridColumn: "span 2",
            gridRow: "span 2",
          },
        ],
      },
    },
  ];
  await Projects.insertMany(projects);
  console.log(`✅ Projects seeded with ${projects.length} projects`);
};

export default seedProjects;
