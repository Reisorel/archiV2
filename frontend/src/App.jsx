import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Caroussel from "./components/Caroussel/Caroussel";
import Background from "./components/Background/Background";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* Page d'accueil : tout est inclus dans Background */}
            <Route path="/" element={
              <Background>
                <Caroussel />
                <WelcomePage/>
                <Footer />
              </Background>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
