import styles from "./menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.navbar}>
      <section>
        <a href="#pcgamer">PC GAMER</a>
        <a href="#reparoplaca">REPARO DE PLACA</a>
        <a href="#notebook">NOTEBOOKS</a>
        <a href="#tv">TV E MONITOR</a>
        <a href="#empresas">ATENDIMENTO EMPRESARIAL</a>
        <a href="#sobre">CONTATO</a>
      </section>
    </nav>
  );
}
