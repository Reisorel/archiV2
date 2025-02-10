import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import News from "../components/News/News";
import Missions from "../components/Missions/Missions";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import ProjectsDetails from "../components/Projects/ProjectsDetails/ProjectsDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectsDetails />} />
      <Route
        path="/"
        element={
          <>
            <Slider />
            <News />
            <Missions />
            <About />
          </>
        }
      />
    </Routes>
  );
}
