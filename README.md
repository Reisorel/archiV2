# Archi Backend

A fully administrable Node.js + MongoDB backend for managing architecture projects, images, and content for a modern portfolio website.

## 📦 Tech Stack

- Node.js
- Express
- MongoDB (with Mongoose)
- Cloudinary (for image hosting, optional)
- JWT (for future admin authentication)

## 📁 Project Structure

├── .gitignore
├── docker-compose.yml
├── package.json ├── Procfile
├── README.md
├── backend/
│ ├── .dockerignore
│ ├── .env
│ ├── Dockerfile
│ ├── package.json
│ ├── server.ts
│ ├── tsconfig.json
│ ├── dump/
│ │ └── archi_db/
│ ├── src/
│ │ ├── app.ts
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middlewares/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── seeds/
│ │ └── utils/
├── dump/
│ └── archi_db/
├── frontend/
│ ├── .env.local
│ ├── .env.production
│ ├── .env.remote
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package.json
│ ├── README.md
│ ├── tsconfig.app.json
│ ├── tsconfig.json
│ ├── tsconfig.node.json
│ ├── vercel.json
│ ├── vite.config.ts
│ ├── public/
│ └── src/
│ ├── components/
│ │ ├── Functional/
│ │ └── Layout/
│ ├── pages/
│ ├── routes/
│ └── services/
