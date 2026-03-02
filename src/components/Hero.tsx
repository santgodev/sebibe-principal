"use client";
import styles from "./Hero.module.css";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgWrapper}>
                <img
                    src="https://sebibe.org/wp-content/uploads/2026/03/IMG_4034-scaled.jpg"
                    alt="Background"
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.subtitle}>Seminario Bíblico Berea</div>
                <h1 className={styles.title}>
                    Formación para lo <br />
                    <span className={styles.titleItalic}>Eterno y Profundo</span>
                </h1>
                <p className={styles.desc}>
                    Una experiencia inmersiva de disipulado, teología y comunidad.
                    No es solo estudiar, es ser transformado para impactar una generación.
                </p>

                <div className={styles.actions}>
                    <Link href="/admisiones" className={`${styles.button} ${styles.btnPrimary}`}>
                        Responder al Llamado
                    </Link>
                    <Link href="/nosotros" className={`${styles.button} ${styles.btnSecondary}`}>
                        Conocer la Visión
                    </Link>
                </div>
            </div>
        </section>
    );
}
