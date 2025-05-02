"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//backend/seeds/seedMissions.ts
const Missions_1 = __importDefault(require("../models/Missions"));
const seedMissions = async () => {
    await Missions_1.default.deleteMany();
    const missions = [
        {
            id: 1,
            image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742224228/Cassandre_Marion_Architecture/Pages/4.Missions/01-plan_zp4xjp.webp",
            description: "illustration1",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742224230/Cassandre_Marion_Architecture/Pages/4.Missions/02-calque_qdmgr0.webp",
            description: "illustration2",
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742224229/Cassandre_Marion_Architecture/Pages/4.Missions/03-carnet_tdgswu.webp",
            description: "illustration3",
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741278662/Cassandre_Marion_Architecture/Pages/4.Missions/04-contruction_wbn7dp.webp",
            description: "illustration4",
        },
        {
            id: 5,
            image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742224220/Cassandre_Marion_Architecture/Pages/4.Missions/05-chantier_qj3rwu.webp",
            description: "illustration5",
        },
        {
            id: 6,
            image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742224221/Cassandre_Marion_Architecture/Pages/4.Missions/06-chantier-2JPG_csbgqg.webp",
            description: "illustration6",
        },
        {
            id: 7,
            image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742224295/Cassandre_Marion_Architecture/Pages/4.Missions/07-dessin_wufkif.webp",
            description: "illustration7",
        },
        {
            id: 8,
            image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742224295/Cassandre_Marion_Architecture/Pages/4.Missions/08-chantier_ngtppb.webp",
            description: "illustration8",
        },
        {
            id: 9,
            image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1742224295/Cassandre_Marion_Architecture/Pages/4.Missions/09-croquis_xbdr6h.webp",
            description: "illustration9",
        },
    ];
    await Missions_1.default.insertMany(missions);
    console.log(`✅ Missions seeded with ${missions.length} missions`);
};
exports.default = seedMissions;
