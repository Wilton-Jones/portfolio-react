import styles from "./Presentation.module.css";
import ButtonA from "../elements/ButtonA";
import { useState, useEffect } from "react";

function Presentation() {
  const [text, setText] = useState("");
  const toRotate = ["Wilton Jones", "Desenvolvedor Full Stack"];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState();

  useEffect(() => {
    let ticker = setInterval(() => {
      toType();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const toType = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(50);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(200);
      setLoop(loop + 1);
    }
  };

  return (
    <div className={styles.presentation} id="Presentation">
      <h3>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h3>
      <h1>Olá, eu sou {text}</h1>
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
