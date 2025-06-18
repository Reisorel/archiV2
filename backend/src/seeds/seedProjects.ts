// backend/seeds/seedProjects.ts
import Projects from "../models/Projects.model";

const seedProjects = async (): Promise<void> => {
  await Projects.deleteMany();

  const projects = [
    {
      id: 1,
      slug: "pâtisserie-rennaise",
      mainImage:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741279226/Cassandre_Marion_Architecture/Pages/7.Projects/patisserie-rennes_tk4scd.webp",
      title: "PÂTISSERIE RENNAISE",
      loc: "Ile-Et-Vilaine",
      grade: "Rénovation",
      description1: `Au coeur du centre historique de la ville de Rennes, ce local commercial à été complètement transformé afin d’accueillir une pâtisserie. L’espace intérieur a été optimisé pour conjuguer fonctionnalité et fluidité Chaque détail de cette pâtisserie a été conçu avec précision, de l’agencement du mobilier aux choix des teintes et textures. La devanture en verre, associée à un store sobrement orné, met en valeur l’identité du lieu et assure une ouverture fluide sur la place Saint-Germain.`,
      description2: `L’intérieur, baigné de lumière, invite à la dégustation. L’espace est pensé pour sublimer les créations gourmandes tout en favorisant l’échange et la proximité avec les clients.`,
      tech: {
        type: "rénovation",
        techLoc: "Rennes",
        sup: "65 m²",
        mo: "privée",
        inter: "Mission complète avec Lieu architecture",
        avance: "livré juin 2025",
      },
      tags: ["commerce", "rénovation", "Rennes", "verre", "intérieur"],
      meta: "Transformation d’un local à Rennes en pâtisserie lumineuse et fonctionnelle : agencement précis, devanture élégante, lieu chaleureux et ouvert à la convivialité.",
      layout: {
        images: [
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_fill,h_1080,w_auto,f_webp,q_auto/v1750069418/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-01_pifrs2.jpg",
            alt: "Pâtisserie-01",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069422/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-02_jnavby.jpg",
            alt: "Pâtisserie-02",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069423/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-03_gdaze2.jpg",
            alt: "Pâtisserie-03",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069418/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-04_ln6upw.jpg",
            alt: "Pâtisserie-04",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069418/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-05_ktgnjo.jpg",
            alt: "Pâtisserie-05",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069421/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-06_gs4ezi.jpg",
            alt: "Pâtisserie-06",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069420/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-07_mwka3q.jpg",
            alt: "Pâtisserie-07",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069423/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-08_gxvzdg.jpg",
            alt: "Pâtisserie-08",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069424/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-09_hziqhl.jpg",
            alt: "Pâtisserie-09",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069425/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-10_vqudeu.jpg",
            alt: "Pâtisserie-10",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069419/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-11_uknjgw.jpg",
            alt: "Pâtisserie-11",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069420/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-12_hrud5a.jpg",
            alt: "Pâtisserie-12",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069425/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-13_zvmg48.jpg",
            alt: "Pâtisserie-13",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069417/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-14_gtapy9.jpg",
            alt: "Pâtisserie-14",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069417/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-15_zfmlye.jpg",
            alt: "Pâtisserie-15",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1750069417/Cassandre_Marion_Architecture/Pages/8.Projects_details/07-commerce-rennais/commerce-16_liim5j.jpg",
            alt: "Pâtisserie-16",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
        ],
      },
    },
    {
      id: 2,
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
        inter: "mission complète avec Chanelle Fillastre architecte",
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
      id: 3,
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
    {
      id: 4,
      slug: "maison-de-campagne",
      mainImage:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741279231/Cassandre_Marion_Architecture/Pages/7.Projects/maison-campagne-01_pfq2j8.webp",
      title: "MAISON DE CAMPAGNE",
      loc: "Deux-Sèvres",
      grade: "Agrandissement",
      description1: `Au cœur d’un paysage rural préservé, cet ensemble de bâtiment en friche a fait l’objet d’une rénovation complète visant à respecter son caractère traditionnel tout en l’adaptant aux usages contemporains. Deux maison individuelles remplacent les anciennes granges et étables. Pour ce faire, les volumes intérieurs on été entièrement repensé pour créer de vastes espaces lumineux. Les ouvertures ont été redessinées pour maximiser l’apport de lumière et créer un dialogue constant avec l’extérieur. `,
      description2: `Le choix des matériaux tient une place centrale dans cette conception architecturale. Il s’agit de mettre en œuvre des matériaux de construction biosourcés tels que le bois peuplier pour les charpentes, planchers et menuiseries intérieures, la chaux, le chanvre et la terre pour les enduits intérieurs et les planchers. Pour répondre aux matériaux traditionnels présents dans la région, les toitures sont en tuile canalaverou couleur terre de Charente pour les toitures.`,
      tech: {
        type: "rénovation et aménagement paysager",
        techLoc: "Saint-Romans-lès-Melle",
        sup: "340 m²",
        mo: "privée",
        inter: "conception et permis de construire",
        avance: "Permis de construire validé",
      },
      tags: ["pierre", "rénovation", "tuile", "granges", "chaux", "biosourcé"],
      meta: "Rénovation d’un ensemble rural : deux maisons lumineuses, matériaux biosourcés (bois, chaux, chanvre), volumes réinventés et dialogue avec l’extérieur.",
      layout: {
        images: [
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792305/Cassandre_Marion_Architecture/Pages/8.Projects_details/03-maison-campagne/maison-campagne-02_vijxev.webp",
            alt: "Axio-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792311/Cassandre_Marion_Architecture/Pages/8.Projects_details/03-maison-campagne/maison-campagne-01_f20va7.webp",
            alt: "Axio-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792301/Cassandre_Marion_Architecture/Pages/8.Projects_details/03-maison-campagne/maison-campagne-03_rz0hlr.webp",
            alt: "Plan-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792301/Cassandre_Marion_Architecture/Pages/8.Projects_details/03-maison-campagne/maison-campagne-04_edlbhx.webp",
            alt: "Plan-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
        ],
      },
    },
    {
      id: 5,
      slug: "maison-de-ville",
      mainImage:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741279229/Cassandre_Marion_Architecture/Pages/7.Projects/maison-ville-01_vysvh7.webp",
      title: "MAISON DE VILLE",
      loc: "Ile-Et-Vilaine",
      grade: "Extension",
      description1: `Cette maison s'inscrit dans l'alignement de constructions similaires, formant un front bâti homogène. Son identité repose avant tout sur cette unité d’ensemble, lui conférant un caractère générique. L’ambition globale du projet consiste à explorer et valoriser les possibilités qu’offre une telle configuration urbaine. La présente étude propose une extension et une surélévation qui donneront un caractère singulier à une typologie de maison standardisée.`,
      description2: `L’idée est de s’affranchir des contraintes de la parcelle (orientation N/S, configuration en lanière, maison au centre...) et, à l’inverse, d’en exploiter le potentiel. Il s’agit de retrouver de nouvelles orientations où l’intérieur et l’extérieur se répondent grâce à des volumes forts.`,
      tech: {
        type: "extension et surrélévation",
        techLoc: "Lille",
        sup: "150 m²",
        mo: "privée",
        inter: "esquisse",
        avance: "livré",
      },
      tags: ["extension", "surrélévation", "pierre", "maison"],
      meta: "Extension et surélévation d’une maison standardisée pour renforcer son identité. Nouvelles orientations, volumes forts et mise en valeur de la configuration urbaine.",
      layout: {
        images: [
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792306/Cassandre_Marion_Architecture/Pages/8.Projects_details/04-maison-ville/maison-ville-01_rnmqon.webp",
            alt: "Dessin-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792306/Cassandre_Marion_Architecture/Pages/8.Projects_details/04-maison-ville/maison-ville-02_thixts.webp",
            alt: "Dessin-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792301/Cassandre_Marion_Architecture/Pages/8.Projects_details/04-maison-ville/maison-ville-03_gac1ai.webp",
            alt: "Dessin-3",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792300/Cassandre_Marion_Architecture/Pages/8.Projects_details/04-maison-ville/maison-ville04_cr06na.webp",
            alt: "Dessin-4",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
        ],
      },
    },
    {
      id: 6,
      slug: "corps-de-ferme",
      mainImage:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741279226/Cassandre_Marion_Architecture/Pages/7.Projects/ferme-01_mgw48v.webp",
      title: "CORPS DE FERME NORMAND",
      loc: "Calvados",
      grade: "Extension",
      description1: `Située dans la plaine de Caen, cet ancien corps de ferme à déja fait l’objet d’une première rénovation en 2015. Les habitants occupent le niveau intermédiaire. Le demande principale est l’aménagement des combles pour la création de chambres et de lieux de vie. Afin de proposer un projet d’ensemble cohérent les études ont également portées sur la reconfiguration du R+1 avec la création d’un escalier d’accès aux combles.`,
      description2: `Le projet porte également sur la transformation du RDC pour accueillir une véritable entrée, des espaces de rangements, une buanderie, une  cave à vin, et un lieu de vie en lien avec le jardin.`,
      tech: {
        type: "rénovation",
        techLoc: "Escoville",
        sup: "300 m²",
        mo: "privée",
        inter: "mission complète",
        avance: "études en cours",
      },
      tags: [
        "rénovation",
        "extension",
        "ferme",
        "combles",
        "aménagement",
        "Caen",
      ],
      meta: "Aménagement des combles, reconfiguration du R+1, et transformation du RDC d’un ancien corps de ferme près de Caen. Optimisation des espaces et accès au jardin.",
      layout: {
        images: [
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792301/Cassandre_Marion_Architecture/Pages/8.Projects_details/05-ferme/ferme-01_vp5nwg.webp",
            alt: "Dessin-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792302/Cassandre_Marion_Architecture/Pages/8.Projects_details/05-ferme/ferme-02_bifyie.webp",
            alt: "Dessin-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792306/Cassandre_Marion_Architecture/Pages/8.Projects_details/05-ferme/ferme-03_urd8c4.webp",
            alt: "Dessin-3",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792302/Cassandre_Marion_Architecture/Pages/8.Projects_details/05-ferme/ferme-04_xcdhpd.webp",
            alt: "Dessin-4",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792302/Cassandre_Marion_Architecture/Pages/8.Projects_details/05-ferme/ferme-05_ujr5ku.webp",
            alt: "Plan-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792303/Cassandre_Marion_Architecture/Pages/8.Projects_details/05-ferme/ferme-06_kfiwvo.webp",
            alt: "Plan-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792302/Cassandre_Marion_Architecture/Pages/8.Projects_details/05-ferme/ferme-07_flnvjm.webp",
            alt: "Plan-3",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792303/Cassandre_Marion_Architecture/Pages/8.Projects_details/05-ferme/ferme-08_v9yhup.webp",
            alt: "Plan-4",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792301/Cassandre_Marion_Architecture/Pages/8.Projects_details/05-ferme/ferme-10_phhiaj.webp",
            alt: "Plan-5",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792300/Cassandre_Marion_Architecture/Pages/8.Projects_details/04-maison-ville/maison-ville04_cr06na.webp",
            alt: "Plan-6",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
        ],
      },
    },
    {
      id: 7,
      slug: "appartement-nantais",
      mainImage:
        "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741279227/Cassandre_Marion_Architecture/Pages/7.Projects/appartement-nantes_mazvnp.webp",
      title: "APPARTEMENT NANTAIS",
      loc: "Loire-Atlantique",
      grade: "Agrandissement",
      description1: `Situé en plein cœur de Nantes, cet appartement à fait l’objet d’une rénovation intégrale visant à maximiser l’espace et la fluidité des circulations. Initialement, l’appartement se développait sur un seul niveau. L’actuel salon était découpé pour accueillir une chambre et la salle de bain ne disposait d’aucune fenêtre. La configuration des espaces a été retravaillé avec la modification du cloisonnement, et l’installation d’un escalier afin d’accéder à l’étage des combles directement depuis l’appartement.`,
      description2: `La cuisine actuelle est transformée en chambre. Une nouvelle cuisine ouverte, entièrement repensée, s’articule harmonieusement autour du salon et de l’espace repas. Une nouvelle salle de bain prend place à l’étage. Une seconde chambre vient compléter cet appartement pour modifier sa typologie en T3.`,
      tech: {
        type: "rénovation",
        techLoc: "Nantes",
        sup: "50 m²",
        mo: "privée",
        inter: "coneption et délcaration préalable",
        avance: "chantier en cours",
      },
      tags: [
        "extension",
        "rénovation",
        "bois",
        "menuiseries",
        "intérieur",
        "Nantes",
      ],
      meta: "Rénovation d’un appartement à Nantes : nouveaux espaces fluides, cuisine ouverte, chambres repensées et accès direct aux combles pour un T3 lumineux.",
      layout: {
        images: [
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792304/Cassandre_Marion_Architecture/Pages/8.Projects_details/06-appart-nantais/appartement-nantais-01_ikmtg8.webp",
            alt: "Cuisine-1",
            gridColumn: "span 1",
            gridRow: "span 2",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792307/Cassandre_Marion_Architecture/Pages/8.Projects_details/06-appart-nantais/appartement-nantais-02_ftu9sf.webp",
            alt: "Salon-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741792305/Cassandre_Marion_Architecture/Pages/8.Projects_details/06-appart-nantais/appartement-nantais-03_ikxvc6.webp",
            alt: "Plan-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742222131/Cassandre_Marion_Architecture/Pages/8.Projects_details/06-appart-nantais/appartement-nantais-04_qohuv5.webp",
            alt: "Plan-avant-1",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
          {
            src: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742222131/Cassandre_Marion_Architecture/Pages/8.Projects_details/06-appart-nantais/appartement-nantais-05_ph6yxm.webp",
            alt: "Plan-avant-2",
            gridColumn: "span 1",
            gridRow: "span 1",
          },
        ],
      },
    },
  ];
  await Projects.insertMany(projects, { ordered: true });
  console.log(`✅ Projects seeded with ${projects.length} projects`);
};

export default seedProjects;
