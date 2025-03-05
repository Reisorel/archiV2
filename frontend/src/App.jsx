import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import CustomCursor from "./components/Cursor/Cursor";
import Router from "./routes/Router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <div className="App">
          <BrowserRouter>
            <CustomCursor />
            <Header />
            <Background>
              <Router />
            </Background>
            <Footer />
            <Analytics /> {/* Ajout de Vercel Analytics ici */}
            <SpeedInsights /> {/* Ajout de Vercel Analytics ici */}
          </BrowserRouter>
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
