import { skillGroups } from "@/lib/data";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id="competencias" className={styles.skills}>
      <div className={styles.inner}>
        <p className={styles.kicker}>03 — COMPETÊNCIAS TÉCNICAS</p>

        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.label} className={styles.group}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
