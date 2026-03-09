"use client";
import Link from "next/link";
import styles from "./CTA.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
    const { t } = useLanguage();
    return (
        <section className={styles.section}>
            <div className={styles.bgPattern}></div>
            <div className={styles.container}>
                <h2 className={styles.title}>{t("cta_title", "¿Listo para responder al llamado?", "Ready to answer the call?")}</h2>
                <p className={styles.subtitle}>
                    {t("cta_subtitle", "Únete a una generación de líderes apasionados por Dios y su misión. Las matrículas para el periodo 2026-I están abiertas.", "Join a generation of leaders passionate about God and his mission. Enrollments for the 2026-I period are open.")}
                </p>
                <Link href="https://wa.me/573144787072" className={styles.button}>
                    {t("cta_button", "Inicia tu Proceso de Admisión", "Start Your Admission Process")}
                </Link>
            </div>
        </section>
    );
}
