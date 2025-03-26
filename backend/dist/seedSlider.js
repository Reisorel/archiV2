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
require("dotenv").config();
const db_1 = __importDefault(require("./config/db"));
const Slider_1 = __importDefault(require("./models/Slider"));
const seedSliders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.default)();
        yield Slider_1.default.deleteMany();
        const sliders = [
            {
                title: "APPARTEMENT PARISIEN",
                description: "Cuisine",
                image: "https://res.cloudinary.com/dqrq4ullu/image/upload/c_scale,h_1080,w_auto,f_webp,q_auto/v1741272007/Cassandre_Marion_Architecture/Pages/2.Slider/appartement-paris-01_roqjsn.webp",
            },
        ];
        yield Slider_1.default.insertMany(sliders);
        console.log("✅ Sliders imported successfully");
        process.exit();
    }
    catch (error) {
        console.error("❌ Error importing sliders", error);
        process.exit(1);
    }
});
seedSliders();
