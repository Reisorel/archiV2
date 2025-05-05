import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Projects from "../components/Projects/Projects";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
