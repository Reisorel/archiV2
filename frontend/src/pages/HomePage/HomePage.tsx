import { FC } from "react";
import Slider from "../../components/Functional/Slider/Slider";
import News from "../../components/Functional/News/News";
import Missions from "../../components/Functional/Missions/Missions";
import About from "../../components/Functional/About/About";
import { Title, Meta } from "react-head";

const HomePage: FC = () => {
  return (
    <>
      <Title>Cassandre Marion Architecture - Accueil</Title>
      <Meta
        name="description"
        content="Cassandre Marion, architecte en Bretagne et Normandie. Projets d'architecture à Rennes, Caen et leurs environs, spécialisée dans le bois et la rénovation."
      />
      <Slider />
      <News />
      <Missions />
      <About />
    </>
  );
};

export default HomePage;
