import Slider from "../Slider/Slider";
import News from "../News/News";
import Missions from "../Missions/Missions";
import About from "../About/About";
import { Helmet } from "react-helmet-async";

// NOTE :
// Ce composant sert juste à regrouper les 4 composants de la page principale
// afin de leur donner une desccription meta via helmet pour le SEO.
//

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Accueil - Cassandre Marion Architecture</title>
        <meta
          name="description"
          content="Cassandre Marion, architecte en Bretagne et Normandie. Projets d'architecture à Rennes, Caen et leurs environs, spécialisée dans le bois et la réation.nov"
        />
      </Helmet>
      <Slider></Slider>
      <News></News>
      <Missions></Missions>
      <About></About>
    </>
  );
}
