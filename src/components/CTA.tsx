import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
    return (
        <section className={styles.section}>
            <div className={styles.bgPattern}></div>
            <div className={styles.container}>
                <h2 className={styles.title}>¿Listo para responder al llamado?</h2>
                <p className={styles.subtitle}>
                    Únete a una generación de líderes apasionados por Dios y su misión. Las matrículas para el periodo 2026-I están abiertas.
                </p>
                <Link href="/matriculas" className={styles.button}>
                    Inicia tu Proceso de Admisión
                </Link>
            </div>
        </section>
    );
}
