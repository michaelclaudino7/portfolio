import { profile } from "@/lib/data";
import styles from "./About.module.scss";

const specs = [
  { label: "Cargo alvo", value: profile.role },
  { label: "Localização", value: profile.location },
  { label: "Idiomas", value: profile.languages },
  { label: "Formação", value: "ADS — UNINOVE, 2024" },
];

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.inner}>
        <p className={styles.kicker}>01 — SOBRE</p>

        <div className={styles.grid}>
          <p className={styles.summary}>{profile.summary}</p>

          <dl className={styles.specs}>
            {specs.map((spec) => (
              <div key={spec.label} className={styles.specRow}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
