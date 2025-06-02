"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Schéma avec typage explicite
const projectSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    mainImage: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    loc: {
        type: String,
        required: true,
        trim: true,
    },
    grade: {
        type: String,
        required: true, // ← obligatoire
        trim: true,
    },
    description1: {
        type: String,
        required: true,
        trim: true,
    },
    description2: {
        type: String,
        required: true,
        trim: true,
    },
    tech: {
        type: {
            type: String,
            required: true,
        },
        techLoc: {
            type: String,
            required: true,
        },
        sup: {
            type: String,
            required: true,
        },
        mo: {
            type: String,
            required: true,
        },
        inter: {
            type: String,
            required: true,
        },
        avance: {
            type: String,
            required: true,
        },
    },
    tags: {
        type: [String],
        required: true,
    },
    meta: {
        type: String,
        required: true,
        trim: true,
    },
    layout: {
        images: [
            {
                src: {
                    type: String,
                    required: true,
                },
                alt: {
                    type: String,
                    required: true,
                },
                gridColumn: {
                    type: String,
                    required: true,
                },
                gridRow: {
                    type: String,
                    required: true,
                },
            },
        ],
    }
}, {
    timestamps: true, // createdAt et updatedAt
});
// 3️⃣ Export du modèle
const Project = mongoose_1.default.model("Project", projectSchema);
exports.default = Project;
