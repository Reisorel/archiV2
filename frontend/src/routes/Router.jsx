import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import ProjectsDetails from "../components/Projects/ProjectsDetails/ProjectsDetails";
import HomePage from "../components/HomePage/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectsDetails />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
