import styles from "./Header.module.scss";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#competencias", label: "Competências" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#topo" className={styles.mark}>
          MC<span>.</span>
        </a>
        <nav className={styles.nav} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5511959380039"
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          Chamar no WhatsApp
        </a>
      </div>
    </header>
  );
}