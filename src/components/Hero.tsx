"use client";
import styles from "./Hero.module.css";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
export default function Hero() {
    const { t } = useLanguage();
    return (
        <section className={styles.hero}>
            <div className={styles.bgWrapper}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.bgVideo}
                >
                    <source src="http://sebibe.org/wp-content/uploads/2026/03/BEREA-VIDEO.mp4" type="video/mp4" />
                </video>
                <Image
                    src="https://sebibe.org/wp-content/uploads/2026/03/IMG_4034-scaled.jpg"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.subtitle}>{t("hero_subtitle_top") || "Seminario Bíblico Berea"}</div>
                <h1 className={styles.title}>
                    {t("hero_title_1") || "Formación para lo"} <br />
                    <span className={styles.titleItalic}>{t("hero_title_2") || "Eterno y Profundo"}</span>
                </h1>
                <p className={styles.desc}>
                    {t("hero_desc") || "Una experiencia inmersiva de disipulado, teología y comunidad. No es solo estudiar, es ser transformado para impactar una generación."}
                </p>

                <div className={styles.actions}>
                    <Link href="https://wa.me/573144787072" className={`${styles.button} ${styles.btnPrimary}`}>
                        {t("hero_btn_1") || "Responder al Llamado"}
                    </Link>
                    <Link href="/nosotros" className={`${styles.button} ${styles.btnSecondary}`}>
                        {t("hero_btn_2") || "Conocer la Visión"}
                    </Link>
                </div>
            </div>
        </section>
    );
}
