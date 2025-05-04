import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import CustomCursor from "./components/Cursor/Cursor";
import Router from "./routes/Router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { FC } from "react";

// Utilisation de FC (FunctionComponent) pour typer le composant
const App: FC = () => {

  return (
    <>
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
    </>
  );
};

export default App;
