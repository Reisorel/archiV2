import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Projects from "../components/Projects/Projects";
import ProjectsDetails from "../components/Projects/ProjectsDetails/ProjectsDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectsDetails />} />
    </Routes>
  );
}
