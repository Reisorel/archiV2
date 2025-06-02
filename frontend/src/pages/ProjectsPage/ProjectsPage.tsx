import { FC } from "react";
import { Title, Meta } from "react-head";
import Projects from "../../components/Functional/Projects/Projects";

const ProjectsPage: FC = () => {
  return (
    <>
      <Title>Galerie projets - Cassandre Marion architecture</Title>
      <Meta
        name="description"
        content="Découvrez les projets d’architecture de Cassandre Marion : maisons, appartements, constructions, extensions, permis de construire et réhabilitations."
      />
      <Projects />
    </>
  );
};

export default ProjectsPage;
