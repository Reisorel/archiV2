"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/seeds/seedProjects.ts
const Projects_1 = __importDefault(require("../models/Projects"));
const seedProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Projects_1.default.deleteMany();
    const projects = [
        {
            id: 1,
            slug: "appartement-parisien",
            mainImage: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741279227/Cassandre_Marion_Architecture/Pages/7.Projects/appartement-paris-01_hcvtka.webp",
            title: "APPARTEMENT PARISIEN",
            loc: "Paris 7ème",
            grade: "Rénovation",
            description1: "Situé sur la rive gauche de Paris, cet appartement a bénéficié d’une rénovation complète, alliant élégance et fonctionnalité. L’intervention a permis de restructurer les espaces en valorisant la lumière naturelle et en optimisant le confort thermique. Les agencements sur mesure sont en bois d’Oukoumé et intègrent la cuisine ainsi que du mobilier de rangement dans l’espace séjour et salle à manger.",
            description2: "Des revêtements muraux en bouleau habillent la chambre et se prolongent dans les pièces intimes telles que le dressing et la salle de bain. Une attention particulière a été portée au traitement de la lumière, aux matériaux et aux détails de finition.",
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
    ];
    yield Projects_1.default.insertMany(projects);
    console.log(`✅ Projects seeded with ${projects.length} projects`);
});
exports.default = seedProjects;
