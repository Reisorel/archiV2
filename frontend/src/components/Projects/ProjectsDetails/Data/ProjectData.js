// images project gallery
const project1 = "/images/projects/projects-gallery/1.appartement-parisien.jpg";
const project2 = "/images/projects/projects-gallery/2.maison-mer.jpg";
const project3 = "/images/projects/projects-gallery/3.maisons-campagne.jpg";
const project4 = "/images/projects/projects-gallery/4.maison-ville.jpg";
const project5 = "/images/projects/projects-gallery/5.ferme.jpg";
const project6 = "/images/projects/projects-gallery/6.appartement-nantais.jpg";
const project7 = "/images/projects/projects-gallery/7.patisserie.jpg";

// images section project solo

// 1.Appart-Paris
const apt_paris1 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN.jpg";
const apt_paris2 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN2.jpg";
const apt_paris3 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN3.jpg";
const apt_paris4 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN4.jpg";
const apt_paris5 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN5.jpg";
const apt_paris6 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN6.jpg";
const apt_paris7 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN7.jpg";
const apt_paris8 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN8.jpg";
const apt_paris9 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN9.jpg";
const apt_paris10 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN10.jpg";
const apt_paris11 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN11.jpg";
const apt_paris12 =
  "/images/projectsDetails/1.Appart-Paris/APPARTEMENT_PARISIEN12.jpg";

// 2.Maison-mer
const maison_mer1 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER1.jpg";
const maison_mer2 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER2.jpg";
const maison_mer3 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER3.jpg";
const maison_mer4 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER4.jpg";
const maison_mer5 = "/images/projectsDetails/2.Maison-Mer/MAISON_MER5.jpg";

// 3. Maison-campagne
const maison_campagne1 =
  "/images/projectsDetails/3.Maison-Campagne/MAISON_CAMPAGNE1.jpg";
const maison_campagne2 =
  "/images/projectsDetails/3.Maison-Campagne/MAISON_CAMPAGNE2.jpg";
const maison_campagne3 =
  "/images/projectsDetails/3.Maison-Campagne/MAISON_CAMPAGNE3.jpg";
const maison_campagne4 =
  "/images/projectsDetails/3.Maison-Campagne/MAISON_CAMPAGNE4.jpg";

//4 Maison-ville
const maison_ville1 =
  "/images/projectsDetails/4.Maison-Ville/MAISON_VILLE1.jpg";
const maison_ville2 =
  "/images/projectsDetails/4.Maison-Ville/MAISON_VILLE2.jpg";
const maison_ville3 =
  "/images/projectsDetails/4.Maison-Ville/MAISON_VILLE3.jpg";
const maison_ville4 =
  "/images/projectsDetails/4.Maison-Ville/MAISON_VILLE4.jpg";

//5 Corps de Ferme
const ferme1 = "/images/projectsDetails/5.Ferme/FERME1.jpg";
const ferme2 = "/images/projectsDetails/5.Ferme/FERME2.jpg";
const ferme3 = "/images/projectsDetails/5.Ferme/FERME3.jpg";
const ferme4 = "/images/projectsDetails/5.Ferme/FERME4.jpg";
const ferme5 = "/images/projectsDetails/5.Ferme/FERME5.jpg";
const ferme6 = "/images/projectsDetails/5.Ferme/FERME6.jpg";
const ferme7 = "/images/projectsDetails/5.Ferme/FERME7.jpg";
const ferme8 = "/images/projectsDetails/5.Ferme/FERME8.jpg";
const ferme9 = "/images/projectsDetails/5.Ferme/FERME9.jpg";
const ferme10 = "/images/projectsDetails/5.Ferme/FERME10.jpg";

//6 Appart Nantais
const appart_nantes1 =
  "/images/projectsDetails/6.Appart-Nantais/APPARTEMENT_NANTAIS1.jpg";
const appart_nantes2 =
  "/images/projectsDetails/6.Appart-Nantais/APPARTEMENT_NANTAIS2.jpg";
const appart_nantes3 =
  "/images/projectsDetails/6.Appart-Nantais/APPARTEMENT_NANTAIS3.jpg";

