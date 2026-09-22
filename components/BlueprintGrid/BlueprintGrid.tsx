import styles from "./BlueprintGrid.module.scss";

// Grid de fundo decorativo, estático (CSS puro) — não participa das
// animações GSAP para manter o "papel" quieto e deixar a atenção
// nos elementos que realmente se movem.
export default function BlueprintGrid() {
  return (
    <div className={styles.grid} aria-hidden="true">
      <div className={styles.crosshair} data-pos="tl" />
      <div className={styles.crosshair} data-pos="tr" />
      <div className={styles.crosshair} data-pos="bl" />
      <div className={styles.crosshair} data-pos="br" />
    </div>
  );
}
