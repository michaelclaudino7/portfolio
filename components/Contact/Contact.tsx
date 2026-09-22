import { profile } from "@/lib/data";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.inner}>
        <p className={styles.kicker}>06 — CONTATO</p>

        <h2 className={styles.heading}>
          Vamos construir <br />o próximo
          sistema juntos.
        </h2>

        <div className={styles.links}>
          <a href={profile.links.email} className={styles.primary}>
            Enviar e-mail
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
