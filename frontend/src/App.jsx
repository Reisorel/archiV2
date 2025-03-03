import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer2 from "./components/Footer2/Footer2";
import Background from "./components/Background/Background";
import CustomCursor from "./components/Cursor/Cursor";
import Router from "./routes/Router";
import { Analytics } from "@vercel/analytics/react";

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <CustomCursor />
          <Header />
          <Background>
            <Router />
          </Background>
          <Footer2/>
          <Analytics /> {/* Ajout de Vercel Analytics ici */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
