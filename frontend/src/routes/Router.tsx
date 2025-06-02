import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import ProjectsDetailsPage from "../pages/ProjectsDetailsPage/ProjectsDetailsPage"; // Chemin corrigé

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectsDetailsPage />} />
    </Routes>
  );
}
