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
        Sou um apaixonado por tecnologia e soluções inovadoras.Nesse momento{" "}
        <br />
        de transição de carreira, gostaria de ter a oportunidade de mostrar{" "}
        <br />
        meus talentos, entusiasmo e minha vontade de aprender e evoluir.Meu{" "}
        <br />
        maior objetivo é aplicar minhas habilidades, ganhar bastante experiência{" "}
        <br />e enriquecer meu futuro profissional e o da empresa.
      </p>
      <ButtonA
        text="Conecte-se comigo!!"
        link="https://github.com/Wilton-Jones"
      />
    </div>
  );
}

export default Presentation;
