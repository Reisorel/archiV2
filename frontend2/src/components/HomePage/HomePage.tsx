import { FC } from "react";
import Slider from "../Slider/Slider";
import News from "../News/News";
import Missions from "../Missions/Missions";
import About from "../About/About";
import { Title, Meta } from 'react-head';


// NOTE :
// Ce composant sert juste à regrouper les 4 composants de la page principale
// afin de leur donner une desccription meta via helmet pour le SEO.
//

const HomePage: FC = () => {
  return (
    <>
      <Title>Cassandre Marion Architecture - Accueil</Title>
      <Meta
      name="description"
      content="Cassandre Marion, architecte en Bretagne et Normandie. Projets d'architecture à Rennes, Caen et leurs environs, spécialisée dans le bois et la rénovation." />
      <Slider />
      <News />
      <Missions />
      <About />
    </>
  );
};

export default HomePage;
