import styles from "./Projects.module.css";
import ButtonB from "../elements/ButtonB";
import Card from "../elements/Card";
import lpdnc from "../../Image/projects/lpdnc.svg";
import portfolio from "../../Image/projects/portfolio.svg";

function Projects() {
  return (
    <div className={styles.projects} id="Projects">
      <h1>Projetos</h1>
      <Card
        img={lpdnc}
        title="LP-DNC"
        tech="HTML, CSS e JS"
        description="Desenvolvimento de uma Landing Page para o lançamento de formação em tecnologia"
        repository="https://github.com/Wilton-Jones/Projeto-Landing-Page.git"
        site="https://projetolandingpage-dnc.netlify.app"
      />
      <Card
        img={portfolio}
        title="Portfólio React"
        tech="React"
        description="Projeto pessoal de criação de portfólio"
        repository="https://github.com/Wilton-Jones/Projeto-Landing-Page.git"
        site="https://projetolandingpage-dnc.netlify.app"
      />
      <div className={styles.buttonB}>
        <ButtonB
          text="Ver repositório Completo"
          link="https://github.com/Wilton-Jones?tab=repositories"
        />
      </div>
    </div>
  );
}

export default Projects;
