import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CustomCursor from "./components/Cursor/Cursor";

import Router from "./routes/Router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { FC } from 'react';

// Utilisation de FC (FunctionComponent) pour typer le composant
const App: FC = () => {
  return (
    <>
      <BrowserRouter>
      <CustomCursor />
        <Header />

        <div className="App">
          <Router />
          <Analytics />
          <SpeedInsights />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
