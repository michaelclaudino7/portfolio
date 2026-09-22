import { certifications } from "@/lib/data";
import styles from "./Certifications.module.scss";

// IDs de credencial muito longos (hashes) quebram feio em qualquer
// largura de card. Em vez de deixar o navegador cortar no meio da
// string, truncamos com reticências e guardamos o valor completo no
// atributo title (acessível via tooltip / leitor de tela).
function shortenId(id: string, max = 14) {
  if (id.length <= max) return id;
  return `${id.slice(0, max)}…`;
}

export default function Certifications() {
  return (
    <section id="certificacoes" className={styles.certs}>
      <div className={styles.inner}>
        <p className={styles.kicker}>05 — LICENÇAS &amp; CERTIFICAÇÕES</p>

        <ul className={styles.list}>
          {certifications.map((cert) => (
            <li key={cert.credentialId} className={styles.item}>
              <div className={styles.itemTop}>
                <div className={styles.itemHead}>
                  <h3>{cert.name}</h3>
                  <span className={styles.issued}>{cert.issued}</span>
                </div>
                <p className={styles.issuer}>{cert.issuer}</p>
              </div>

              <div className={styles.itemBottom}>
                {cert.skills && (
                  <ul className={styles.skills}>
                    {cert.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                )}
                <p className={styles.credential} title={cert.credentialId}>
                  ID {shortenId(cert.credentialId)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
