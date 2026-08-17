import styles from "./ChurchHero.module.css";

export default function ChurchHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2973&auto=format&fit=crop"
          alt="Impacto River Church"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <span className={styles.subtitle}>Impacto River</span>
        <h1 className={styles.title}>
          Bienvenidos <br />
          <span>a Casa.</span>
        </h1>
        <p className={styles.description}>
          Un lugar para encontrar propósito, construir relaciones genuinas y experimentar el amor de Dios de una manera real y transformadora.
        </p>
      </div>
    </section>
  );
}
