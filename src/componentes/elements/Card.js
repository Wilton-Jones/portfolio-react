import styles from "./Card.module.css";
import ButtonB from "./ButtonB";

function Card({ img, title, tech, description, repository, site }) {
  return (
    <div className={styles.card}>
      <a target="blank" href={site}>
        <img src={img} alt="Error!" />
      </a>
      <div className={styles.cardInfo}>
        <h3>{title}</h3>
        <p>
          <strong>Tecnologias:</strong> {tech}
        </p>
        <p>{description}</p>
        <ButtonB text="Acesse o repositório" link={repository} />
      </div>
    </div>
  );
}

export default Card;
