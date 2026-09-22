import { education } from "@/lib/data";
import styles from "./Education.module.scss";

export default function Education() {
  return (
    <section id="formacao" className={styles.education}>
      <div className={styles.inner}>
        <p className={styles.kicker}>04 — FORMAÇÃO</p>

        {education.map((edu) => (
          <div key={edu.school} className={styles.card}>
            <span className={styles.mark}>{edu.schoolMark}</span>
            <div className={styles.body}>
              <div className={styles.head}>
                <h3>{edu.school}</h3>
                <span className={styles.period}>{edu.period}</span>
              </div>
              <p className={styles.degree}>{edu.degree}</p>
              <p className={styles.description}>{edu.description}</p>
              <ul className={styles.tags}>
                {edu.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
