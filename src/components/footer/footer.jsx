import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import styles from "./footer.module.scss";
import ImageContainer from "../imageContainer";

export default function Footer() {
  const textoGeral = "Olá! Vi seu site e gostaria de fazer um orçamento";

  return (
    <footer id="sobre" className={styles.container}>
      <p className={styles.maintext}>
        ACOMPANHE O NOSSO DIA DIA EM NOSSAS REDES SOCIAIS
      </p>

      <div className={styles.redessociais}>
        <a
          href="mailto:contato@mfsupport.com.br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <AiOutlineMail title="E-mail" size={45} />
        </a>
        <a
          href="https://www.facebook.com/mfsupport"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FiFacebook title="Facebook" size={45} />
        </a>
        <a
          href="https://www.instagram.com/mfsupport.it"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FiInstagram title="Instagram" size={45} />
        </a>
        <a
          href={`https://wa.me/5511942203623?text=${textoGeral}.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <FaWhatsapp title="Whatsapp" size={45} />
        </a>
      </div>

      <div className={styles.contatos}>
        <div className="tel-container">
          <a href="tel:011942203623" target="_blank" rel="noopener noreferrer">
            (11) 94220-3623
          </a>

          <p>|</p>

          <a href="tel:01145024552" target="_blank" rel="noopener noreferrer">
            (11) 4502-4552
          </a>
        </div>

        <a
          href="https://www.google.com/maps/place/R.+Capeberibe,+597+-+Barcelona,+S%C3%A3o+Caetano+do+Sul+-+SP,+09551-210"
          target="_blank"
          rel="noopener noreferrer"
          className="link-map"
        >
          Rua Capeberibe, 597 - São Caetano do Sul - São Paulo
        </a>
      </div>

      <p className={styles.copyright}>
        © 2020 - Desenvolvido por <strong>FSET</strong>
      </p>
    </footer>
  );
}
