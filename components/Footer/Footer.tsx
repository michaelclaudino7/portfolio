import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} Michael Rodrigues</span>
        <span>Construído com Next.js, TypeScript &amp; GSAP</span>
      </div>
    </footer>
  );
}
