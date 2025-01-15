import { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Caroussel from "./components/Caroussel/Caroussel";
import Background from "./components/Background/Background";
import News from "./components/News/News";
import Missions from "./components/Missions/Missions";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ProjectsDetails from "./components/Projects/ProjectsDetails/ProjectsDetails";
import Test from "./components/Test/Test";
import CustomCursor from "./components/Cursor/Cursor";
import FooterTest from "./components/Footer-test/FooterTest"


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <CustomCursor/>
          <Header />
          <Background>
            <Routes>
              <Route path="/test" element={<Test/>} />
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
                    {/* <FooterTest></FooterTest> */}
                  </>
                }
              />
            </Routes>
          </Background>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