//7 Boulangerie
const boulangerie1 = "/images/projectsDetails/7.Commerce/COMMERCE1.jpg";

export const projectsData = [
  {
    id: 1,
    slug: "appartement-parisien",
    imgSrc: project1,
    title: "APPARTEMENT PARISIEN",
    location: "Paris 7ème",
    grade: "Rénovation",
    description1: `
    Situé sur la rive gauche de Paris, cet appartement a bénéficié d’une rénovation complète, alliant élégance et fonctionnalité. L’intervention a permis de restructurer les espaces en valorisant la lumière naturelle et en optimisant le confort thermique et acoustique.Les menuiseries sur mesure, réalisées par des artisans locaux, s’intègrent parfaitement dans l’esthétique classique de l’appartement tout en offrant des performances accrues.
    `,
    description2: `Chaque ouverture a été pensée pour sublimer les volumes existants et offrir une parfaite harmonie entre tradition et modernité.Les matériaux nobles comme le chêne massif et le laiton patiné apportent une touche intemporelle, tandis que les finitions minutieuses révèlent un savoir-faire d’exception. L’ensemble du projet a été guidé par une exigence de qualité et une attention particulière aux détails.
    `,
    type: "rénovation",
    loc: "Paris 7ème",
    sup: "120 m²",
    mo: "privée",
    inter: "étude / conception / maitrise d'oeuvre",
    avance: "livré",
    layout: {
      gridTemplateColumns: "repeat(2, 400px)", // Grille avec 2 colonnes
      gridTemplateRows: "repeat(5, 600px)", // 5 lignes de 100px
      gap: "1rem",
      imageDimensions: {
        width: "400px",
        height: "600px",
      },
      images: [
        {
          src: apt_paris1,
          alt: "Cuisine1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris2,
          alt: "Cuisine2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris3,
          alt: "Cuisine3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris4,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris5,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris6,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris7,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris8,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris9,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris10,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris11,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: apt_paris12,
          alt: "Cuisine4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "maison-a-la-mer",
    imgSrc: project2,
    title: "MAISON A LA MER",
    location: "Calvados",
    grade: "Agrandissement",
    description1: `Nichée sur la côte normande, cette maison de villégiature a été entièrement repensée pour conjuguer authenticité et confort moderne. L’intervention a permis d’ouvrir les espaces de vie sur l’extérieur, maximisant ainsi les vues sur le littoral tout en optimisant l’apport de lumière naturelle. L’architecture intérieure a été travaillée avec des matériaux nobles et chaleureux pour créer une atmosphère conviviale et apaisante.`,
    description2: `Chaque pièce a été pensée pour favoriser une connexion fluide entre intérieur et extérieur, offrant un cadre de vie idéal pour les séjours en bord de mer. Le bois brut et les tonalités claires rappellent l’environnement côtier, tandis que des touches contemporaines viennent sublimer l’ensemble. L’attention portée aux détails et aux finitions confère à ce projet un équilibre subtil entre modernité et tradition, reflétant l’âme du lieu.`,
    type: "extension",
    loc: "Bernières-Sur-Mer",
    sup: "200 m²",
    mo: "privée",
    inter: "étude / conception / maitrise d'oeuvre",
    avance: "En construction",
    layout: {
      gridTemplateColumns: "repeat(2, 600px)", // Grille avec 2 colonnes
      gridTemplateRows: "repeat(2, 400px)", // 5 lignes de 100px
      gap: "1rem",
      imageDimensions: {
        width: "600px",
        height: "400px",
      },
      images: [
        {
          src: maison_mer1,
          alt: "Cuisine1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_mer2,
          alt: "Salon1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_mer3,
          alt: "Salon3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_mer4,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_mer5,
          alt: "Axo1",
          gridColumn: "span 2",
          gridRow: "span 2",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "maison-de-campagne",
    imgSrc: project3,
    title: "MAISON DE CAMPAGNE",
    location: "Ile-Et-Vilaine",
    grade: "Agrandissement",
    description1: `Au cœur d’un paysage rural préservé, cette longère a fait l’objet d’une rénovation complète visant à respecter son caractère traditionnel tout en l’adaptant aux usages contemporains. L’aménagement intérieur a été entièrement repensé pour créer de vastes espaces lumineux, où la pierre, le bois et les matériaux naturels sont sublimés par une mise en valeur des volumes d’origine.`,
    description2: `Chaque intervention a été pensée dans une logique de conservation et de modernisation harmonieuse. Les ouvertures ont été redessinées pour maximiser l’apport de lumière et créer un dialogue constant avec l’extérieur. L’intégration de solutions passives pour le confort thermique et la sélection de matériaux locaux ont guidé ce projet, dans une volonté de préservation et d’authenticité.`,
    type: "rénovation",
    loc: "Tintigniac",
    sup: "230 m²",
    mo: "privée",
    inter: "étude",
    avance: "livré",
    layout: {
      gridTemplateColumns: "repeat(2, 600px)",
      gridTemplateRows: "repeat(2, 400px)",
      gap: "1rem",
      imageDimensions: {
        width: "600px",
        height: "400px",
      },
      images: [
        {
          src: maison_campagne1,
          alt: "Axio1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_campagne2,
          alt: "Axio2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_campagne3,
          alt: "Plan1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_campagne4,
          alt: "Plan2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 4,
    slug: "maison-de-ville",
    imgSrc: project4,
    title: "MAISON DE VILLE",
    location: "Ile-Et-Vilaine",
    grade: "Extension",
    description1: `Située au cœur d’un tissu urbain dense, cette maison de ville a été repensée pour répondre aux besoins d’une famille en quête d’espace et de lumière. Le projet s’articule autour d’une restructuration complète des volumes existants et d’une surélévation en bois, permettant d’optimiser la surface habitable sans empiéter sur l’empreinte au sol. L’ajout d’une extension a permis d’améliorer la fluidité entre les espaces de vie et de renforcer la connexion avec le jardin.`,
    description2: `L’intervention a mis l’accent sur une architecture sobre et élégante, où le bardage bois et les grandes ouvertures rythment la façade. L’optimisation thermique a été un axe central du projet, avec une isolation renforcée et l’intégration de solutions passives. La surélévation en ossature bois allège l’ensemble et apporte une touche contemporaine, tout en respectant l’identité architecturale du quartier. Chaque détail a été pensé pour allier confort et esthétisme dans un cadre urbain optimisé.`,
    type: "rénovation",
    loc: "Romillé",
    sup: "85 m²",
    mo: "privée",
    inter: "étude",
    avance: "livré",
    layout: {
      gridTemplateColumns: "repeat(2, 400px)",
      gridTemplateRows: "repeat(2, 600px)",
      gap: "1rem",
      imageDimensions: {
        width: "400px",
        height: "600px",
      },
      images: [
        {
          src: maison_ville1,
          alt: "Dessin1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_ville2,
          alt: "Dessin2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_ville3,
          alt: "Dessin3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: maison_ville4,
          alt: "Dessin4",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 5,
    slug: "corps-de-ferme",
    imgSrc: project5,
    title: "CORPS DE FERME",
    location: "Calvados",
    grade: "Extension",
    description1: `Située dans la plaine de Caen, cette ancienne ferme a été entièrement réhabilitée pour retrouver son caractère tout en améliorant son confort et sa fonctionnalité. La restructuration des volumes a permis d'optimiser la circulation et la luminosité, en intégrant des matériaux durables et des solutions performantes sur le plan thermique.`,
    description2: `Les interventions ont mis en valeur la pierre d’origine et les charpentes existantes, tout en intégrant des aménagements sur mesure. Les nouvelles ouvertures apportent une belle profondeur aux espaces et renforcent le lien avec l’extérieur. Chaque détail a été pensé pour assurer une cohérence entre les matériaux, les proportions et l’usage quotidien des lieux.`,
    type: "rénovation",
    loc: "Escoville",
    sup: "250 m²",
    mo: "privée",
    inter: "étude / conception / maitrise d'oeuvre",
    avance: "conception",
    layout: {
      gridTemplateColumns: "repeat(2, 600px)",
      gridTemplateRows: "repeat(2, 400px)",
      gap: "1rem",
      imageDimensions: {
        width: "600px",
        height: "400px",
      },
      images: [
        {
          src: ferme1,
          alt: "Cuisine1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme2,
          alt: "Salon1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme3,
          alt: "Salon3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme4,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme5,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme6,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme7,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme8,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme9,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: ferme10,
          alt: "Salon2",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 6,
    slug: "appartement-nantais",
    imgSrc: project6,
    title: "APPARTEMENT NANTAIS",
    location: "Loire-Atlantique",
    grade: "Agrandissement",
    description1: `Situé en plein cœur de Nantes, cet appartement a fait l’objet d’une rénovation intégrale visant à maximiser l’espace et la fluidité des circulations. L’intervention a permis de révéler le potentiel du lieu en optimisant la lumière naturelle et en intégrant des solutions de rangement sur mesure. La cuisine ouverte, entièrement repensée, s’articule harmonieusement autour du salon et de l’espace repas, créant une atmosphère chaleureuse et conviviale.`,
    description2: `L’ensemble du projet repose sur un travail minutieux des volumes et des matériaux. Le bois, omniprésent, apporte une sensation de douceur et de continuité, tandis que les lignes épurées du mobilier encastré garantissent une parfaite cohérence visuelle. Dans la chambre sous combles, le choix d’un aménagement sur mesure exploite intelligemment la pente du toit pour offrir des espaces de rangement discrets et fonctionnels. Une rénovation pensée pour conjuguer esthétisme et confort au quotidien.`,
    type: "rénovation",
    loc: "Nantes",
    sup: "250 m²",
    mo: "privée",
    inter: "étude / conception",
    avance: "conception",
    layout: {
      gridTemplateColumns: "repeat(2, 600px)", // Grille avec 2 colonnes
      gridTemplateRows: "repeat(2, 400px)", // 5 lignes de 100px
      gap: "1rem",
      imageDimensions: {
        height: "600px",
        width: "400px",
      },
      images: [
        {
          src: appart_nantes1,
          alt: "Cuisine1",
          gridColumn: "span 1",
          gridRow: "span 2",
        },
        {
          src: appart_nantes2,
          alt: "Salon1",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
        {
          src: appart_nantes3,
          alt: "Salon3",
          gridColumn: "span 1",
          gridRow: "span 1",
        },
      ],
    },
  },
  {
    id: 7,
    slug: "commerce-rennais",
    imgSrc: project7,
    title: "COMMERCE RENNAIS",
    location: "Ile-Et-Vilaine",
    grade: "Rénovation",
    description1: `Située au cœur du centre-ville rennais, cette pâtisserie a fait l’objet d’une rénovation complète pour offrir un cadre raffiné et chaleureux. L’aménagement a été pensé pour valoriser la façade existante tout en apportant une touche contemporaine avec des matériaux soigneusement sélectionnés. Derrière la vitrine élégante, l’espace intérieur a été optimisé pour conjuguer confort et fluidité, permettant une expérience agréable aussi bien pour les clients que pour les artisans.`,
    description2: `Chaque détail de cette pâtisserie a été conçu avec précision, de l’agencement du mobilier aux choix des teintes et textures. La devanture en verre, associée à un store sobrement orné, met en valeur l’identité du lieu et assure une ouverture fluide sur la place Saint-Germain. L’intérieur, baigné de lumière, invite à la dégustation avec un équilibre subtil entre convivialité et sophistication. Un espace pensé pour sublimer les créations gourmandes tout en favorisant l’échange et la proximité avec les clients.`,
    type: "rénovation",
    loc: "Rennes",
    sup: "98 m²",
    mo: "privée",
    inter: "étude / conception / maitrise d'oeuvre",
    avance: "conception",
    layout: {
      gridTemplateColumns: "repeat(1, 600px)", // Grille avec 2 colonnes
      gridTemplateRows: "repeat(1, 400px)", // 5 lignes de 100px
      gap: "1rem",
      imageDimensions: {
        height: "600px",
        width: "400px",
      },
      images: [
        {
          src: boulangerie1,
          alt: "Facade1",
          gridColumn: "span 1",
          gridRow: "span 2",
        },
      ],
    },
  },
];

// export default projectsData;
