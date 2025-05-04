import React, { FC } from "react";
import Slider from "../Slider/Slider";

// NOTE :
// Ce composant sert juste à regrouper les 4 composants de la page principale
// afin de leur donner une desccription meta via helmet pour le SEO.
//

const HomePage: FC = () => {
  return (
    <>
      <Slider />
    </>
  );
};

export default HomePage;
