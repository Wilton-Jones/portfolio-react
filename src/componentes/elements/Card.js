import styles from "./Card.module.css";
import ButtonB from "./ButtonB";
import { useState } from "react";

function Card({ img, title, tech, description, repository, site }) {
  const [info, setInfo] = useState(false);

  function infoOn() {
    setInfo(true);
  }

  function infoOff() {
    setInfo(false);
  }

  return (
    <div onMouseLeave={infoOff} className={styles.card}>
      <a onMouseEnter={infoOn} target="blank" href={site}>
        <img src={img} alt="Error!" />
      </a>

      {info === true && (
        <div className={styles.cardInfo}>
          <h3>{title}</h3>
          <p>
            <strong>Tecnologias:</strong> {tech}
          </p>
          <p>{description}</p>
          <ButtonB text="Acesse o repositório" link={repository} />
        </div>
      )}
    </div>
  );
}

export default Card;
