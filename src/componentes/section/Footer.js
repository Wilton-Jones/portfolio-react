import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a href="https://www.instagram.com/" target="blank">
            <FaInstagram size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Wilton-Jones" target="blank">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wilton-jones-8256742a0/"
            target="blank"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
      <p>wilton.jones13@gmail.com</p>
      <p>Wilton Jones @ 2024</p>
    </div>
  );
}

export default Footer;
