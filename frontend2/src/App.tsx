import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Router />
          <Analytics />
          <SpeedInsights />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
