import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Caroussel from "./components/Caroussel/Caroussel";
import Background from "./components/Background/Background";
import News from "./components/News/News";
import Missions from "./components/Missions/Missions";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Test from "./components/Test/Test";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Background>
            <Routes>
              {/* Page d'accueil : tout est inclus dans Background */}
              {/* <Route path="/test" element={<Test/>}/> */}
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/"
                element={
                  <>
                    <Caroussel />
                    <News />
                    <Missions />
                    <About />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </Background>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
