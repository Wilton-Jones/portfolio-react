import styles from "./Presentation.module.css";
import ButtonA from "../elements/ButtonA";

function Presentation() {
  return (
    <div className={styles.presentation} id="Presentation">
      <h3>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h3>
      <h1>Olá, eu sou Wilton Jones</h1>
      <p>
        Sou um apaixonado por tecnologia e soluções inovadoras.Como <br />
        Product Manager, eu tenho o compromisso de resolver problemas <br />
        complexos e trazer resultados excepcionais para os negócios.Meus <br />
        projetos já geraram milhões de reais em receita anual estou <br />
        sempre em busca de novos desafios para superar.
      </p>
      <ButtonA
        text="Conecte-se comigo!!"
        link="https://github.com/Wilton-Jones"
      />
    </div>
  );
}

export default Presentation;
