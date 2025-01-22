import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import CustomCursor from "./components/Cursor/Cursor";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <CustomCursor/>
          <Header />
          <Background>
            <Router/>
          </Background>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
