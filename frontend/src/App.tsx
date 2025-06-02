import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Background from "./components/Layout/Background/Background";
import CustomCursor from "./components/Functional/Cursor/Cursor";
import Router from "./routes/Router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { FC } from "react";
import { HeadProvider } from "react-head";

// Utilisation de FC (FunctionComponent) pour typer le composant
const App: FC = () => {
  return (
    <>
      <HeadProvider>
        <div className="App">
          <BrowserRouter>
            <CustomCursor />
            <Header />
            <Background>
              <Router />
            </Background>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </BrowserRouter>
        </div>
      </HeadProvider>
    </>
  );
};

export default App;
