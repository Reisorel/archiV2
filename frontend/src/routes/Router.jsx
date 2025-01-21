import React from "react";
import { Routes, Route } from "react-router-dom";
import Caroussel from "../components/Caroussel/Caroussel";
import News from "../components/News/News";
import Missions from "../components/Missions/Missions";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import ProjectsDetails from "../components/Projects/ProjectsDetails/ProjectsDetails";
import Test from "../components/Test/Test";

export default function Router() {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectsDetails />} />
      <Route
        path="/"
        element={
          <>
            <Caroussel />
            <News />
            <Missions />
            <About />
          </>
        }
      />
    </Routes>
  );
}
