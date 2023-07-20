/* eslint-disable @next/next/no-img-element */
import syles from "./btnWhatsApp.module.scss";

export default function BtnWhatsApp({ txtComplementar = "" }) {
  const textoGeral = "Olá! Vi seu site e gostaria de fazer um orçamento";

  return (
    <a
      href={`https://wa.me/5511942203623?text=${textoGeral}${txtComplementar}.`}
      className={syles.container}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <img src="whatsapp.png" alt="Whatsapp" />
    </a>
  );
}
